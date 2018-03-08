import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'spell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('spellingInput') spellingInput: ElementRef;
  latinWords: string[] = ['inane','relevant','impetuous','ambivalent','dejected','postmortem','incriminate','access','plausible','interrupt','alliteration','refugee','amicable','lucid','percolate','meticulous','fastidious','trajectory','animosity','implement','ambiguity','curriculum','omnivorous','bellicose','electoral','crescent','obsequious','transect','precipice','susceptible','condolences','benefactor','candidate','bugle','formidable','canary','subterfuge','abdicate','lunatic','carnivore','gregarious','ostentatious','prosaic','herbivore','prodigal','magnanimous','benevolent','mercurial','simile','jovial','ridiculous','innate','obstinate','discern','mediocre','insidious','rupture','precipitate','erudite','colloquial','intractable','exuberant','ingenious','retrospective','ominous','vulnerable','omnipotent','consensus','discipline','alleviate','spectrum','prescription','capitulation','incredulous','affinity','necessary','adjacent','dissect','conjecture','imperative','predicate','corporal','patina','Capricorn','participant','library','cognition','primal','filament','unity','ventilate','aquatic','igneous','reptile','providence','message','foliate','nasal','opera','renovate','credentials','temporal','canine','measure','credible','femininity','confidence','triumvirate','popularity','diary','humble','vivisection','strict','prosecute','contiguous','ductile','gradient','current','perfidy','fidelity','incorruptible'];
  words:string[] = [...this.latinWords];
  spelledWord:string;
  currentWord:string;
  attempts:Attempt[] = [];

  constructor() { }

  ngOnInit() {
    this.selectNewWord();
    this.spellingInput.nativeElement.focus();
  }

  selectNewWord(){
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

  wordChange(word: string) {
    let targetWord:string = this.currentWord.toLowerCase();
    let attemptWord:string = word.toLowerCase();
    if (targetWord === attemptWord) {
      this.clearWord();
      let attempt:Attempt = {spelling: targetWord, correct: true};
      this.attempts.unshift(attempt);
      this.playSound(["crowd-cheer","person-cheering","air-horn","short-applause","music-box","magic-wand","yes-a","slot-machine","dixie-horn","train-whistle","alert-1","alert-2","alert-3","alert-4","alert-5","fart","gibbon","puppy","glass-ping"]);
    } else if (targetWord.startsWith(attemptWord)){
      this.playSound(["deep-click"]);
    } else {
      this.clearWord();
      let attempt:Attempt = {spelling: targetWord, correct: false};
      this.attempts.unshift(attempt);
      this.playSound(["door-buzzer"]);
    }
  }
  async clearWord(){
    this.spellingInput.nativeElement.disabled = true;

    await this.delay(1500);
    this.spelledWord = '';
    this.spellingInput.nativeElement.disabled = false;
    this.spellingInput.nativeElement.focus();
    this.selectNewWord();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  playSound(sounds:string[]) {
    let sound = sounds[Math.floor(Math.random() * sounds.length)];
    let src:string = "";
    switch (sound) {
      case "tap":
        src = "http://soundbible.com/mp3/Pat-SoundBible.com-1661659465.mp3";
        break;
      case "click":
        src = "http://soundbible.com/mp3/Click2-Sebastian-759472264.mp3";
        break;
      case "deep-click":
        src = "http://soundbible.com/mp3/Click-SoundBible.com-1387633738.mp3";
        break;
      case "click-off":
        src = "http://soundbible.com/mp3/Button Click Off-SoundBible.com-1730098776.mp3";
        break;
      case "click-on":
        src = "http://soundbible.com/mp3/Click On-SoundBible.com-1697535117.mp3";
        break;
      case "air-horn":
        src = "http://soundbible.com/mp3/Air Horn-SoundBible.com-964603082.mp3";
        break;
      case "door-buzzer":
        src = "http://soundbible.com/mp3/Door Buzzer-SoundBible.com-1567875395.mp3";
        break;
      case "person-cheering":
        src = "http://soundbible.com/mp3/1_person_cheering-Jett_Rifkin-1851518140.mp3";
        break;
      case "short-applause":
        src = "http://soundbible.com/mp3/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3";
        break;
      case "crowd-cheer":
        src = "http://soundbible.com/mp3/5_Sec_Crowd_Cheer-Mike_Koenig-1562033255.mp3";
        break;
      case "music-box":
        src = "http://soundbible.com/mp3/Music_Box-Big_Daddy-1389738694.mp3";
        break;
      case "magic-wand":
        src = "http://soundbible.com/mp3/Magic Wand Noise-SoundBible.com-375928671.mp3";
        break;
      case "yes-a":
        src = "http://soundbible.com/mp3/Yess-Fabio_Farinelli-187689388.mp3";
        break;
      case "desk-bell":
        src = "http://soundbible.com/mp3/front-desk-bells-daniel_simon.mp3";
        break;
      case "slot-machine":
        src = "http://soundbible.com/mp3/slot-machine-daniel_simon.mp3";
        break;
      case "dixie-horn":
        src = "http://soundbible.com/mp3/dixie-horn_daniel-simion.mp3";
        break;
      case "train-whistle":
        src = "http://soundbible.com/mp3/steam-train-whistle-daniel_simon.mp3";
        break;
      case "alert-1":
        src = "http://soundbible.com/mp3/sms-alert-1-daniel_simon.mp3";
        break;
      case "alert-2":
        src = "http://soundbible.com/mp3/sms-alert-2-daniel_simon.mp3";
        break;
      case "alert-3":
        src = "http://soundbible.com/mp3/sms-alert-3-daniel_simon.mp3";
        break;
      case "alert-4":
        src = "http://soundbible.com/mp3/sms-alert-4-daniel_simon.mp3";
        break;
      case "alert-5":
        src = "http://soundbible.com/mp3/sms-alert-5-daniel_simon.mp3";
        break;
      case "fart":
        src = "http://soundbible.com/mp3/Fart-Squeeze-Yer-Knees_Mike-Koenig.mp3";
        break;
      case "gibbon":
        src = "http://soundbible.com/mp3/gibbon-monkey-daniel_simon.mp3";
        break;
      case "puppy":
        src = "http://soundbible.com/mp3/puppy-barking_ds.mp3";
        break;
      case "glass-ping":
        src = "http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3";
        break;
      default:
        break;
    }

    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }
}

interface Attempt {
  spelling: string;
  correct: boolean;
}
