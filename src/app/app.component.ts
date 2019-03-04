import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { WordGroup } from './words';
import { WordService } from './word.service';
import { flushMicrotasks } from '@angular/core/testing';

@Component({
  selector: 'spell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('spellingInput') spellingInput: ElementRef;

  // @Input() words:string[]
  words: string[];
  wordCount = 0;
  wordsUntried: string[];
  wordsLeft = 0;
  spelledWord: string;
  currentWord: string;
  currentWordIndex = -1;
  attempts: Attempt[] = [];
  correctWordPoints = 10;
  incorrectWordPoints = 20;
  previousWordsScore = 0;
  currentWordScore = 0;
  totalScore = 0;
  totalWords = 0;
  totalCorrect = 0;
  percentCorrect = 0;
  startingGrade = 5;
  showFireworks = false;
  wordGroups: WordGroup[];
  dictionaryURL: any;
  playSounds = false;

  // myWords = {};

  constructor(private wordService: WordService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.myWords = this.wordService.wordsToJSON();
    const groups = JSON.parse(localStorage.getItem('word-groups'));
    if (groups) {
      this.wordGroups = groups;
    } else {
      this.resetWordGroups();
    }

    const grade = localStorage.getItem('starting-grade');
    if (grade && Number(grade)) {
      this.startingGrade = Number(grade);
    }
    this.words = this.wordService.get2018Words(this.startingGrade, this.wordGroups);
    this.wordCount = this.words.length;

    this.wordsUntried = this.words.slice();

    // get the list of historical attempts from local storage
    const attemptsData: string = localStorage.getItem('spelling-practice');
    if (attemptsData && attemptsData.length > 0) {
      this.attempts = JSON.parse(attemptsData);
    }
    // go through historical attempts and calculate score
    this.scoreAttempts();
    // get the last "current word" from local storage, or select a new one if none found
    const current: string = localStorage.getItem('spell-current-word');
    if (current && current.length > 0) {
      this.currentWord = current;
      this.showDictionaryPage(this.currentWord);
    } else {
      this.selectNewWord(false);
    }

    // go through list of historic attempts and filter out to get list of words not yet tried
    this.filterWordAttemptsFromWordsUntried();
    this.wordsLeft = this.wordsUntried.length;

    // now focus in the input box
    this.spellingInput.nativeElement.focus();
  }

  async showDictionaryPage(word: string) {
    this.dictionaryURL = await this.sanitizer.bypassSecurityTrustResourceUrl('https://www.merriam-webster.com/dictionary/' + word);
  }

  // isGroupSelected(wordGroup): boolean {
  //   // const groups = JSON.parse(localStorage.getItem('word-groups'));
  //   console.log(this.wordGroups);
  //   console.log(wordGroup);
  //   const group = this.wordGroups.find(g => g.name === wordGroup);
  //   return group && group.selected;
  // }

  playSoundsClicked() {
    this.playSounds = !this.playSounds;
  }

  wordGroupClicked(wordGroup: WordGroup, selected: boolean): void {
    const group = this.wordGroups.find(g => g.name === wordGroup.name);
    if (group) {
      const index = this.wordGroups.indexOf(group);
      this.wordGroups[index].selected = selected;
    }
    localStorage.setItem('word-groups', JSON.stringify(this.wordGroups));

    this.words = this.wordService.get2018Words(this.startingGrade, this.wordGroups);
    this.wordCount = this.words.length;
    this.wordsUntried = this.words.slice();
    this.wordsLeft = this.wordsUntried.length;
    console.log(this.wordGroups);
  }

  setStartingGrade(): void {
    localStorage.setItem('starting-grade', this.startingGrade.toString());

    this.words = this.wordService.get2018Words(this.startingGrade, this.wordGroups);
    this.wordCount = this.words.length;
    this.wordsUntried = this.words.slice();
    this.wordsLeft = this.wordsUntried.length;
    console.log(this.startingGrade);
  }

  filterWordAttemptsFromWordsUntried() {
    let i: number;
    for (i = 0; i < this.attempts.length; i++) {
      const word = this.attempts[i].word;
      const wordIndex: number = this.wordsUntried.indexOf(word);
      if (wordIndex >= 0 && word !== this.currentWord) {
        this.wordsUntried.splice(wordIndex, 1);
      }
    }
  }

  scoreAttempts() {
    let i: number;
    this.totalWords = this.attempts.length;
    for (i = 0; i < this.attempts.length; i++) {
      if (this.attempts[i].won) {
        this.totalCorrect += 1;
        this.previousWordsScore += this.correctWordPoints + this.attempts[i].word.length;
      } else {
        this.previousWordsScore -= this.incorrectWordPoints;
      }
    }

    this.totalScore = this.previousWordsScore;
  }

  selectNewWord(removeLastWord: boolean) {
    console.log('untried words: ' + this.wordsUntried.length);
    if (removeLastWord && this.currentWordIndex >= 0) {
      // remove last word from array
      this.wordsUntried.splice(this.currentWordIndex, 1);
    }

    if (this.wordsUntried.length === 0) {
      // TODO: make a big deal that every word has been spelled!
      this.wordsUntried = this.words.slice();
    }

    this.currentWordIndex = Math.floor(Math.random() * this.wordsUntried.length);
    this.currentWord = this.wordsUntried[this.currentWordIndex];
    this.showDictionaryPage(this.currentWord);
    this.wordsLeft = this.wordsUntried.length;

    localStorage.setItem('spell-current-word', this.currentWord);
  }

  wordChange(word: string) {
    const targetWord: string = this.currentWord;
    const lowerCaseWord: string = this.currentWord.toLowerCase();
    const attemptWord: string = word.toLowerCase();

    if (lowerCaseWord === attemptWord) {
      this.wordSpelledCorrectly(targetWord);
    } else if (lowerCaseWord.startsWith(attemptWord)) { // still spelling, still correct
      this.totalScore = this.previousWordsScore + attemptWord.length;
      this.playSoundKeypress();
    } else {
      this.wordSpelledIncorrectly(targetWord);
    }
  }

  wordSpelledCorrectly(word: string) {
    this.showFireworks = true;
    this.clearWord(true);
    this.totalWords += 1;
    this.totalCorrect += 1;
    this.previousWordsScore += word.length + this.correctWordPoints;
    this.totalScore = this.previousWordsScore;

    const attempt: Attempt = {word: word, won: true};
    this.attempts.unshift(attempt);

    const data: string = JSON.stringify(this.attempts);
    localStorage.setItem('spelling-practice', data);
    this.playSoundCorrect();
  }

  wordSpelledIncorrectly(word: string) {
    this.clearWord(false);
    this.totalWords += 1;
    this.previousWordsScore -= this.incorrectWordPoints;
    this.totalScore = this.previousWordsScore;

    const attempt: Attempt = {word: word, won: false};
    this.attempts.unshift(attempt);

    const data: string = JSON.stringify(this.attempts);
    localStorage.setItem('spelling-practice', data);
    this.playSoundIncorrect();
  }

  async clearWord(newWord: boolean) {
    this.spellingInput.nativeElement.disabled = true;

    await this.delay(1500);
    this.spelledWord = '';
    this.spellingInput.nativeElement.disabled = false;
    this.spellingInput.nativeElement.focus();
    this.showFireworks = false;
    if (newWord) {
      this.selectNewWord(true);
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  playSound(src: string) {
    const audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }

  playSoundIncorrect() {
    if (this.playSounds) {
      this.playSound('https://soundbible.com/mp3/Door Buzzer-SoundBible.com-1567875395.mp3');
    }
  }

  playSoundKeypress() {
    // other possible keypress sound sources:
    // http://soundbible.com/mp3/Pat-SoundBible.com-1661659465.mp3
    // http://soundbible.com/mp3/Click2-Sebastian-759472264.mp3
    // http://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3
    // http://soundbible.com/mp3/Woosh-Mark_DiAngelo-4778593.mp3

    if (this.playSounds) {
      this.playSound('https://soundbible.com/mp3/Click-SoundBible.com-1387633738.mp3');
    }
  }

  playSoundCorrect() {
    const funSoundSources: string[] = [
      'https://soundbible.com/mp3/Air Horn-SoundBible.com-964603082.mp3', 'https://soundbible.com/mp3/1_person_cheering-Jett_Rifkin-1851518140.mp3',
      'https://soundbible.com/mp3/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3', 'https://soundbible.com/mp3/5_Sec_Crowd_Cheer-Mike_Koenig-1562033255.mp3',
      'https://soundbible.com/mp3/Music_Box-Big_Daddy-1389738694.mp3', 'https://soundbible.com/mp3/Magic Wand Noise-SoundBible.com-375928671.mp3',
      'https://soundbible.com/mp3/Yess-Fabio_Farinelli-187689388.mp3', 'https://soundbible.com/mp3/front-desk-bells-daniel_simon.mp3',
      'https://soundbible.com/mp3/slot-machine-daniel_simon.mp3', 'https://soundbible.com/mp3/dixie-horn_daniel-simion.mp3',
      'https://soundbible.com/mp3/steam-train-whistle-daniel_simon.mp3', 'https://soundbible.com/mp3/sms-alert-1-daniel_simon.mp3',
      'https://soundbible.com/mp3/sms-alert-2-daniel_simon.mp3', 'https://soundbible.com/mp3/sms-alert-3-daniel_simon.mp3',
      'https://soundbible.com/mp3/sms-alert-4-daniel_simon.mp3', 'https://soundbible.com/mp3/sms-alert-5-daniel_simon.mp3',
      'https://soundbible.com/mp3/Fart-Squeeze-Yer-Knees_Mike-Koenig.mp3', 'https://soundbible.com/mp3/gibbon-monkey-daniel_simon.mp3',
      'https://soundbible.com/mp3/puppy-barking_ds.mp3', 'https://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3',
      'https://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3', 'https://soundbible.com/mp3/Silly_Farts-Joe-1473367952.mp3',
      'https://soundbible.com/mp3/Coin_Drop-Willem_Hunt-569197907.mp3', 'https://soundbible.com/mp3/UFO_Takeoff-Sonidor-1604321570.mp3',
      'https://soundbible.com/mp3/descending_craft-Sonidor-991848481.mp3', 'https://soundbible.com/mp3/Rudy_rooster_crowing-Shelley-1948282641.mp3',
      'https://soundbible.com/mp3/Kid_Laugh-Mike_Koenig-1673908713.mp3', 'https://soundbible.com/mp3/Cha_Ching_Register-Muska666-173262285.mp3',
      'https://soundbible.com/mp3/running_feet_-Cam-942211296.mp3', 'https://soundbible.com/mp3/Falcon-Mark_Mattingly-169493032.mp3',
      'https://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3', 'https://soundbible.com/mp3/Turkey_Call_2-JimBob-26023545.mp3',
      'https://soundbible.com/mp3/hello_son-Mike_Koenig-810187901.mp3', 'https://soundbible.com/mp3/Turkey_Call-JimBob-1691466258.mp3',
      'https://soundbible.com/mp3/bye_bye_son-Mike_Koenig-1260922981.mp3', 'https://soundbible.com/mp3/short_male_burp-Mike_Koenig-832127430.mp3',
      'https://soundbible.com/mp3/mallard_duck_quacking-Mike_Koenig-1781775990.mp3', 'https://soundbible.com/mp3/Metroid_Door-Brandino480-995195341.mp3',
      'https://soundbible.com/mp3/mallard_duck-Mike_Koenig-667013646.mp3', 'https://soundbible.com/mp3/killdeer_song-Mike_Koenig-1144525481.mp3',
      'https://soundbible.com/mp3/Children_Laughing-Mike_Koenig-575083331.mp3', 'https://soundbible.com/mp3/Warbling_Vireo-Mike_Koenig-89869915.mp3'
    ];
    const src = funSoundSources[Math.floor(Math.random() * funSoundSources.length)];

    if (this.playSounds) {
      this.playSound(src);
    }
  }

  resetGame() {
    this.spelledWord = '';
    this.currentWord = '';
    this.attempts = [];
    this.previousWordsScore = 0;
    this.currentWordScore = 0;
    this.totalScore = 0;
    this.totalWords = 0;
    this.totalCorrect = 0;
    this.percentCorrect = 0;
    this.wordsUntried = this.words.slice();

    localStorage.setItem('spell-current-word', '');
    localStorage.setItem('spelling-practice', '');
    this.resetWordGroups();
    this.selectNewWord(false);
  }

  resetWordGroups() {
    this.wordGroups = [
      {name: 'Latin', selected: true},
      {name: 'Arabic', selected: false},
      {name: 'Asian', selected: false},
      {name: 'French', selected: false},
      {name: 'Eponyms', selected: false},
      {name: 'German', selected: false},
      {name: 'Slavic', selected: false},
      {name: 'Old English', selected: false},
      {name: 'New World', selected: false},
      {name: 'Japanese', selected: false},
      {name: 'Greek', selected: false},
      {name: 'Frequently Misspelled', selected: false},
      {name: 'Homonyms', selected: false},
      {name: 'Commonly Confused', selected: false},
      {name: 'Other Bees', selected: false},
      {name: 'Dutch', selected: false},
      {name: 'Italian', selected: false},
      {name: 'Spanish', selected: false},
    ];
    localStorage.setItem('word-groups', JSON.stringify(this.wordGroups));
  }
}

interface Attempt {
  word: string;
  won: boolean;
}
