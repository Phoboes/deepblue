var app = app || {};
app.data = {};
app.data.scrollPoints = [];
app.data.seafloor = 10994;

app.data.oceanicZones = [
    {
      name: "Epipelagic zone",
      aka: "The Sunlight zone",
      start: 0
    },
    {
    name: "Mesopelagic zone",
    aka: "The Twilight zone",
    start: 200
    },
    {
    name: "Bathypelagic zone",
    aka: "The Midnight zone",
    start: 1000
    },
    {
    name: "Abyssopelagic zone",
    aka: "The Abyss",
    start: 4000
    },
    {
    name: "Hedalpelagic zone",
    aka: "The Trenches",
    start: 9000
    },
    ,
    {
    name: "Challenger deep",
    aka: "The Trenches",
    start: 10994
    }
  ];

  app.data.facts = {};

  app.data.facts.humanAchievement = {
    20: "For every 10 meters you descend, the volume of air in your body is halved. <br>Lungs compress to 1/3 their normal size.<br>Around now, a human with no equipment reaches neutral or negative bouyancy.",
    40: "The depth limit for recreational scuba divers.",
    102: "The deepest freedive without using fins.",
    332: "The deepest SCUBA dive ever achieved.",
    730: "Estimated maximum dive depth of Seawolf class submarines.",
    // Check me.
    // 4000: "The deepest capacity at which Trawlers can operate.",
    10898: "The depth James Cameron reached in 2012.",
    10911: "The deepest diving point of the Trieste - the deepest humans have ever been."
  };

  app.data.facts.biology = {
    10: "Red light penetrates no deeper. Blood at this depth looks dark green.",
    160: "Almost no sunlight penetrates this deep.<br> Photosynthesis is no longer a viable survival strategy.",
    300: "Deepest recorded dive by a Bottlenose dolphin.",
    990: "Many creatures are starting to depend on 'Marine Snow' (dead things falling in the water column) for food.<br>Any trace light from the surface is gone.",
    2000: "The limits at which Sperm whales can dive.",
    2100: "The average depth where hydrothermal vents can be found.",
    3000: "The limits of the deepest diving mammal - The Cuvier's beaked whale."
  };

  app.data.facts.geography = {
    45: "The deepest points of Sydney harbour - the deepest (and largest) natural harbour on Earth.",
    3688: "The average depth of all oceans.",
    8848: "The height of Everest.",
    10210: "The total height (including underwater) of Mauna Kea.<br>The tallest mountain on Earth."
  };

  app.data.facts.architecture = {
    108: "The final resting depth of the Kursk.",
    301: "The height of Eiffel tower",
    541: "The One World Trade Center.",
    828: "The tallest building on earth, the Burj Khalifa.",
    3810: "The depth at which the Titanic rests.",
    4900: "The deepest successful salvage operation - retrieving the black box of South African Airways Flight 295.",
    5762: "The deepest known wreck, The Rio Grande."
  };

// for( data in app.data.facts ){
//   console.warn( data )
//   for( factset in app.data.facts[data] ){
//     // debugger
//     console.log( factset + ": " + app.data.facts[data][factset] );
//     console.log('')
//
//     var $factoid = document.createElement('div');
//     $factoid.className = "factoid";
//     $factoid.innerHTML = app.data.facts[data][factset];
//
//     zonePercentFromTop = ( ( parseInt( factset ) / ( parseInt( $seascape.style.height ) / app.winScale.meterLength ) ) * 100  ) / 100 * parseInt( $seascape.style.height );
//     console.log( zonePercentFromTop );
//     $factoid.style.marginTop = parseInt( zonePercentFromTop ) + 'px';
//     $seascape.appendChild( $factoid );
//
//   }
// };
