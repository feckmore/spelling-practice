import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'spell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('spellingInput') spellingInput: ElementRef;

  latinWords: string[] = ['inane','relevant','impetuous','ambivalent','dejected','postmortem','incriminate','access','plausible','interrupt','alliteration','refugee','amicable','lucid','percolate','meticulous','fastidious','trajectory','animosity','implement','ambiguity','curriculum','omnivorous','bellicose','electoral','crescent','obsequious','transect','precipice','susceptible','condolences','benefactor','candidate','bugle','formidable','canary','subterfuge','abdicate','lunatic','carnivore','gregarious','ostentatious','prosaic','herbivore','prodigal','magnanimous','benevolent','mercurial','simile','jovial','ridiculous','innate','obstinate','discern','mediocre','insidious','rupture','precipitate','erudite','colloquial','intractable','exuberant','ingenious','retrospective','ominous','vulnerable','omnipotent','consensus','discipline','alleviate','spectrum','prescription','capitulation','incredulous','affinity','necessary','adjacent','dissect','conjecture','imperative','predicate','corporal','patina','Capricorn','participant','library','cognition','primal','filament','unity','ventilate','aquatic','igneous','reptile','providence','message','foliate','nasal','opera','renovate','credentials','temporal','canine','measure','credible','femininity','confidence','triumvirate','popularity','diary','humble','vivisection','strict','prosecute','contiguous','ductile','gradient','current','perfidy','fidelity','incorruptible'];
  arabicWords: string[] = ['azure','Islamic','sultan','artichoke','mummy','tarragon','adobe','mohair','borax','talc','arsenal','lemon','tuna','admiral','hazard','apricot','carmine','monsoon','average','gazelle','crimson','orange','sequin','macrame','algebra','guitar','nabob','giraffe','mattress','elixir','saffron','cotton','albatross','zero','safari','magazine','zenith','alfalfa','imam','mosque','alcohol','tariff','lilac','alcove','massage','henna','alchemy','sugar','taj','mahal','khan','ghoul'];
  asianWords: string[] = ['dugong','guru','cushy','seersucker','jungle','oolong','nirvana','bangle','cummerbund','juggernaut','pangolin','mahatma','rupee','mongoose','shampoo','typhoon','bamboo','jackal','dungaree','bungalow','gunnysack','chutney','karma','jute','yamen','raj','kama','pundit','loot','kavya','jiva','pandit','chintz','patel'];
  frenchWords: string[] = ['peloton','barrage','chagrin','pacifism','manicure','altruism','bureaucracy','mascot','parfait','mystique','layette','boutique','dressage','croquet','gorgeous','denture','mirage','denim','cachet','neologism','beige','diplomat','motif','suave','foyer','clementine','ambulance','rehearse','leotard','prairie','diorama','entourage','fuselage','boudoir','collage','amenable','expertise','matinee','plateau','sortie','croquette','physique','elite','deluxe','nougat','rouge','escargot','crochet','regime','doctrinaire','tutu','bevel','menu','egalitarian','quiche','fatigue','garage','morgue','stethoscope','vogue','musicale','palette','flamboyant','baton','souvenir','impasse','finesse','maladroit'];
  eponyms: string[] = ['praline','magnolia','boysenberry','hosta','poinsettia','macadamia','salmonella','newton','saxophone','tortoni','greengage','angstrom','gardenia','melba','tantalize','zinnia','quisling','begonia','samaritan','Panglossian','quixote','jeremiad','hector','Geronimo','shrapnel','vulcanize','Frankenstein','Boswell','ampere','cupid','Fletcherism','yahoo','diesel','bandersnatch','Crusoe','mentor','Dracula'];
  germanWords: string[] = ['angst','pretzel','waltz','haversack','nosh','sauerbraten','hinterland','verboten','liverwurst','streusel','umlaut','wanderlust','eiderdown','schnauzer','lederhosen','kohlrabi','sitzmark','langlauf','autobahn','Backstein','inselberg','gestalt','einkorn','kitsch','gestapo','schloss','rucksack','echt','bratwurst','knapsack','feldspar','poltergeist','noodle','spareribs','Meistersinger','pumpernickel','Bildungsroman','strudel','bagel','hamster','cobalt','nachtmusik','vorlage','graupel','Wagnerian','cringle','fife','glitz','homburg','kuchen','pitchblende','spritz','prattle','zwinger','spitz','realschule','panzer','stollen','dachshund','seltzer'];
  slavicWords: string[] = ['gulag','parka','Slav','robot','samovar','kremlin','troika','slave','mammoth','Siberian','tundra','Permian','kishke','glasnost','paprika','sable','kasha','nebbish','polka','Bolshevik','vampire','sputnik','knish','cravat','babushka','Soviet','Borzoi','gopak','cheka','sevruga','trepak','babka','purga','baba','cossack','nelma','kovsh','lokshen','feldsher','barabara','aul'];
  dutchWords: string[] = ['cockatoo','keelhaul','harpoon','furlough','bowery','easel','holster','freebooter','waffle','trawl','uproar','beleaguer','cruller','yacht','wiseacre','brackish','decoy','caboose','buckwheat','walrus','howitzer','crimp','bluff','stipple','floss','cruiser','hustle','klompen','polder','bundle','catkin','splice','Flemish','grabble','huckster','frolic','ravel','tattle','scum','trek','scrabble','clapboard','gruff','isinglass','excise','blister','rabbit','package','muddle','handsome','foist','staple','gulden','mart','screen','guilder','etch','Netherlander','dune','croon','ticket','buckwagon','hock','boodle','guy','daffodil','loiter','potash','scow','wintergreen','trigger','stripe','bruin','skipper','waywiser','spoor','mizzle','school','pickle','snuff'];
  oldEnglishWords: string[] = ['quell','barrow','dearth','bower','paddock','blithe','keen','mongrel','reckless','alderman','whirlpool','belay','cleanser','dreary','bequeath','sallow','dross','lithe','gristle','earwig','fickle','nestle','fennel','nostril','abide','behest','slaughter','gospel','furlong','linseed','nether','fathom','nightingale','farthing','threshold','kith','wanton','loam','yield','mattock','hawthorn','tithe','behoove','forlorn','quiver','hustings','aspen','mermaid','anvil','barley','linden','hassock','orchard','hearth','watery','fiend','goatee','earthenware','windily','dealership','bookkeeping','fiery','learned','nosiest','creepy','errand','daily','gnat','broadleaf','stringy','dairy','workmanship','newfangled','timely','dogged','mootable','womanly','manhandle','folksiness','worrisome','roughhewn','knavery','hurdle','kipper','hundredth','icicle','pinafore','yieldable','hue'];
  newWorldWords: string[] = ['condor','iguana','hurricane','kahuna','hogan','jerky','muskrat','hominy','wigwam','pampas','caribou','toboggan','persimmon','quinine','powwow','bayou','coyote','tamale','poi','cashew','luau','totem','mahimahi','hickory','cacao','kona','malihini','wikiwiki','Tuckahoe','pecan','chipotle','skunk','woodchuck','chocolate','muumuu','puma','tomato','maraca','petunia','jaguar','buccaneer','llama','succotash','caucus','wampum','mole','toucan'];
  japaneseWords: string[] = ['ninja','sushi','tofu','shogun','honcho','karate','samurai','teriyaki','sashimi','tsunami','haiku','futon','mikado','hibachi','origami','geisha','wasabi','ramen','kudzu','banzai','tycoon','sumo','koan','satori','tatami','kami','sukiyaki','kuruma','Meiji','Romaji','odori','miso','Kabuki','geta','sayonara'];
  greekWords: string[] = ['lethargy','android','chronic','biopsy','irony','automaton','enthusiasm','synopsis','homogeneous','odyssey','megalopolis','acme','synonym','orthodox','aristocracy','calypso','patriarch','hierarchy','character','isobar','asterisk','eclectic','melancholy','stoic','chronology','eulogy','didactic','cosmetic','Spartan','geothermal','cynical','homonym','cryptic','hypothesis','academy','pentathlon','antibiotic','diatribe','etymology','hydraulic','trauma','hygiene','semantics','thesaurus','phenomenon','cosmos','protagonist','acronym','paradox','synchronous','misanthropy','sarcasm','ephemeral','polygon','nemesis','syntax','eureka','topography','panic','apostrophe','geranium','metaphor','spherical','xylophone','dynamic','myriad','epiphany','apathy','synergy','amnesia','philanthropy','democracy','strategy','diagnosis','topical','matriarch','endemic','analysis','rhetoric','eponym','agnostic','dogma','idiom','thermal','dyslexia','Olympian','allegory','pragmatic','adamant','protocol','tragic','hydrology','polymer','notochord','biblical','ergonomic','mathematics','tachometer','protein','rhinoceros','hyphen','autopsy','pyre','herpetology','angelic','tritium','androcentric','demotic','geode','hedonism','periscope','geoponics','asthmogenic','monotonous','amphibious','symbiosis','macron','periphery'];
  italianWords: string[] = ['staccato','ballot','confetti','semolina','influenza','cavalry','piazza','cadenza','pistachio','spinet','cantata','incognito','vendetta','contraband','mascara','graffiti','credenza','parapet','falsetto','ditto','provolone','extravaganza','scampi','belladonna','gondola','rotunda','cauliflower','galleria','regatta','crescendo','balcony','portfolio','antipasto','libretto','virtuoso','harmonica','maestro','bravura','fresco','stucco','inferno','ballerina','malaria','grotto','harpsichord','allegro','virtuosa','spaghetti','piccolo','ravioli','vibrato','pesto','aria','bambino','salami','Parmesan','oratorio','finale','scenario','contrapuntal','illuminati','concerto','macaroni','palmetto','bandit','fiasco','cameo','sonata','coloratura'];
  spanishWords: string[] = ['burrito','embargo','chimichanga','gazpacho','mariachi','sombrero','alligator','canasta','bonanza','chinchilla','machismo','enchilada','pueblo','hacienda','fandango','quesadilla','flotilla','tornado','flamenco','vigilante','adios','cabana','gordita','peccadillo','filibuster','tortilla','vanilla','cilantro','fiesta','anchovy','mesa','ramada','junco','cafeteria','bongo','castanets','mantilla','oregano','lariat','chalupa','buffalo','renegade','langosta','alamo','barrio','cedilla','Argentine','bolivar','amarillo','cordovan','desperado','empanada','tomatillo','diablo','pochismo','sierra','olio','bolero','junta','duenna'];

  words:string[] = [...this.latinWords, ...this.arabicWords, ...this.asianWords, ...this.frenchWords, ...this.eponyms, ...this.germanWords, ...this.slavicWords,
    ...this.dutchWords, ...this.oldEnglishWords, ...this.newWorldWords, ...this.japaneseWords, ...this.greekWords, ...this.italianWords, ...this.spanishWords];

  spelledWord:string;
  currentWord:string;
  attempts:Attempt[] = [];
  previousWordsScore:number = 0;
  currentWordScore:number = 0;
  totalScore:number = 0;
  totalWords:number = 0;
  totalCorrect:number = 0;
  percentCorrect:number = 0;

  constructor() { }

  ngOnInit() {
    let attemptsData:string = localStorage.getItem('spelling-practice');
    if (attemptsData && attemptsData.length > 0){
      this.attempts = JSON.parse(attemptsData);
    }
    this.scoreAttempts();

    let current:string = localStorage.getItem('spell-current-word');
    if (current && current.length > 0) {
      this.currentWord = current;
    } else {
      this.selectNewWord();
    }
    this.spellingInput.nativeElement.focus();
  }

  scoreAttempts(){
    let i: number = 0;
    this.totalWords = this.attempts.length;
    for (i = 0; i < this.attempts.length; i++) {
      if (this.attempts[i].won){
        this.totalCorrect += 1;
        this.previousWordsScore += 10 + this.attempts[i].word.length;
      } else {
        this.previousWordsScore -= 50;
      }
    }

    this.totalScore = this.previousWordsScore;
  }

  selectNewWord(){
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
    localStorage.setItem('spell-current-word', this.currentWord);
  }

  wordChange(word: string) {
    let targetWord:string = this.currentWord;
    let lowerCaseWord:string = this.currentWord.toLowerCase();
    let attemptWord:string = word.toLowerCase();

    if (lowerCaseWord === attemptWord) { 
      this.wordSpelledCorrectly(targetWord);
    } else if (lowerCaseWord.startsWith(attemptWord)){ // still spelling, still correct
      this.totalScore = this.previousWordsScore + attemptWord.length;
      this.playSoundKeypress();
    } else { 
      this.wordSpelledIncorrectly(targetWord);
    }
  }

  wordSpelledCorrectly(word:string){
    this.clearWord(true);
    this.totalWords += 1;
    this.totalCorrect += 1;
    this.previousWordsScore += word.length + 10;
    this.totalScore = this.previousWordsScore;
    let attempt:Attempt = {word: word, won: true};
    this.attempts.unshift(attempt);
    let data: string = JSON.stringify(this.attempts);
    localStorage.setItem('spelling-practice', data);
    this.playSoundCorrect();
  }

  wordSpelledIncorrectly(word:string){
    this.clearWord(false);
    this.totalWords += 1;
    this.previousWordsScore -= 50;
    this.totalScore = this.previousWordsScore;
    let attempt:Attempt = {word: word, won: false};
    this.attempts.unshift(attempt);
    let data: string = JSON.stringify(this.attempts);
    localStorage.setItem('spelling-practice', data);
    this.playSoundIncorrect();
  }

  async clearWord(newWord:boolean){
    this.spellingInput.nativeElement.disabled = true;

    await this.delay(1500);
    this.spelledWord = '';
    this.spellingInput.nativeElement.disabled = false;
    this.spellingInput.nativeElement.focus();
    if (newWord) {
      this.selectNewWord();
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  playSound(src:string) {
    let audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }

  playSoundIncorrect(){
    this.playSound('http://soundbible.com/mp3/Door Buzzer-SoundBible.com-1567875395.mp3');
  }

  playSoundKeypress(){
    // other possible keypress sound sources:
    // http://soundbible.com/mp3/Pat-SoundBible.com-1661659465.mp3
    // http://soundbible.com/mp3/Click2-Sebastian-759472264.mp3
    // http://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3
    // http://soundbible.com/mp3/Woosh-Mark_DiAngelo-4778593.mp3
    this.playSound('http://soundbible.com/mp3/Click-SoundBible.com-1387633738.mp3');
  }

  playSoundCorrect(){
    let funSoundSources:string[] = [
      'http://soundbible.com/mp3/Air Horn-SoundBible.com-964603082.mp3','http://soundbible.com/mp3/1_person_cheering-Jett_Rifkin-1851518140.mp3',
      'http://soundbible.com/mp3/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3','http://soundbible.com/mp3/5_Sec_Crowd_Cheer-Mike_Koenig-1562033255.mp3',
      'http://soundbible.com/mp3/Music_Box-Big_Daddy-1389738694.mp3','http://soundbible.com/mp3/Magic Wand Noise-SoundBible.com-375928671.mp3',
      'http://soundbible.com/mp3/Yess-Fabio_Farinelli-187689388.mp3','http://soundbible.com/mp3/front-desk-bells-daniel_simon.mp3',
      'http://soundbible.com/mp3/slot-machine-daniel_simon.mp3','http://soundbible.com/mp3/dixie-horn_daniel-simion.mp3',
      'http://soundbible.com/mp3/steam-train-whistle-daniel_simon.mp3','http://soundbible.com/mp3/sms-alert-1-daniel_simon.mp3',
      'http://soundbible.com/mp3/sms-alert-2-daniel_simon.mp3','http://soundbible.com/mp3/sms-alert-3-daniel_simon.mp3',
      'http://soundbible.com/mp3/sms-alert-4-daniel_simon.mp3','http://soundbible.com/mp3/sms-alert-5-daniel_simon.mp3',
      'http://soundbible.com/mp3/Fart-Squeeze-Yer-Knees_Mike-Koenig.mp3','http://soundbible.com/mp3/gibbon-monkey-daniel_simon.mp3',
      'http://soundbible.com/mp3/puppy-barking_ds.mp3','http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3',
      'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3','http://soundbible.com/mp3/Silly_Farts-Joe-1473367952.mp3',
      'http://soundbible.com/mp3/Coin_Drop-Willem_Hunt-569197907.mp3','http://soundbible.com/mp3/UFO_Takeoff-Sonidor-1604321570.mp3',
      'http://soundbible.com/mp3/descending_craft-Sonidor-991848481.mp3','http://soundbible.com/mp3/Rudy_rooster_crowing-Shelley-1948282641.mp3',
      'http://soundbible.com/mp3/Kid_Laugh-Mike_Koenig-1673908713.mp3','http://soundbible.com/mp3/Cha_Ching_Register-Muska666-173262285.mp3',
      'http://soundbible.com/mp3/running_feet_-Cam-942211296.mp3','http://soundbible.com/mp3/Falcon-Mark_Mattingly-169493032.mp3',
      'http://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3','http://soundbible.com/mp3/Turkey_Call_2-JimBob-26023545.mp3',
      'http://soundbible.com/mp3/hello_son-Mike_Koenig-810187901.mp3','http://soundbible.com/mp3/Turkey_Call-JimBob-1691466258.mp3',
      'http://soundbible.com/mp3/bye_bye_son-Mike_Koenig-1260922981.mp3','http://soundbible.com/mp3/short_male_burp-Mike_Koenig-832127430.mp3',
      'http://soundbible.com/mp3/mallard_duck_quacking-Mike_Koenig-1781775990.mp3','http://soundbible.com/mp3/Metroid_Door-Brandino480-995195341.mp3',
      'http://soundbible.com/mp3/mallard_duck-Mike_Koenig-667013646.mp3','http://soundbible.com/mp3/killdeer_song-Mike_Koenig-1144525481.mp3',
      'http://soundbible.com/mp3/Children_Laughing-Mike_Koenig-575083331.mp3','http://soundbible.com/mp3/Warbling_Vireo-Mike_Koenig-89869915.mp3'
    ];
    let src = funSoundSources[Math.floor(Math.random() * funSoundSources.length)];
    this.playSound(src);
  }

  resetGame(){
    this.spelledWord = '';
    this.currentWord = '';
    this.attempts = [];
    this.previousWordsScore = 0;
    this.currentWordScore = 0;
    this.totalScore = 0;
    this.totalWords = 0;
    this.totalCorrect = 0;
    this.percentCorrect = 0;

    localStorage.setItem('spell-current-word', '');
    localStorage.setItem('spelling-practice', '');
  }

}

interface Attempt {
  word: string;
  won: boolean;
}
