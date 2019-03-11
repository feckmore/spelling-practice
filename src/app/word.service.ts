import { Injectable } from '@angular/core';
import { Word, WordGroup } from './words';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  // baseWords1: string[] = ['big', 'get', 'old', 'hen', 'now', 'fell', 'barn', 'step', 'too', 'find', 'cape', 'eat', 'take', 'shed', 'how', 'ride', 'wall', 'baby', 'note', 'hunt', 'slid', 'made', 'show', 'into', 'spots', 'ring', 'such', 'most', 'here', 'gate', 'mine', 'deep', 'glow', 'love', 'coin', 'stone', 'them', 'plane', 'stay', 'coal', 'was', 'sunny', 'toes', 'soon', 'nice', 'going', 'door', 'clams', 'kitten', 'garden', 'cord', 'arms', 'west', 'team', 'skim', 'belly', 'hire', 'wink', 'move', 'aid', 'rose', 'deck', 'bead', 'hurt', 'grins', 'leaf', 'spurs', 'elm', 'foot', 'bank', 'paws', 'oak', 'drive', 'alone', 'frogs', 'dew', 'paste', 'unkind', 'person', 'nearly'];
  // baseWords2: string[] = ['lower', 'walk', 'obey', 'winner', 'pilot', 'fresh', 'roof', 'flying', 'bitter', 'south', 'stack', 'panda', 'slumber', 'gall', 'wishes', 'missing', 'pretend', 'nodded', 'change', 'once', 'zone', 'clasp', 'boxcar', 'roar', 'graze', 'pesky', 'return', 'fetch', 'thorn', 'fancy', 'rinse', 'vanish', 'escape', 'alien', 'nutmeg', 'glinting', 'radio', 'wheels', 'darling', 'hutch', 'awful', 'muster', 'padlock', 'welcome', 'platform', 'spiral', 'rafters', 'illness', 'tablet', 'wailing', 'blanket', 'thrilling', 'jacket', 'rambling', 'harvest', 'agog', 'shudder', 'cartoon', 'dither', 'rodents', 'compost', 'lizard', 'voice', 'cosmic', 'liberty', 'pirate', 'dumplings', 'promise', 'excellent', 'cheddar', 'insect', 'scale', 'crept', 'speak', 'carving', 'oval', 'purse', 'mossy', 'cattle', 'offer', 'hairpin', 'clipper'];
  // baseWords3: string[] = ['marsh', 'shabby', 'hushed', 'manner', 'scraped', 'impact', 'breeze', 'standoff', 'narrow', 'lazily', 'primers', 'marbles', 'tennis', 'world', 'kettle', 'shelves', 'crumpled', 'mailboxes', 'perhaps', 'nannies', 'button', 'alley', 'sprinkle', 'complete', 'diaper', 'transporting', 'lukewarm', 'violet', 'castle', 'bicycle', 'village', 'promptly', 'matron', 'produce', 'horrid', 'invitation', 'faucet', 'enormous', 'canal', 'shilling', 'halter', 'basting', 'hornet', 'Viking', 'chapel', 'pouted', 'aspect', 'rotating', 'crooked', 'warmth', 'craggy', 'Icelandic', 'temple', 'engraved', 'newlyweds', 'protested', 'amusing', 'cinders', 'abroad', 'superb', 'Norse', 'custody', 'sullen', 'Bollywood', 'clambering', 'strident', 'severely', 'manure', 'intersect', 'slobbery', 'valuables', 'expensive', 'Venice', 'breakfast', 'salvation', 'unison', 'diagram', 'spinster', 'grocery', 'pastures'];
  // baseWords4: string[] = ['neglected', 'receptions', 'energetic', 'plantations', 'decent', 'survival', 'disguise', 'undesirable', 'tonic', 'enlisted', 'tomes', 'levied', 'bookmobile', 'nursery', 'shortage', 'precise', 'roundabout', 'handiwork', 'balloonist', 'improvise', 'altitude', 'sparsely', 'musician', 'practically', 'testament', 'simulate', 'disengage', 'Mohawk', 'exterior', 'scenery', 'opponent', 'allowance', 'committee', 'bulletin', 'hoarsely', 'automated', 'subdivision', 'heralded', 'appointed', 'regents', 'infraction', 'Pacific', 'affirmation', 'cipher', 'administration', 'geometry', 'consecutive', 'scavenger', 'defensiveness', 'vegetation', 'sconces', 'Cyclops', 'aerospace', 'correctional', 'segregation', 'instantaneous', 'nausea', 'Chesapeake', 'atoll', 'miracle', 'callous', 'grandiose', 'dexterity', 'barrette', 'cordial', 'alacrity', 'marmalade', 'orchids', 'despondency', 'composure', 'jauntily', 'Hispaniola', 'quantum', 'calamine', 'exasperation', ' sophomore', 'reprobate', 'annoyance', 'paralysis'];
  // baseWords5: string[] = ['chimpanzee', 'peroxide', 'amputation', 'conspiracy', 'sinewy', 'flabbergasted', 'boisterously', 'linoleum', 'tapirs', 'repugnance', 'impeccable', 'contagious', 'stevedores', 'commendable', 'incessant', 'ricochet', 'tribulations', 'azalea', 'fluorescent', 'reservoir', 'truculently', 'generalissimo', 'vociferous', 'merengue', 'claustrophobic', 'Methuselah', 'entrepreneurs', 'monsieur', 'piece de resistance', 'proviso', 'dragoons', 'gargoyle', 'anecdote', 'brigands', 'mandible', 'crampon', 'Sherpa', 'malign', 'boroughs', 'monomania', 'taxidermy', 'piteously', 'strenuous', 'intimation', 'conundrum', 'atrocity', 'voluminous', 'propaganda', 'conspicuous', 'premonition', 'memorandum', 'pastrami', 'germinate', 'parenthetical', 'crematoria', 'massacres', 'petulance', 'facilitate', 'extenuation', 'incarcerated', 'appendectomy', 'subterranean', 'financiers', 'treacherous', 'orthopedic', 'sphinx', 'lama', 'celerity', 'acacias', 'Seminole', 'hallucinations', 'endeavor', 'labyrinthine', 'excruciating', 'lichenous', 'chandeliers', 'uncoquettish', 'tempestuous', 'Pyrenees', 'interpolated'];
  // baseWords6: string[] = ['cypress', 'disquisition', 'translucent', 'annexation', 'expeditionaries', 'bilious', 'interstices', 'hermetically', 'mythos', 'cupolas', 'grotesque', 'pulmonary', 'frontispiece', 'succulent', 'clandestine', 'pestiferous', 'requisites', 'pitons', 'incongruous', 'variegated', 'lassitude', 'avocations', 'raillery', 'sanguine', 'tete–a–tete', 'mitochondria', 'putrefaction', 'concierge', 'gauss', 'connubial', 'unpropitious', 'caravel', 'millinery', 'coppice', 'pecuniary', 'expatiated', 'supercilious', 'formaldehyde', 'vicissitudes', 'oologist', 'auspices', 'panegyric', 'cabochon', 'verdigris', 'rhododendron', 'Kilimanjaro', 'coquelicot', 'ichthyosaurus', 'cicerone'];

  // http://myspellit.com/spellingbee.html
  // following words taken from Merriam-Webster's myspellit.com site
  latinWords: string[] = ['inane', 'relevant', 'impetuous', 'ambivalent', 'dejected', 'postmortem', 'incriminate', 'access', 'plausible', 'interrupt', 'alliteration', 'refugee', 'amicable', 'lucid', 'percolate', 'meticulous', 'fastidious', 'trajectory', 'animosity', 'implement', 'ambiguity', 'curriculum', 'omnivorous', 'bellicose', 'electoral', 'crescent', 'obsequious', 'transect', 'precipice', 'susceptible', 'condolences', 'benefactor', 'candidate', 'bugle', 'formidable', 'canary', 'subterfuge', 'abdicate', 'lunatic', 'carnivore', 'gregarious', 'ostentatious', 'prosaic', 'herbivore', 'prodigal', 'magnanimous', 'benevolent', 'mercurial', 'simile', 'jovial', 'ridiculous', 'innate', 'obstinate', 'discern', 'mediocre', 'insidious', 'rupture', 'precipitate', 'erudite', 'colloquial', 'intractable', 'exuberant', 'ingenious', 'retrospective', 'ominous', 'vulnerable', 'omnipotent', 'consensus', 'discipline', 'alleviate', 'spectrum', 'prescription', 'capitulation', 'incredulous', 'affinity', 'necessary', 'adjacent', 'dissect', 'conjecture', 'imperative', 'predicate', 'corporal', 'patina', 'Capricorn', 'participant', 'library', 'cognition', 'primal', 'filament', 'unity', 'ventilate', 'aquatic', 'igneous', 'reptile', 'providence', 'message', 'foliate', 'nasal', 'opera', 'renovate', 'credentials', 'temporal', 'canine', 'measure', 'credible', 'femininity', 'confidence', 'triumvirate', 'popularity', 'diary', 'humble', 'vivisection', 'strict', 'prosecute', 'contiguous', 'ductile', 'gradient', 'current', 'perfidy', 'fidelity', 'incorruptible'];
  latinChallengeWords: string[] = ['soliloquy', 'accommodate', 'pernicious', 'efficacy', 'visceral', 'exacerbate', 'indigenous', 'belligerent', 'vernacular', 'infinitesimal', 'recalcitrant', 'innocuous', 'precocious', 'ameliorate', 'commensurate', 'facetious', 'prerogative', 'ubiquitous', 'egregious', 'aggregate', 'tertiary', 'corpuscle', 'perennial'];

  arabicWords: string[] = ['azure', 'Islamic', 'sultan', 'artichoke', 'mummy', 'tarragon', 'adobe', 'mohair', 'borax', 'talc', 'arsenal', 'lemon', 'tuna', 'admiral', 'hazard', 'apricot', 'carmine', 'monsoon', 'average', 'gazelle', 'crimson', 'orange', 'sequin', 'macrame', 'algebra', 'guitar', 'nabob', 'giraffe', 'mattress', 'elixir', 'saffron', 'cotton', 'albatross', 'zero', 'safari', 'magazine', 'zenith', 'alfalfa', 'imam', 'mosque', 'alcohol', 'tariff', 'lilac', 'alcove', 'massage', 'henna', 'alchemy', 'sugar', 'taj', 'mahal', 'khan', 'ghoul'];
  arabicChallengeWords: string[] = ['muslin', 'camphor', 'algorithm', 'minaret', 'tamarind', 'carafe', 'julep', 'marzipan', 'nenuphar', 'alcazar', 'tahini', 'Qatari', 'alkali', 'serendipity', 'nadir', 'douane', 'fennec', 'hafiz', 'azimuth', 'bezoar', 'halal', 'alim', 'Swahili', 'serdab', 'mihrab', 'salaam', 'mukhtar', 'khor', 'foggara', 'diffa', 'coffle'];

  asianWords: string[] = ['dugong', 'guru', 'cushy', 'seersucker', 'jungle', 'oolong', 'nirvana', 'bangle', 'cummerbund', 'juggernaut', 'pangolin', 'mahatma', 'rupee', 'mongoose', 'shampoo', 'typhoon', 'bamboo', 'jackal', 'dungaree', 'bungalow', 'gunnysack', 'chutney', 'karma', 'jute', 'yamen', 'raj', 'kama', 'pundit', 'loot', 'kavya', 'jiva', 'pandit', 'chintz', 'patel'];
  asianChallengeWords: string[] = ['gymkhana', 'basmati', 'gingham', 'mandir', 'bhalu', 'gourami', 'masala', 'raita', 'asana', 'batik', 'charpoy', 'durwan', 'mahout', 'prabhu', 'Buddha', 'topeng', 'tanha', 'lahar', 'jnana', 'Holi'];

  frenchWords: string[] = ['peloton', 'barrage', 'chagrin', 'pacifism', 'manicure', 'altruism', 'bureaucracy', 'mascot', 'parfait', 'mystique', 'layette', 'boutique', 'dressage', 'croquet', 'gorgeous', 'denture', 'mirage', 'denim', 'cachet', 'neologism', 'beige', 'diplomat', 'motif', 'suave', 'foyer', 'clementine', 'ambulance', 'rehearse', 'leotard', 'prairie', 'diorama', 'entourage', 'fuselage', 'boudoir', 'collage', 'amenable', 'expertise', 'matinee', 'plateau', 'sortie', 'croquette', 'physique', 'elite', 'deluxe', 'nougat', 'rouge', 'escargot', 'crochet', 'regime', 'doctrinaire', 'tutu', 'bevel', 'menu', 'egalitarian', 'quiche', 'fatigue', 'garage', 'morgue', 'stethoscope', 'vogue', 'musicale', 'palette', 'flamboyant', 'baton', 'souvenir', 'impasse', 'finesse', 'maladroit'];
  frenchChallengeWords: string[] = ['gauche', 'rapport', 'camouflage', 'genre', 'virgule', 'debacle', 'fusillade', 'saboteur', 'renaissance', 'chauvinism', 'recidivist', 'chassis', 'detente', 'raconteur', 'mayonnaise', 'surveillance', 'repertoire', 'dossier', 'taupe', 'poignant', 'garcon', 'croissant', 'ecru', 'lieutenant', 'protege', 'melange', 'blase', 'fete', 'ingenue', 'rendezvous'];

  eponyms: string[] = ['praline', 'magnolia', 'boysenberry', 'hosta', 'poinsettia', 'macadamia', 'salmonella', 'newton', 'saxophone', 'tortoni', 'greengage', 'angstrom', 'gardenia', 'melba', 'tantalize', 'zinnia', 'quisling', 'begonia', 'samaritan', 'Panglossian', 'quixote', 'jeremiad', 'hector', 'Geronimo', 'shrapnel', 'vulcanize', 'Frankenstein', 'Boswell', 'ampere', 'cupid', 'Fletcherism', 'yahoo', 'diesel', 'bandersnatch', 'Crusoe', 'mentor', 'Dracula'];
  eponymChallengeWords: string[] = ['forsythia', 'madeleine', 'bromeliad', 'mercerize', 'Fahrenheit', 'narcissistic', 'dahlia', 'Baedeker', 'philippic', 'guillotine', 'Bobadil', 'mesmerize', 'gnathonic', 'pasteurize', 'Croesus', 'braggadocio'];

  germanWords: string[] = ['angst', 'pretzel', 'waltz', 'haversack', 'nosh', 'sauerbraten', 'hinterland', 'verboten', 'liverwurst', 'streusel', 'umlaut', 'wanderlust', 'eiderdown', 'schnauzer', 'lederhosen', 'kohlrabi', 'sitzmark', 'langlauf', 'autobahn', 'Backstein', 'inselberg', 'gestalt', 'einkorn', 'kitsch', 'gestapo', 'schloss', 'rucksack', 'echt', 'bratwurst', 'knapsack', 'feldspar', 'poltergeist', 'noodle', 'spareribs', 'Meistersinger', 'pumpernickel', 'Bildungsroman', 'strudel', 'bagel', 'hamster', 'cobalt', 'nachtmusik', 'vorlage', 'graupel', 'Wagnerian', 'cringle', 'fife', 'glitz', 'homburg', 'kuchen', 'pitchblende', 'spritz', 'prattle', 'zwinger', 'spitz', 'realschule', 'panzer', 'stollen', 'dachshund', 'seltzer'];
  germanChallengeWords: string[] = ['schadenfreude', 'dreidel', 'weimaraner', 'ersatz', 'fraulein', 'blitzkrieg', 'gesundheit', 'pfeffernuss', 'edelweiss', 'glockenspiel', 'rottweiler', 'schottische', 'anschluss', 'wedel', 'springerle', 'zeitgeber', 'pickelhaube', 'schnecke', 'Weissnichtwo'];

  slavicWords: string[] = ['gulag', 'parka', 'Slav', 'robot', 'samovar', 'kremlin', 'troika', 'slave', 'mammoth', 'Siberian', 'tundra', 'Permian', 'kishke', 'glasnost', 'paprika', 'sable', 'kasha', 'nebbish', 'polka', 'Bolshevik', 'vampire', 'sputnik', 'knish', 'cravat', 'babushka', 'Soviet', 'Borzoi', 'gopak', 'cheka', 'sevruga', 'trepak', 'babka', 'purga', 'baba', 'cossack', 'nelma', 'kovsh', 'lokshen', 'feldsher', 'barabara', 'aul'];
  slavicChallengeWords: string[] = ['balalaika', 'kielbasa', 'tchotchke', 'barukhzy', 'perestroika', 'apparatchik', 'commissar', 'tokamak', 'pogrom', 'taiga', 'Beetewk'];

  dutchWords: string[] = ['cockatoo', 'keelhaul', 'harpoon', 'furlough', 'bowery', 'easel', 'holster', 'freebooter', 'waffle', 'trawl', 'uproar', 'beleaguer', 'cruller', 'yacht', 'wiseacre', 'brackish', 'decoy', 'caboose', 'buckwheat', 'walrus', 'howitzer', 'crimp', 'bluff', 'stipple', 'floss', 'cruiser', 'hustle', 'klompen', 'polder', 'bundle', 'catkin', 'splice', 'Flemish', 'grabble', 'huckster', 'frolic', 'ravel', 'tattle', 'scum', 'trek', 'scrabble', 'clapboard', 'gruff', 'isinglass', 'excise', 'blister', 'rabbit', 'package', 'muddle', 'handsome', 'foist', 'staple', 'gulden', 'mart', 'screen', 'guilder', 'etch', 'Netherlander', 'dune', 'croon', 'ticket', 'buckwagon', 'hock', 'boodle', 'guy', 'daffodil', 'loiter', 'potash', 'scow', 'wintergreen', 'trigger', 'stripe', 'bruin', 'skipper', 'waywiser', 'spoor', 'mizzle', 'school', 'pickle', 'snuff'];
  dutchChallengeWords: string[] = ['mynheer', 'waterzooi', 'flense', 'muishond', 'witloof', 'springbok', 'maelstrom', 'bobbejaan', 'keeshond', 'voortrekker', 'uitlander', 'hollandaise', 'galjoen', 'schipperke', 'apartheid', 'hartebeest', 'keest', 'wainscot', 'roodebok'];

  oldEnglishWords: string[] = ['quell', 'barrow', 'dearth', 'bower', 'paddock', 'blithe', 'keen', 'mongrel', 'reckless', 'alderman', 'whirlpool', 'belay', 'cleanser', 'dreary', 'bequeath', 'sallow', 'dross', 'lithe', 'gristle', 'earwig', 'fickle', 'nestle', 'fennel', 'nostril', 'abide', 'behest', 'slaughter', 'gospel', 'furlong', 'linseed', 'nether', 'fathom', 'nightingale', 'farthing', 'threshold', 'kith', 'wanton', 'loam', 'yield', 'mattock', 'hawthorn', 'tithe', 'behoove', 'forlorn', 'quiver', 'hustings', 'aspen', 'mermaid', 'anvil', 'barley', 'linden', 'hassock', 'orchard', 'hearth', 'watery', 'fiend', 'goatee', 'earthenware', 'windily', 'dealership', 'bookkeeping', 'fiery', 'learned', 'nosiest', 'creepy', 'errand', 'daily', 'gnat', 'broadleaf', 'stringy', 'dairy', 'workmanship', 'newfangled', 'timely', 'dogged', 'mootable', 'womanly', 'manhandle', 'folksiness', 'worrisome', 'roughhewn', 'knavery', 'hurdle', 'kipper', 'hundredth', 'icicle', 'pinafore', 'yieldable', 'hue'];
  oldEnglishChallengeWords: string[] = ['heifer', 'mistletoe', 'salve', 'kirtle', 'Wiccan', 'shrieval', 'chary'];

  newWorldWords: string[] = ['condor', 'iguana', 'hurricane', 'kahuna', 'hogan', 'jerky', 'muskrat', 'hominy', 'wigwam', 'pampas', 'caribou', 'toboggan', 'persimmon', 'quinine', 'powwow', 'bayou', 'coyote', 'tamale', 'poi', 'cashew', 'luau', 'totem', 'mahimahi', 'hickory', 'cacao', 'kona', 'malihini', 'wikiwiki', 'Tuckahoe', 'pecan', 'chipotle', 'skunk', 'woodchuck', 'chocolate', 'muumuu', 'puma', 'tomato', 'maraca', 'petunia', 'jaguar', 'buccaneer', 'llama', 'succotash', 'caucus', 'wampum', 'mole', 'toucan'];
  newWorldChallengeWords: string[] = ['opossum', 'terrapin', 'ocelot', 'hoomalimali', 'coati', 'jacamar', 'ipecac', 'menhaden', 'sachem'];

  japaneseWords: string[] = ['ninja', 'sushi', 'tofu', 'shogun', 'honcho', 'karate', 'samurai', 'teriyaki', 'sashimi', 'tsunami', 'haiku', 'futon', 'mikado', 'hibachi', 'origami', 'geisha', 'wasabi', 'ramen', 'kudzu', 'banzai', 'tycoon', 'sumo', 'koan', 'satori', 'tatami', 'kami', 'sukiyaki', 'kuruma', 'Meiji', 'Romaji', 'odori', 'miso', 'Kabuki', 'geta', 'sayonara'];
  japaneseChallengeWords: string[] = ['karaoke', 'nisei', 'sansei', 'issei', 'kibei'];

  greekWords: string[] = ['lethargy', 'android', 'chronic', 'biopsy', 'irony', 'automaton', 'enthusiasm', 'synopsis', 'homogeneous', 'odyssey', 'megalopolis', 'acme', 'synonym', 'orthodox', 'aristocracy', 'calypso', 'patriarch', 'hierarchy', 'character', 'isobar', 'asterisk', 'eclectic', 'melancholy', 'stoic', 'chronology', 'eulogy', 'didactic', 'cosmetic', 'Spartan', 'geothermal', 'cynical', 'homonym', 'cryptic', 'hypothesis', 'academy', 'pentathlon', 'antibiotic', 'diatribe', 'etymology', 'hydraulic', 'trauma', 'hygiene', 'semantics', 'thesaurus', 'phenomenon', 'cosmos', 'protagonist', 'acronym', 'paradox', 'synchronous', 'misanthropy', 'sarcasm', 'ephemeral', 'polygon', 'nemesis', 'syntax', 'eureka', 'topography', 'panic', 'apostrophe', 'geranium', 'metaphor', 'spherical', 'xylophone', 'dynamic', 'myriad', 'epiphany', 'apathy', 'synergy', 'amnesia', 'philanthropy', 'democracy', 'strategy', 'diagnosis', 'topical', 'matriarch', 'endemic', 'analysis', 'rhetoric', 'eponym', 'agnostic', 'dogma', 'idiom', 'thermal', 'dyslexia', 'Olympian', 'allegory', 'pragmatic', 'adamant', 'protocol', 'tragic', 'hydrology', 'polymer', 'notochord', 'biblical', 'ergonomic', 'mathematics', 'tachometer', 'protein', 'rhinoceros', 'hyphen', 'autopsy', 'pyre', 'herpetology', 'angelic', 'tritium', 'androcentric', 'demotic', 'geode', 'hedonism', 'periscope', 'geoponics', 'asthmogenic', 'monotonous', 'amphibious', 'symbiosis', 'macron', 'periphery'];
  greekChallengeWords: string[] = ['dichotomy', 'misogynist', 'hypocrisy', 'diphthong', 'mnemonic', 'anomaly', 'zephyr', 'hippopotamus', 'euphemism', 'anachronism', 'metamorphosis', 'hyperbole', 'arachnid', 'paradigm', 'Eocene', 'gynarchy', 'pneumatic', 'Hemerocallis', 'cynosure', 'philhellenism', 'euthanasia', 'philately', 'cacophony'];

  italianWords: string[] = ['staccato', 'ballot', 'confetti', 'semolina', 'influenza', 'cavalry', 'piazza', 'cadenza', 'pistachio', 'spinet', 'cantata', 'incognito', 'vendetta', 'contraband', 'mascara', 'graffiti', 'credenza', 'parapet', 'falsetto', 'ditto', 'provolone', 'extravaganza', 'scampi', 'belladonna', 'gondola', 'rotunda', 'cauliflower', 'galleria', 'regatta', 'crescendo', 'balcony', 'portfolio', 'antipasto', 'libretto', 'virtuoso', 'harmonica', 'maestro', 'bravura', 'fresco', 'stucco', 'inferno', 'ballerina', 'malaria', 'grotto', 'harpsichord', 'allegro', 'virtuosa', 'spaghetti', 'piccolo', 'ravioli', 'vibrato', 'pesto', 'aria', 'bambino', 'salami', 'Parmesan', 'oratorio', 'finale', 'scenario', 'contrapuntal', 'illuminati', 'concerto', 'macaroni', 'palmetto', 'bandit', 'fiasco', 'cameo', 'sonata', 'coloratura'];
  italianChallengeWords: string[] = ['scherzo', 'adagio', 'segue', 'zucchini', 'capricious', 'archipelago', 'charlatan', 'maraschino', 'paparazzo', 'fantoccini', 'mozzarella', 'garibaldi', 'ocarina', 'prosciutto', 'trattoria', 'vivace', 'cappelletti', 'pizzicato', 'intaglio'];

  spanishWords: string[] = ['burrito', 'embargo', 'chimichanga', 'gazpacho', 'mariachi', 'sombrero', 'alligator', 'canasta', 'bonanza', 'chinchilla', 'machismo', 'enchilada', 'pueblo', 'hacienda', 'fandango', 'quesadilla', 'flotilla', 'tornado', 'flamenco', 'vigilante', 'adios', 'cabana', 'gordita', 'peccadillo', 'filibuster', 'tortilla', 'vanilla', 'cilantro', 'fiesta', 'anchovy', 'mesa', 'ramada', 'junco', 'cafeteria', 'bongo', 'castanets', 'mantilla', 'oregano', 'lariat', 'chalupa', 'buffalo', 'renegade', 'langosta', 'alamo', 'barrio', 'cedilla', 'Argentine', 'bolivar', 'amarillo', 'cordovan', 'desperado', 'empanada', 'tomatillo', 'diablo', 'pochismo', 'sierra', 'olio', 'bolero', 'junta', 'duenna'];
  spanishChallengeWords: string[] = ['sassafras', 'punctilio', 'sarsaparilla', 'comandante', 'embarcadero', 'rejoneador', 'novillero', 'picaresque', 'conquistador', 'rasgado', 'vaquero', 'caballero'];

  frequentlyMisspelled: string[] = ['across', 'address', 'again', 'agreeable', 'allot', 'already', 'answer', 'apparent', 'appearance', 'athlete', 'balloon', 'believable', 'bureau', 'business', 'college', 'commitment', 'concede', 'conscientious', 'cousin', 'debt', 'definite', 'different', 'does', 'eligible', 'embarrass', 'exceed', 'exhilarate', 'familiar', 'February', 'foreign', 'forty', 'grammar', 'half', 'independence', 'interesting', 'its', 'knowledge', 'laboratory', 'laugh', 'league', 'maintenance', 'minute', 'misspell', 'noticeable', 'occurrence', 'often', 'parallel', 'pastime', 'possess', 'privilege', 'probably', 'ready', 'receipt', 'recommend', 'said', 'satellite', 'schedule', 'secretary', 'separate', 'sheriff', 'sincerely', 'succeed', 'sure', 'trouble', 'truly', 'usually', 'vacuum', 'vegetable', 'villain', 'visible', 'Wednesday', 'weird', 'whose'];
  homonyms: string[] = ['accept', 'except', 'aisle', 'isle', 'bare', 'bear', 'born', 'borne', 'capital', 'capitol', 'cash', 'cache', 'ceiling', 'sealing', 'cellar', 'seller', 'censor', 'censer', 'senser', 'sensor', 'cereal', 'serial', 'coarse', 'course', 'colonel', 'kernel', 'complement', 'compliment', 'council', 'counsel', 'elicit', 'illicit', 'forth', 'fourth', 'herd', 'heard', 'hole', 'whole', 'horse', 'hoarse', 'lean', 'lien', 'led', 'lead', 'naval', 'navel', 'ought', 'aught', 'principal', 'principle', 'recede', 'reseed', 'right', 'rite', 'sight', 'site', 'cite', 'stationary', 'stationery', 'straight', 'strait', 'their', 'there', 'ware', 'wear', 'where', 'weather', 'whether', 'wright', 'write', 'rote', 'wrote', 'yore', 'your'];
  commonlyConfused: string[] = ['advice', 'advise', 'allusion', 'illusion', 'amoral', 'immoral', 'affect', 'effect', 'averse', 'adverse', 'biannual', 'biennial', 'breath', 'breathe', 'choose', 'chose', 'climactic', 'climatic', 'collaborate', 'corroborate', 'conscience', 'conscious', 'convince', 'persuade', 'desert', 'dessert', 'device', 'devise', 'emigrate', 'immigrate', 'flaunt', 'flout', 'founder', 'flounder', 'gambit', 'gamut', 'imply', 'infer', 'irritate', 'aggravate', 'later', 'latter', 'liable', 'libel', 'loose', 'lose', 'marital', 'martial', 'moot', 'mute', 'nauseated', 'nauseous', 'perspective', 'prospective', 'proceed', 'precede', 'proscribe', 'prescribe', 'quiet', 'quite', 'recall', 'recount', 'tenant', 'tenet', 'than', 'then'];

  fromOtherBees: string[] = [ 'stanchion', 'charismatic', 'macchiato', 'ineligible', 'inoculate', 'banquette', 'clairvoyance', 'nomenclature', 'arbitrage', 'imperturbable', 'proliferate', 'malversation', 'nepotism', 'lurid', 'parsec', 'dowager', 'lupus', 'varicose', 'bonsai', 'logarithm', 'avaricious', 'corps', 'congeniality', 'transposable', 'daubster', 'vastitude', 'parachute', 'accusatory', 'folate', 'treble', 'succeeded', 'drudgery', 'ideologist', 'queendom', 'acrobatic', 'groggily', 'plasticity', 'desirable', 'municipal', 'measles', 'intolerable', 'antelope', 'ruination', 'parboil', 'restraint', 'proximal', 'betrothed', 'intelligent', 'sentiment', 'educate', 'critique', 'gracefully', 'hoaxer', 'warfare', 'privacy', 'bucksaw', 'marksman', 'fury', 'sharpener', 'agent', 'history', 'bobbin', 'roster', 'snuggled', 'prankster', 'dicey', 'respell', 'stuffy', 'dibs', 'camera', 'Naveta', 'betta', 'cataphract', 'vervain', 'frittata', 'affreight', 'incarnadine', 'anise', 'ovoid', 'injurious', 'histoplasmosis', 'alegria', 'effervescently', 'misnomer', 'incumbency', 'conniption', 'credo', 'innumerable', 'deceitful', 'mangrove', 'impossible', 'follies', 'trowel', 'symposium', 'Ruthenia', 'beau monde', 'Caledonian', 'nubilous', 'avaricious', 'geniture', 'resin', 'acculturation', 'decongestant', 'recondite', 'marmoreal', 'betwixt', 'vitrine', 'lucrative', 'halibut', 'condemn', 'Styrofoam', 'brigade', 'reindeer', 'garnet', 'disavowed', 'ingestible', 'ethos', 'vestibule', 'feline', 'incursion', 'eventide', 'pioneer', 'tuxedo', 'banister', 'cocoon', 'furtive', 'paradise', 'graphite', 'boondoggle', 'categorical', 'scathing', 'vortex', 'patronage', 'idiochromatic', 'quaff', 'dryad', 'menaced', 'slanderous', 'lactation', 'sockeye', 'grout', 'telex', 'palatable', 'rambunctious', 'minify', 'enculturation', 'lumbar', 'limpkin', 'winnow', 'tenure', 'flooey', 'effectuate', 'fraud', 'flummery', 'forebearance', 'chaplain', 'Tinseltown', 'coalition', 'cassettes', 'occitan', 'guanabana', 'zymoscope', 'halo', 'truant', 'accesses', 'fascism', 'nomadic', 'matriculate', 'immaculate', 'metabolism', 'crudo', 'heartsick', 'exclamation', 'verisimilitude', 'animadversion', 'domiciliated', 'viscount', 'artesian', 'mantis', 'verbena', 'asparagus', 'illicitly', 'zeppelin', 'altiplano', 'sapphire', 'honesty', 'vaccinate', 'resplendence', 'coupon', 'buying', 'value', 'heroes', 'needless', 'editor', 'resistance', 'pituitary', 'agitated'];
  fromDailyBuzzword: string[] = ['legislator', 'obstacle'];
  fromPreviousYears: string[] = [ 'excruciating', 'clandestine', 'improvise', 'grotesque' ];
  fromBeesBookshelf: string[] = [ 'carousel', 'danger', 'power', 'tension', 'friendship'];

  // https://www.youtube.com/watch?v=urAExRv7vqM
  fromOtherNonScrippsBees: string[] = [ 'sprightful', 'minnow', 'cleave', 'apothecary', 'umbilical', 'oligarchy', 'bemused', 'caveat', 'arguable', 'yuletide', 'leisurely', 'quarantine', 'archaic', 'fortuitous', 'quandary', 'symmetry', 'trusteeship',  'constituency', 'schematic', 'juggling', 'collegiality', 'aviation', 'peninsula', 'burrow', 'particle', 'merciful', 'jeweler', 'accountant', 'igloo', 'exhalation', 'nostalgic', 'scarab', 'hypoglycemia', 'severance', 'posture', 'compendium', 'felled', 'drapery', 'sampling', 'docent', 'quell', 'neurosis', 'currency', 'whisker', 'opposite', 'revolution', 'accent', 'fierce', 'proxy', 'stingy', 'eyesore', 'obtuse' ];

  // words2017: string[] = [...this.baseWords3, ...this.baseWords4, ...this.baseWords5, ...this.baseWords6,
  //   ...this.latinWords, ...this.arabicWords, ...this.asianWords, ...this.frenchWords, ...this.eponyms,
  //   ...this.germanWords, ...this.slavicWords, ...this.dutchWords, ...this.oldEnglishWords,
  //   ...this.newWorldWords, ...this.japaneseWords, ...this.greekWords, ...this.italianWords, ...this.spanishWords];

  gradeOne2018: string[] = ['red', 'see', 'fun', 'zoo', 'din', 'fall', 'run', 'ask', 'lad', 'best', 'pay', 'hill', 'air', 'keep', 'fish', 'one', 'gills', 'path', 'rain', 'burp', 'tent', 'sick', 'code', 'maze', 'webs', 'boat', 'date', 'trim', 'yard', 'week', 'game', 'hope', 'lake', 'sold', 'king', 'just', 'even', 'carry', 'yelp', 'jaws', 'mind', 'salt', 'city', 'eggs', 'away', 'pool', 'lunch', 'happy', 'lima'];
  gradeOneTwo2018: string[] = ['grapes', 'yummy', 'shy', 'dirt', 'spin', 'bugs', 'robe', 'safe', 'badly', 'vine', 'purr', 'done', 'crisp', 'face', 'next', 'mean', 'soggy', 'click', 'grade', 'wings', 'before', 'yawn', 'beets', 'twig', 'tabby', 'cage', 'wool', 'brand', 'paper', 'hurry', 'after', 'litter', 'holding', 'street', 'loft', 'fluffy', 'alarm', 'oink', 'mercy', 'lobby', 'alert', 'tiptoe', 'pillows', 'tinker', 'finch', 'blacktop', 'heater', 'morning', 'present', 'recess', 'pizza'];
  gradeTwoThree2018: string[] = ['ending', 'house', 'kindly', 'relax', 'bacon', 'radar', 'globe', 'yak', 'hobby', 'markers', 'loaf', 'shiny', 'disco', 'sloth', 'maple', 'wary', 'latch', 'view', 'toad', 'family', 'type', 'pudding', 'hours', 'forest', 'moths', 'invent', 'swoosh', 'object', 'plaster', 'lessons', 'shrubs', 'otters', 'sapling', 'tangled', 'quest', 'wry', 'owner', 'pimple', 'orbit', 'birthday', 'royal', 'animals', 'presto', 'splinter', 'wrong', 'unicorn', 'gremlin', 'whenever', 'garbage', 'Fiji'];
  gradeThreeFour2018: string[] = ['dense', 'groan', 'siren', 'angles', 'fend', 'rubbish', 'tuneful', 'artistic', 'squishy', 'clumsy', 'kibble', 'cues', 'boasted', 'prayer', 'tireless', 'factory', 'borrowed', 'shavings', 'poodles', 'gravity', 'abnormal', 'sneakers', 'crackle', 'inspire', 'pleats', 'shivery', 'briefing', 'obtain', 'portray', 'squeeze', 'rumbling', 'gangplank', 'scratched', 'distorted', 'cardboard', 'interviews', 'guilty', 'lunar', 'custard', 'shriek', 'ghost', 'mission', 'tempting', 'majestic', 'solution', 'signals', 'eliminate', 'universe', 'locusts', 'guidance'];
  gradeFourFive2018: string[] = ['pored', 'mulch', 'coiled', 'glands', 'axis', 'radish', 'lure', 'griddle', 'jerkily', 'stylish', 'knelt', 'frayed', 'sprouted', 'relics', 'discomfort', 'creatures', 'dwelling', 'rickety', 'infested', 'despair', 'thirst', 'youthful', 'shrewd', 'molten', 'stalk', 'aromas', 'champion', 'salesclerk', 'dollop', 'gentlemen', 'captivity', 'blathering', 'Venus', 'unwavering', 'spectators', 'construction', 'swindle', 'infinity', 'mirror', 'resemble', 'citizen', 'pronounce', 'taut', 'monopoly', 'Florence', 'leopard', 'comrades', 'swiveled', 'Borneo', 'scaffolding'];
  gradeFiveSix2018: string[] = ['warped', 'flail', 'clanging', 'qualify', 'solely', 'refined', 'plodding', 'Japanese', 'advanced', 'sensible', 'beneath', 'penalty', 'mockingly', 'compartment', 'achieve', 'hoisted', 'doffing', 'banishment', 'furled', 'immune', 'volley', 'perish', 'dismissal', 'temporary', 'anthem', 'rebuked', 'garret', 'irked', 'prickliness', 'narration', 'dormer', 'realization', 'supposedly', 'ruefully', 'guise', 'pennant', 'fulcrum', 'recognition', 'governess', 'conquering', 'alabaster', 'tendrils', 'invariably', 'scrimmage', 'procession', 'writhing', 'rosette', 'medicinal', 'conservatory', 'miniature'];
  gradeSixSeven2018: string[] = ['accompany', 'fiddle-faddle', 'pronto', 'calculus', 'fugitive', 'percussion', 'siesta', 'hilarious', 'cooperage', 'paramedic', 'humanitarian', 'culprits', 'stagnant', 'diabolical', 'buzzard', 'martyr', 'garbanzo', 'cliques', 'antagonism', 'couriers', 'miscreant', 'peasantry', 'homily', 'suffocate', 'cavil', 'apprehend', 'guava', 'penitent', 'vexation', 'cherished', 'sturgeon', 'clavicle', 'damask', 'abolition', 'extricates', 'lustrous', 'diminutive', 'sepia', 'rivulets', 'barbarous', 'sagacity', 'gangrene', 'chilblains', 'Jacuzzi', 'pad', 'thai', 'relinquish', 'Caribbean', 'hibiscus', 'jefe', 'Xanadu'];
  gradeSevenEight2018: string[] = ['pegasi', 'armada', 'promenade', 'vocational', 'reprimand', 'eclair', 'indelible', 'cologne', 'gondolier', 'muttonchops', 'cliches', 'impregnable', 'trenchant', 'catacombs', 'salutation', 'dervishes', 'consonants', 'velveteen', 'galleon', 'wastrels', 'redundancy', 'inertia', 'bronchitis', 'juniper', 'haberdashery', 'offal', 'garrison', 'felicitously', 'treacle', 'attenuated', 'valise', 'dissertation', 'recompense', 'piedmont', 'sumptuous', 'portentously', 'antecedents', 'gaiters', 'sachet', 'chloroform', 'metallurgy', 'Prague', 'balsam', 'emaciated', 'kelpies', 'corrugated', 'amethyst', 'chivalrous', 'phalanx', 'cyanide'];
  gradeEightChallange2018: string[] = ['galette', 'noisome', 'munificent', 'affidavit', 'glutinous', 'Babylon', 'docile', 'tetrarch', 'frippery', 'homo sapiens', 'ligatures', 'grenadier', 'canapes', 'voltaic', 'espionage', 'rapacious', 'prevaricate', 'acclamations', 'Harlequin', 'fascist', 'savanna', 'balaclavas', 'courteous', 'aphorism', 'diffidence', 'cinnabar', 'eviscerated', 'unguents', 'concertina', 'electrolysis', 'asseveration', 'lobelia', 'balustrades', 'expiation', 'flambeau', 'solomon', 'ambuscade', 'execrations', 'fuchsia', 'proboscis', 'exordium', 'Leipzig', 'phaeton', 'marengo', 'jacquerie', 'beryllium', 'ichor', 'tergiversation', 'mille-feuille', 'auf Wiedersehen'];

  // words2018: string[] = [...this.gradeOne2018, ...this.gradeOneTwo2018, ...this.gradeTwoThree2018, ...this.gradeThreeFour2018, ...this.gradeFourFive2018, ...this.gradeFiveSix2018, ...this.gradeSixSeven2018, ...this.gradeSevenEight2018, ...this.gradeEightChallange2018];

  hardWords1: string[] = [ 'ambivalent', 'postmortem',  'plausible',  'alliteration', 'refugee', 'amicable',  'percolate',  'fastidious',  'animosity',  'ambiguity', 'curriculum', 'omnivorous', 'bellicose', 'electoral',  'obsequious',  'precipice', 'susceptible',  'benefactor', 'candidate',  'subterfuge', 'abdicate',  'gregarious', 'ostentatious', 'prosaic',  'prodigal', 'magnanimous', 'benevolent', 'mercurial',  'innate', 'obstinate', 'discern',  'insidious',  'erudite', 'colloquial', 'exuberant', 'ingenious',  'vulnerable', 'omnipotent', 'consensus', 'discipline', 'alleviate',  'capitulation',  'affinity',  'adjacent',  'imperative', 'predicate', 'corporal', 'patina',   'cognition',  'filament',  'ventilate',  'igneous',  'foliate',  'renovate', 'credentials', 'temporal',  'femininity',  'triumvirate',   'vivisection',  'contiguous', 'ductile', 'gradient',  'perfidy', 'fidelity',   'soliloquy',  'pernicious', 'efficacy', 'visceral', 'exacerbate', 'indigenous', 'belligerent', 'vernacular', 'infinitesimal', 'recalcitrant', 'innocuous',  'ameliorate', 'commensurate', 'facetious', 'prerogative', 'ubiquitous',  'corpuscle',   'azure', 'Islamic',  'tarragon'];
  hardWords2: string[] = [ 'adobe',  'talc', 'admiral', 'carmine',  'macrame', 'algebra',  'nabob', 'saffron',  'albatross',  'zenith', 'alfalfa', 'imam', 'mosque', 'alcohol', 'lilac', 'alcove',   'muslin', 'camphor', 'algorithm', 'minaret', 'tamarind', 'carafe', 'julep', 'marzipan', 'nenuphar', 'alcazar', 'tahini', 'Qatari', 'alkali', 'nadir', 'douane',  'hafiz', 'azimuth', 'bezoar', 'halal', 'alim', 'Swahili', 'serdab', 'mihrab', 'salaam', 'mukhtar', 'khor', 'foggara', 'diffa',   'dugong',    'oolong',  'pangolin', 'mahatma',  'dungaree', 'bungalow', 'gunnysack', 'jute',  'raj', 'kama', 'pundit', 'kavya', 'jiva', 'pandit', 'chintz', 'patel',    'gingham', 'mandir', 'bhalu', 'masala', 'raita', 'asana', 'batik', 'charpoy', 'durwan', 'mahout', 'prabhu',  'topeng', 'tanha', 'lahar', 'jnana', 'Holi',  'peloton', 'barrage', 'chagrin', 'altruism', 'bureaucracy',  'mystique', 'layette',  'dressage', 'mirage',  'cachet',  'motif', 'suave',  'leotard', 'entourage', 'fuselage', 'boudoir',  'amenable',  'matinee', 'plateau', 'physique',  'nougat', 'rouge', 'escargot', 'crochet', 'regime',  'bevel',  'quiche',  'morgue', 'vogue', 'musicale',  'souvenir', 'impasse', 'finesse'];
  hardWords3: string[] = [ 'maladroit',  'gauche', 'rapport',   'virgule',  'fusillade', 'saboteur',  'chauvinism', 'chassis', 'detente', 'raconteur',   'repertoire', 'dossier', 'taupe',  'garcon', 'croissant', 'ecru', 'lieutenant', 'melange', 'blase', 'fete', 'ingenue', 'rendezvous',     'hosta',   'tortoni',  'angstrom', 'gardenia', 'melba',  'zinnia', 'quisling', 'begonia', 'samaritan', 'Panglossian', 'quixote', 'jeremiad',    'Boswell', 'ampere',  'Crusoe', 'forsythia',  'bromeliad',  'Fahrenheit', 'narcissistic', 'dahlia', 'Baedeker', 'philippic', 'Bobadil',  'gnathonic', 'pasteurize', 'Croesus',  'angst', 'haversack', 'nosh', 'sauerbraten', 'hinterland', 'verboten', 'streusel', 'umlaut',  'eiderdown', 'lederhosen', 'kohlrabi', 'sitzmark',  'autobahn', 'Backstein', 'inselberg',   'kitsch',  'echt', 'feldspar', 'poltergeist',  'Meistersinger',  'Bildungsroman', 'strudel',   'nachtmusik', 'vorlage', 'graupel', 'Wagnerian',  'homburg', 'kuchen', 'pitchblende',   'zwinger',  'realschule', 'panzer', 'stollen',  'seltzer',  'schadenfreude', 'dreidel', 'weimaraner', 'ersatz', 'fraulein', 'blitzkrieg', 'gesundheit', 'pfeffernuss', 'edelweiss',  'rottweiler'];
  hardWords4: string[] = ['schottische', 'anschluss', 'wedel', 'springerle', 'zeitgeber', 'pickelhaube', 'schnecke', 'Weissnichtwo',  'Slav',   'kremlin', 'troika',  'kishke', 'glasnost', 'paprika', 'kasha', 'nebbish',  'knish', 'cravat',   'Borzoi', 'gopak', 'cheka', 'sevruga', 'trepak', 'babka', 'purga',   'nelma', 'kovsh', 'lokshen', 'feldsher', 'barabara', 'aul',  'balalaika', 'kielbasa', 'tchotchke', 'barukhzy', 'perestroika', 'apparatchik', 'commissar', 'tokamak', 'pogrom',  'Beetewk', 'furlough',  'cruller',  'howitzer',  'klompen', 'catkin',  'gulden', 'potash', 'scow',  'bruin',  'spoor',   'mynheer', 'waterzooi', 'flense', 'muishond',   'bobbejaan', 'keeshond', 'voortrekker', 'uitlander', 'hollandaise', 'galjoen', 'schipperke', 'apartheid', 'hartebeest', 'keest', 'wainscot', 'roodebok',  'paddock', 'alderman', 'sallow', 'dross', 'lithe',  'furlong', 'fathom', 'threshold', 'kith',  'loam',  'tithe',  'hustings', 'aspen', 'linden', 'hassock',  'hearth', 'earthenware',   'pinafore',  'heifer',  'salve', 'kirtle', 'Wiccan', 'shrieval', 'chary',  'condor',   'hogan', 'pampas', 'caribou',  'persimmon', 'poi',  'luau',  'mahimahi',  'cacao',  'malihini', 'wikiwiki', 'Tuckahoe'];
  hardWords5: string[] = [ 'chipotle',  'muumuu', 'buccaneer',  'succotash', 'caucus', 'wampum',  'hoomalimali', 'coati', 'jacamar', 'ipecac', 'menhaden', 'sachem',  'shogun', 'teriyaki', 'sashimi',   'futon', 'mikado', 'hibachi', 'geisha', 'wasabi', 'ramen', 'kudzu', 'banzai', 'tycoon',  'koan', 'satori', 'tatami', 'kami', 'sukiyaki', 'kuruma', 'Meiji', 'Romaji', 'odori',  'Kabuki', 'geta', 'sayonara',  'karaoke', 'nisei', 'sansei', 'issei', 'kibei',  'lethargy',  'biopsy',  'automaton',  'synopsis', 'homogeneous', 'odyssey',  'synonym', 'orthodox', 'aristocracy', 'calypso', 'patriarch', 'hierarchy',  'isobar',  'eclectic', 'melancholy', 'stoic',  'eulogy', 'didactic', 'geothermal', 'cynical',  'pentathlon', 'antibiotic', 'diatribe', 'etymology',  'trauma',  'semantics', 'thesaurus', 'phenomenon',  'protagonist', 'acronym', 'synchronous', 'misanthropy',  'ephemeral',   'syntax', 'eureka', 'topography', 'apostrophe', 'geranium',    'myriad', 'epiphany', 'amnesia', 'philanthropy', 'democracy',  'diagnosis',  'matriarch', 'endemic', 'rhetoric', 'eponym', 'agnostic', 'dogma',   'Olympian', 'allegory', 'pragmatic', 'adamant', 'notochord',  'ergonomic', 'mathematics'];
  hardWords6: string[] = [ 'tachometer', 'protein',  'herpetology', 'tritium', 'androcentric', 'demotic', 'hedonism',  'geoponics', 'asthmogenic', 'monotonous',  'symbiosis', 'macron', 'periphery',  'dichotomy', 'misogynist', 'diphthong',  'anomaly', 'zephyr', 'hippopotamus', 'euphemism', 'anachronism', 'metamorphosis', 'hyperbole', 'arachnid', 'paradigm', 'Eocene', 'gynarchy', 'pneumatic', 'Hemerocallis', 'cynosure', 'philhellenism', 'euthanasia', 'philately', 'cacophony',  'staccato',   'semolina',   'piazza', 'cadenza',  'spinet', 'cantata', 'incognito', 'vendetta', 'contraband', 'mascara',  'credenza',  'falsetto', 'ditto', 'provolone', 'extravaganza', 'scampi', 'belladonna', 'gondola', 'rotunda',  'galleria', 'regatta', 'crescendo',  'portfolio', 'antipasto', 'libretto', 'virtuoso',  'maestro', 'bravura', 'fresco', 'stucco',   'malaria', 'grotto', 'harpsichord',  'virtuosa',  'vibrato', 'pesto', 'aria', 'bambino',  'oratorio',  'contrapuntal',  'concerto',  'palmetto',  'fiasco', 'cameo', 'sonata', 'coloratura',  'scherzo', 'adagio', 'segue', 'zucchini',  'archipelago', 'charlatan', 'maraschino', 'paparazzo', 'fantoccini',  'garibaldi', 'ocarina', 'prosciutto', 'trattoria'];
  hardWords7: string[] = [ 'vivace', 'cappelletti', 'pizzicato', 'intaglio',   'embargo', 'chimichanga', 'gazpacho', 'mariachi',   'canasta',  'chinchilla', 'machismo', 'pueblo', 'hacienda', 'fandango', 'quesadilla', 'flotilla',  'flamenco',    'peccadillo', 'filibuster',  'cilantro', 'mesa', 'ramada', 'junco',  'castanets', 'mantilla', 'oregano', 'lariat', 'chalupa',  'renegade', 'langosta',  'barrio', 'cedilla',  'bolivar', 'amarillo', 'cordovan', 'desperado', 'empanada', 'tomatillo', 'diablo', 'pochismo', 'sierra', 'olio', 'bolero', 'junta', 'duenna',  'sassafras', 'punctilio', 'sarsaparilla', 'comandante', 'embarcadero', 'rejoneador', 'novillero', 'picaresque', 'conquistador', 'rasgado', 'vaquero', 'caballero',   'allot',  'balloon', 'believable', 'bureau', 'business',   'exhilarate', 'familiar', 'February', 'foreign',   'laboratory',  'maintenance',  'occurrence',  'pastime',  'privilege',  'receipt', 'satellite', 'schedule', 'secretary',   'sincerely',  'vacuum',  'Wednesday',       'cash', 'cache',   'censor', 'censer', 'senser', 'sensor',   'colonel', 'kernel', 'complement', 'compliment', 'council', 'counsel', 'elicit', 'illicit',  'lean', 'lien',   'ought', 'aught'];
  hardWords8: string[] = [ 'principal', 'principle', 'recede', 'reseed',  'stationary', 'stationery',   'rote', 'wrote',   'amoral', 'immoral',  'averse', 'adverse', 'biannual', 'biennial',  'climactic', 'climatic', 'collaborate', 'corroborate', 'conscience', 'conscious', 'convince', 'persuade',  'emigrate', 'immigrate', 'flaunt', 'flout',  'gambit', 'gamut',  'liable', 'libel',   'nauseated', 'nauseous',  'proceed', 'precede', 'proscribe', 'prescribe',   'tenant', 'tenet',   'Naveta', 'betta', 'cataphract', 'vervain', 'frittata', 'affreight', 'incarnadine', 'anise', 'ovoid', 'injurious', 'histoplasmosis', 'alegria', 'effervescently', 'misnomer', 'incumbency', 'conniption', 'credo', 'innumerable', 'deceitful', 'mangrove',    'symposium', 'Ruthenia', 'beau monde', 'Caledonian', 'nubilous', 'avaricious', 'geniture', 'resin', 'acculturation', 'decongestant', 'recondite', 'marmoreal',  'vitrine', 'lucrative', 'halibut',   'garnet', 'disavowed', 'ingestible', 'ethos', 'vestibule',  'incursion', 'eventide', 'banister',  'furtive',  'boondoggle',    'idiochromatic', 'quaff', 'dryad', 'menaced', 'slanderous', 'lactation', 'sockeye', 'telex', 'palatable',   'enculturation', 'lumbar'];
  hardWords9: string[] = [ 'limpkin',  'tenure', 'flooey', 'effectuate',  'flummery',  'chaplain', 'Tinseltown', 'coalition', 'cassettes', 'occitan', 'guanabana', 'zymoscope',  'fascism', 'nomadic', 'matriculate', 'immaculate', 'metabolism', 'crudo', 'verisimilitude', 'animadversion', 'domiciliated', 'viscount', 'artesian', 'verbena',  'illicitly',  'altiplano', 'sapphire',   'resplendence',  'pituitary',   'legislator',  'clandestine',    'sprightful',  'apothecary',  'oligarchy', 'bemused', 'caveat',  'yuletide',  'quarantine', 'archaic', 'fortuitous', 'quandary',  'trusteeship',  'constituency',  'collegiality',  'peninsula',  'accountant', 'exhalation', 'nostalgic',  'hypoglycemia', 'severance',  'compendium', 'felled', 'drapery',  'docent',  'neurosis',  'proxy', 'achieve',  'rebuked',   'ruefully', 'guise', 'pennant',   'alabaster',  'scrimmage',  'medicinal',   'humanitarian',  'diabolical',  'martyr',  'cliques',  'couriers', 'miscreant',   'cavil',  'guava', 'penitent', 'vexation',  'damask',  'extricates',  'diminutive',  'rivulets', 'barbarous', 'sagacity', 'gangrene', 'chilblains',  'relinquish', 'Caribbean',  'jefe', 'Xanadu',   'promenade', 'vocational',  'eclair'];
  hardWords10: string[] = [ 'indelible',  'gondolier', 'cliches',   'catacombs',  'dervishes',   'inertia', 'bronchitis',  'haberdashery', 'offal', 'garrison', 'felicitously',  'attenuated', 'valise', 'dissertation',  'piedmont',  'portentously', 'antecedents', 'gaiters', 'sachet',  'metallurgy',  'balsam', 'emaciated',  'amethyst', 'chivalrous', 'phalanx',    'noisome', 'munificent', 'affidavit',  'Babylon',  'tetrarch',  'homo sapiens', 'ligatures', 'grenadier', 'canapes', 'voltaic', 'espionage',   'Harlequin', 'fascist',  'balaclavas', 'courteous', 'aphorism', 'diffidence', 'eviscerated', 'unguents', 'concertina', 'electrolysis', 'asseveration', 'lobelia', 'balustrades', 'expiation', 'flambeau', 'ambuscade', 'execrations', 'fuchsia', 'proboscis', 'exordium', 'Leipzig', 'phaeton', 'marengo', 'jacquerie', 'ichor', 'mille-feuille', 'auf Wiedersehen'];

  myWords = {};

  constructor() { }

  // wordsToJSON(): any {
  //   this.addWords(this.gradeOne2018, 1, false, '', '');
  //   this.addWords(this.gradeOneTwo2018, 2, false, '', '');
  //   this.addWords(this.gradeTwoThree2018, 3, false, '', '');
  //   this.addWords(this.gradeThreeFour2018, 4, false, '', '');
  //   this.addWords(this.gradeFourFive2018, 5, false, '', '');
  //   this.addWords(this.gradeFiveSix2018, 6, false, '', '');
  //   this.addWords(this.gradeSixSeven2018, 7, false, '', '');
  //   this.addWords(this.gradeSevenEight2018, 8, false, '', '');
  //   this.addWords(this.gradeEightChallange2018, 8, true, '', '');

  //   this.addWords(this.latinWords, 6, false, 'Latin', '');
  //   this.addWords(this.arabicWords, 6, false, 'Arabic', '');
  //   this.addWords(this.asianWords, 6, false, 'Asian', '');
  //   this.addWords(this.frenchWords, 6, false, 'French', '');
  //   this.addWords(this.eponyms, 6, false, 'Eponyms', '');
  //   this.addWords(this.germanWords, 6, false, 'German', '');
  //   this.addWords(this.slavicWords, 6, false, 'Slavic', '');
  //   this.addWords(this.dutchWords, 6, false, 'Dutch', '');
  //   this.addWords(this.oldEnglishWords, 6, false, 'Old English', '');
  //   this.addWords(this.newWorldWords, 6, false, 'New World', '');
  //   this.addWords(this.japaneseWords, 6, false, 'Japanese', '');
  //   this.addWords(this.greekWords, 6, false, 'Greek', '');
  //   this.addWords(this.italianWords, 6, false, 'Italian', '');
  //   this.addWords(this.spanishWords, 6, false, 'Spanish', '');

  //   this.addWords(this.latinChallengeWords, 8, true, 'Latin', '');
  //   this.addWords(this.arabicChallengeWords, 8, true, 'Arabic', '');
  //   this.addWords(this.asianChallengeWords, 8, true, 'Asian', '');
  //   this.addWords(this.frenchChallengeWords, 8, true, 'French', '');
  //   this.addWords(this.eponymChallengeWords, 8, true, 'Eponyms', '');
  //   this.addWords(this.germanChallengeWords, 8, true, 'German', '');
  //   this.addWords(this.slavicChallengeWords, 8, true, 'Slavic', '');
  //   this.addWords(this.dutchChallengeWords, 8, true, 'Dutch', '');
  //   this.addWords(this.oldEnglishChallengeWords, 8, true, 'Old English', '');
  //   this.addWords(this.newWorldChallengeWords, 8, true, 'New World', '');
  //   this.addWords(this.japaneseChallengeWords, 8, true, 'Japanese', '');
  //   this.addWords(this.greekChallengeWords, 8, true, 'Greek', '');
  //   this.addWords(this.italianChallengeWords, 8, true, 'Italian', '');
  //   this.addWords(this.spanishChallengeWords, 8, true, 'Spanish', '');

  //   this.addWords(this.frequentlyMisspelled, 4, false, '', 'Frequently misspelled word');
  //   this.addWords(this.homonyms, 4, false, '', 'This word has one or more homonyms, words with the same pronunciation, but with a different spelling or meaning.  Make sure to ask for the definition.');
  //   this.addWords(this.commonlyConfused, 4, false, '', 'This word is commonly confused with another similar sounding word.');

  //   // console.log('lotso, lotso words');
  //   // console.log(this.myWords);

  //   return this.myWords;
  // }

  // get2017Words(): string[] {
  //   return this.words2017;
  // }

  get2018Words(startingGrade: number, wordGroups: WordGroup[]): string[] {

    let words: string[] = [];
    if (startingGrade < 1 || startingGrade > 10) { startingGrade = 1; }
    switch (startingGrade) {
      case 1:
        words = words.concat(this.gradeOne2018);
        /* falls through */
      case 2:
        words = words.concat(this.gradeOneTwo2018);
        /* falls through */
      case 3:
        words = words.concat(this.gradeTwoThree2018);
        /* falls through */
      case 4:
        words = words.concat(this.gradeThreeFour2018);
        /* falls through */
      case 5:
        words = words.concat(this.gradeFourFive2018);
        /* falls through */
      case 6:
        words = words.concat(this.gradeFiveSix2018);
        /* falls through */
      case 7:
        words = words.concat(this.gradeSixSeven2018);
        /* falls through */
      case 8:
        words = words.concat(this.gradeSevenEight2018);
        /* falls through */
      case 9:
        words = words.concat(this.gradeEightChallange2018);
        break;
      case 10:
        // no words added... move along
    }

    for (const group of wordGroups) {
      if (!group.selected) {
        continue;
      }

      switch (group.name.toLowerCase()) {
        case 'latin':
          words = words.concat(this.latinWords);
          words = words.concat(this.latinChallengeWords);
          break;
        case 'arabic':
          words = words.concat(this.arabicWords);
          words = words.concat(this.arabicChallengeWords);
          break;
        case 'asian':
          words = words.concat(this.asianWords);
          words = words.concat(this.asianChallengeWords);
          break;
        case 'french':
          words = words.concat(this.frenchWords);
          words = words.concat(this.frenchChallengeWords);
          break;
        case 'eponyms':
          words = words.concat(this.eponyms);
          words = words.concat(this.eponymChallengeWords);
          break;
        case 'german':
          words = words.concat(this.germanWords);
          words = words.concat(this.germanChallengeWords);
          break;
        case 'slavic':
          words = words.concat(this.slavicWords);
          words = words.concat(this.slavicChallengeWords);
          break;
        case 'dutch':
          words = words.concat(this.dutchWords);
          words = words.concat(this.dutchChallengeWords);
          break;
        case 'old english':
          words = words.concat(this.oldEnglishWords);
          words = words.concat(this.oldEnglishChallengeWords);
          break;
        case 'new world':
          words = words.concat(this.newWorldWords);
          words = words.concat(this.newWorldChallengeWords);
          break;
        case 'japanese':
          words = words.concat(this.japaneseWords);
          words = words.concat(this.japaneseChallengeWords);
          break;
        case 'greek':
          words = words.concat(this.greekWords);
          words = words.concat(this.greekChallengeWords);
          break;
        case 'italian':
          words = words.concat(this.italianWords);
          words = words.concat(this.italianChallengeWords);
          break;
        case 'spanish':
          words = words.concat(this.spanishWords);
          words = words.concat(this.spanishChallengeWords);
          break;
        case 'frequently misspelled':
          words = words.concat(this.frequentlyMisspelled);
          words = words.concat(this.fromOtherBees);
          break;
        case 'homonyms':
          words = words.concat(this.homonyms);
          break;
        case 'commonly confused':
          words = words.concat(this.commonlyConfused);
          break;
        case 'other bees':
          words = words.concat(this.fromOtherBees);
          words = words.concat(this.fromOtherNonScrippsBees);
          words = words.concat(this.fromPreviousYears);
          words = words.concat(this.fromDailyBuzzword);
          break;

        default:
          break;
      }
    }

    return words;
  }

  addWords(words: string[], level: number, challenge: boolean, language: string, tip: string) {
    for (const word of words) {
      const w: Word = {
        spelling: word,
        language: language,
        definitions: [],
        link: '',
        successful: 0,
        failed: 0,
        alternateSpellings: [],
        sentences: [],
        level: level,
        challenge: challenge,
        tip: tip
      };
      this.myWords[word] = w;
    }
  }
}
