var app = app || {};
app.data = {};
app.data.scrollPoints = [];
app.data.seafloor = 10994;

app.data.oceanicZones = [
  {
    name: "The Epipelagic zone",
    aka: "The Sunlight zone",
    start: 0,
  },
  {
    name: "Entering the Mesopelagic zone",
    aka: "The Twilight zone",
    start: 200,
  },
  {
    name: "Entering the Bathypelagic zone",
    aka: "The Midnight zone",
    start: 1000,
  },
  {
    name: "Entering the Abyssopelagic zone",
    aka: "The Abyss",
    start: 4000,
  },
  {
    name: "Entering the Hedalpelagic zone",
    aka: "The Trenches",
    start: 9000,
  },
  ,
  {
    name: "Challenger deep",
    aka: "The deepest known point on earth",
    start: 10994,
  },
];

app.data.facts = {};

app.data.facts.humanAchievement = {
  10: "For every 10 meters you descend, the volume of air in your body is halved. <br>Lungs compress to 1/3 their normal size.<br/><br/>Due to this compression, most people will have reached neutral buoyancy. Any deeper and you will begin to sink, rather than float in the water.",
  40: "The depth limit for recreational scuba divers.",
  102: "The deepest freedive without using fins. At this depth, the pressure will have compressed each lung down to the size of an orange.",
  332: "The deepest SCUBA dive ever achieved.",
  730: "Estimated maximum dive depth of Seawolf class submarines.",
  // Check me.
  // 4000: "The deepest capacity at which Trawlers can operate.",
  10898: "The depth James Cameron reached in 2012.",
  10911: "The deepest diving point of the Trieste (1960) -- the deepest humans have ever been.",
};

app.data.facts.biology = {
  20: "Red light is already barely visible. <br/>Blood at this depth looks dark green. As we go deeper, the last of the red will be filtered out of the visible spectrum. This is why a lot of sea life is red. <br/>At depth, they are effectively black.",
  115: "The height of 'Hyperion', The world's tallest redwood tree.",
  160: "Almost no sunlight penetrates this deep.<br> Photosynthesis is no longer a viable survival strategy.<br/>Bioluminescence is the only source of light.",
  259: "The deepest known dive by an Orca.",
  // 300: "Deepest recorded dive by a Bottlenose dolphin.",
  360: "Lantern fish begin to appear. Lantern fish make up up to 65% of the deep sea fish biomass.<br/>The estimated global biomass of lanternfish is 550 - 660 million metric tonnes, several times the entire world's annual fisheries catches combined.",
  400: "During World War II, submariners were puzzled by shifting sea floors. During the day sonar would indicate depths for 300-500  meters, but during the evenings, it appeared to rise.<br/>This turned out to be sonar bouncing off of the swim bladders of millions of fish which, during daylight, keep to the relative safety of the depths, rising to feed under the cover of night.",
  506: "The deepest recorded dive of a Blue Whale -- The largest animal to have ever existed.",
  990: "Many creatures are starting to depend on 'Marine Snow', decaying organic matter that filters down from the water column above, for nutrition.<br>Any trace light from the surface is entirely gone.",
  1200: "The deepest recorded dive by a Great White shark.",
  2000: "The limits at which Sperm whales can dive.",
  2100: "The average depth where hydrothermal vents can be found.",
  2200: "The deepest known range of the Colossal Squid.",
  2388: "The deepest recorded depth of an Elephant Seal -- the deepest diving seal species.",
  3000: "The limits of the deepest diving mammal -- The Cuvier's beaked whale.",
  3675: "The lowest reaches of the Portugese Dogfish -- The deepest-dwelling shark.",
  4500: "Deep in the bathypelagic zone, the pressures are crushing, and the temperatures are very low.<br/>Almost all fish at this depth have very slow metabolisms and hunt purely by ambush to minimise energy loss. <br/>Due to the crushing pressure, most fish at these depths entirely lack swimbladders.",
  6000: "At this depth, due to pressure, water needs to be nearly 500 degrees celcius (932°F) to reach boiling point.",
  7000: "The lowest ranges of the Dumbo Octopus, the deepest dwelling cephalopod.",
  //revise
  8143: "The lowest recorded depth of any living fish.",
  8200: "The deepest theoretical depth at which any fish could survive. Beyond this point, pressure starts to cause issues on a cellular level.",
};

app.data.facts.geography = {
  45: "The deepest points of Sydney harbour - the deepest (and largest) natural harbour on Earth.",
  1857: "The depth of the Grand Canyon.",
  3688: "The average depth of all oceans.",
  5895: "The height of mount Kilamanjaro",
  6009: "The depth of Yarlung Zangbo, The deepest land canyon.",
  8848: "The height of Everest.",
  10210: "The total height (including undersea) of Mauna Kea.<br>The tallest mountain on Earth.",
};

app.data.facts.architecture = {
  108: "The final resting depth of the Kursk.",
  301: "The height of Eiffel tower",
  541: "The height of the One World Trade Center.",
  828: "The tallest building on earth, the Burj Khalifa.",
  2450: "The operating depth of The Perdido, the deepest floating oil rig on Earth.",
  3810: "The depth at which the Titanic rests.",
  4900: "The deepest successful salvage operation - retrieving the black box of South African Airways Flight 295.",
  5762: "The deepest known wreck, The Rio Grande. Just over half way down now.",
};
