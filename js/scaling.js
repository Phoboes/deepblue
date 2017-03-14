app = app || {};
app.winScale = {};

app.winScale.$winHeight;
app.winScale.$winWidth;

var removeElementsByClass = function (className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

var setCounters = function(){
  var $depthCount = document.getElementById('depthGauge');
  var depth = Math.round( ( scrollY / app.winScale.meterLength ) * 10 ) / 10
  $depthCount.innerHTML = ( depth ) + " m";
  var pressure = depth * 1.457
  // console.log( (Math.round( pressure * 10 ) / 10).toFixed(2) );
  document.getElementById('pressureGauge').innerHTML = (Math.round( pressure * 10 ) / 10).toFixed(2) + " psi"
}

var setsideScale = function(){
  app.winScale.$winHeight = window.innerHeight;
  app.winScale.$winWidth = window.innerWidth;
  $sideScale.style.height  = app.winScale.$winHeight + 'px';
  app.winScale.meterLength = parseInt(window.getComputedStyle( document.getElementsByClassName('intMarker')[0] ).height) / 2;
  $sideScale.style.fontSize = ( parseInt($sideScale.style.height) / 20) + 'px';
};

var setseascapeScale = function(){
  app.winScale.$winHeight = window.innerHeight;
  $seascape.style.height = app.winScale.meterLength * 11050 + "px";
}

var setFactoids = function(){

  removeElementsByClass( 'factoid' );

  for( data in app.data.facts ){
    console.warn( data )
    for( factset in app.data.facts[data] ){
      // debugger
      // console.log( factset + ": " + app.data.facts[data][factset] );
      // console.log('')

      var $factoid = document.createElement('div');
      $factoid.className = "factoid";
      $factoid.innerHTML = app.data.facts[data][factset];

      zonePercentFromTop = ( ( parseInt( factset ) / ( parseInt( $seascape.style.height ) / app.winScale.meterLength ) ) * 100  ) / 100 * parseInt( $seascape.style.height );
      console.log( zonePercentFromTop );
      $factoid.style.marginTop = parseInt( zonePercentFromTop ) + 'px';
      $seascape.appendChild( $factoid );

    }
  }
};

var setZones = function(){

  removeElementsByClass( 'zone' );

  app.data.oceanicZones.forEach( function( zone ){
    var $zone = document.createElement('div');
    // debugger
    $zone.className = "zone";
    $zone.innerHTML = zone.name;
    zonePercentFromTop = ( ( zone.start / ( parseInt( $seascape.style.height ) / app.winScale.meterLength ) ) * 100  ) / 100 * parseInt( $seascape.style.height );
    console.log( zonePercentFromTop );
    // debugger
    $zone.style.marginTop = parseInt( zonePercentFromTop ) + 'px';
    $seascape.appendChild( $zone );
    // console.log( zone.name )
    // console.log( zone.start )

  } );
}

var setScales = function(){
  setsideScale();
  setseascapeScale();
  setFactoids();
  setZones();
  setCounters();
}






window.onload = function( e ){
  $seascape = document.getElementById('seascape');
  $seascapeHeight = $seascape.offsetHeight;
  $sideScale = document.getElementById( 'sideScale' );
  setScales();
};


window.onresize = function(){
  setScales();
}

window.onscroll = function(){
  setScales();
}
