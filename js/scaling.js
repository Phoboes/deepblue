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

var getUniqueValues = function( arr ){
  var storedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    if( storedArr.indexOf( arr[i] ) === -1 ){
      storedArr.push( arr[i] );
    }
  }
  // console.log( storedArr.sort(function (a, b) {  return a - b;  }) )
  return storedArr.sort(function (a, b) {  return a - b;  });
}


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
      // console.log( zonePercentFromTop );
      $factoid.style.marginTop = parseInt( zonePercentFromTop ) + 'px';
      app.data.scrollPoints.push( zonePercentFromTop );
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
    // console.log( zonePercentFromTop );

    $zone.style.marginTop = parseInt( zonePercentFromTop ) + 'px';
    app.data.scrollPoints.push( zonePercentFromTop );
    $seascapeGradient.appendChild( $zone );
  } );
};

// Mass function calls, to save me having to write out this cluster for every window change event.

var setScales = function(){
  app.data.scrollPoints = [];
  setsideScale();
  setseascapeScale();
  setFactoids();
  setZones();
  setCounters();
  app.data.scrollPoints = getUniqueValues( app.data.scrollPoints );

  setPoints( app.data.scrollPoints );
  spacePoints();

};

var setPoints = function( arr ){
  var $pointWrap = document.getElementById( 'pointWrap' );
  for (var i = arr.length - 1; i >= 0; i--) {
    var $point = document.createElement('div');
    $point.className = "point";
    $pointWrap.appendChild( $point );
  };

};

var spacePoints = function(){
  var $pointWrap = document.getElementById('pointWrap');
  var $wrapHeight = parseInt( window.getComputedStyle( document.getElementById('pointWrap') ).height );
  var $wrapWidth = parseInt( window.getComputedStyle( document.getElementById('pointWrap') ).width );
  var navPoints = document.getElementsByClassName('point')
  var pointCount = navPoints.length;
  var evenSpacing = $wrapHeight / ( pointCount + 1 );
  var pointSize = $wrapWidth / 30;
  for (var i = navPoints.length - 1; i >= 0; i--) {
    navPoints[i].style.height = pointSize + 'px';
    navPoints[i].style.width = pointSize + 'px';
    navPoints[i].style.marginTop = (evenSpacing * i + evenSpacing ) + 'px';
    navPoints[i].style.marginLeft = ( ( $wrapWidth / 2 ) - pointSize ) + 'px';
  };
};

var clickNav = function(){
  windowPos = window.scrollY;
  var dataPointLength = app.data.scrollPoints.length
  if( this.id === 'up' ){
    for (var i = dataPointLength - 1; i >= 0; i--) {
      // If we're sitting between data points, navigate to the nearest point with a lower Y index and stop the loop.
      var roundedPos = Math.round( app.data.scrollPoints[i] );
      if( windowPos > roundedPos ){
        window.scrollTo( 0, roundedPos );
        break
        // If we're already on a point, navigate to the one before.
      } else if ( windowPos === Math.round( app.data.scrollPoints[i] ) ){
        window.scrollTo( 0, app.data.scrollPoints[ i - 1 ] );
        break;
      }
    };
    console.log('up')
  } else {
    for (var i = 0; i <= dataPointLength - 1; i++) {
      console.log(i)
      var roundedPos =Math.round( app.data.scrollPoints[i] );
      // debugger
      if( windowPos < Math.round( app.data.scrollPoints[i] ) ){
        window.scrollTo( 0, roundedPos );
        // debugger
        break
      } else if ( windowPos === Math.round( app.data.scrollPoints[i] ) ){
        // debugger
        window.scrollTo( 0, app.data.scrollPoints[ i + 1 ] );
        break;
      }
    };
    console.log('down')
  }
};



// --------------------End Setters---------------------
// ----------------------------------------------------




window.onload = function( e ){
  $seascape = document.getElementById('seascape');
  $seascapeGradient = document.getElementById('darkGradient')
  setScales();

var $arrows = document.getElementsByClassName('arrow');
  for (var i = $arrows.length - 1; i >= 0; i--) {
    $arrows[i].onclick = clickNav;
  };
};

window.onresize = function(){
  setScales();
};

window.onscroll = function(){
  setCounters();
};
