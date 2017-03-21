app = app || {};
app.winScale = {};

app.winScale.$winHeight;
app.winScale.$winWidth;

// ----------------------------------------------------
//    Used to kill off duplicate elements on rescale.
// ----------------------------------------------------

var removeElementsByClass = function (className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

// ----------------------------------------------------
// ------------------ Start setters -------------------
// Set scales of all elements and distances, based on the user's viewport.


var setCounters = function(){
  var $depthCount = document.getElementById('depthGauge');
  // Our depth is calculated by distance from the top of our window, divided by the value of our calculated meter (then rounded).
  var depth = Math.round( ( scrollY / app.winScale.meterLength ) * 10 ) / 10
  $depthCount.innerHTML = ( depth ) + " m";
  // 14.57 psi increase in pressure, per 10m.
  var pressure = depth * 1.457
  document.getElementById('pressureGauge').innerHTML = (Math.round( pressure * 10 ) / 10).toFixed(2) + " psi"
};

var setsideScale = function(){
  $sideScale = document.getElementById( 'sideScale' );
  app.winScale.$winHeight = window.innerHeight;
  app.winScale.$winWidth = window.innerWidth;
  $sideScale.style.height  = app.winScale.$winHeight + 'px';
  app.winScale.meterLength = parseInt(window.getComputedStyle( document.getElementsByClassName('intMarker')[0] ).height) / 2;
  $sideScale.style.fontSize = ( parseInt($sideScale.style.height) / 20) + 'px';
};

var setseascapeScale = function(){
  app.winScale.$winHeight = window.innerHeight;
  // Set the window ocean depth based on our calculated value of a meter.
  $seascape.style.height = app.winScale.meterLength * 11050 + "px";
};

var setFactoids = function(){
  // Purge any existing factoids, otherwise resizing etc ends up in duplicate elements.
  removeElementsByClass( 'factoid' );
  for( data in app.data.facts ){
    for( factset in app.data.facts[data] ){
      var $factoid = document.createElement('div');
      $factoid.className = "factoid";
      $factoid.innerHTML = app.data.facts[data][factset];
      // Calculate our offset from the top based on the meter value provided to our data points.
      var zonePercentFromTop = ( ( parseInt( factset ) / ( parseInt( $seascape.style.height ) / app.winScale.meterLength ) ) * 100  ) / 100 * parseInt( $seascape.style.height );
      console.log( zonePercentFromTop );
      $factoid.style.marginTop = parseInt( zonePercentFromTop ) + 'px';
      $seascapeGradient.appendChild( $factoid );
    }
  }
};

var setZones = function(){
  removeElementsByClass( 'zone' );
  app.data.oceanicZones.forEach( function( zone ){
    var $zone = document.createElement('div');

    $zone.className = "zone";
    $zone.innerHTML = zone.name;
    zonePercentFromTop = ( ( zone.start / ( parseInt( $seascape.style.height ) / app.winScale.meterLength ) ) * 100  ) / 100 * parseInt( $seascape.style.height );
    console.log( zonePercentFromTop );

    $zone.style.marginTop = parseInt( zonePercentFromTop ) + 'px';
    $seascapeGradient.appendChild( $zone );
  } );
};

// Mass function calls, to save me having to write out this cluster for every window change event.

var setScales = function(){
  setsideScale();
  setseascapeScale();
  setFactoids();
  setZones();
  setCounters();
};


// --------------------End Setters---------------------
// ----------------------------------------------------




window.onload = function( e ){
  $seascape = document.getElementById('seascape');
  $seascapeGradient = document.getElementById('darkGradient')
  setScales();
};

window.onresize = function(){
  setScales();
};

window.onscroll = function(){
  setScales();
};
