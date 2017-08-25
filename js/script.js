$(document).ready(function(){
    $("#hide").click(function(){
        $(".leaflet-tooltip").hide();
    });
    $("#show").click(function(){
        $(".leaflet-tooltip").show();
    });
});


//sampled // http://maps.stamen.com/test/leaflet.html

var icon = L.divIcon({
    iconSize: [10, 10],
    iconAnchor: [10, 10],
    popupAnchor: [10, 0],
    shadowSize: [0, 0],
//*		    className: 'animated-icon my-icon-id' */
    className: 'markerIcon'
})

var icon2 = L.divIcon({
    iconSize: [10, 10],
    iconAnchor: [10, 10],
    popupAnchor: [10, 0],
    shadowSize: [0, 0],
//*		    className: 'animated-icon my-icon-id' */
    className: 'markerIconGreen'
})

var icon3 = L.divIcon({
    iconSize: [10, 10],
    iconAnchor: [10, 10],
    popupAnchor: [10, 0],
    shadowSize: [0, 0],
//*		    className: 'animated-icon my-icon-id' */
    className: 'markerIconGreen'
})


var icon4 = L.divIcon({
    iconSize: [200, 200],
    iconAnchor: [105, 105],
    popupAnchor: [0, 0],
    shadowSize: [0, 0],
//*		    className: 'animated-icon my-icon-id' */
    className: 'markerIconRadius'
})

var ll = L.latLng(25.7824617, -80.3012152) // Tampa
var ll2 = L.latLng(40.7133866, -74.1273178) // new York
//var ll3 = L.latLng(25.7824617, -80.3012152) // Miami
var ll3 = L.latLng(27.9591535, -82.4463063) // Tampa

var map;


 function initialize() {
     var layers = ["toner-lite"];
     for (var i = 0; i < layers.length; i++) {
         var layer = layers[i];
         map = new L.Map(layer, {
             center: new L.LatLng(27.9591535, -82.4463063),
             zoom: 5
         });
         map.addLayer(new L.StamenTileLayer(layer, {
             detectRetina: true
         }));

        L.marker(ll, {
        icon: icon,
        title: 'Tampa!'
      }).addTo(map).on('click', onClick5); // this activates the onclick function. Which we need to set to slide out menu.

        L.marker(ll2, {
        icon: icon2,
        title: 'New York!'
      }).addTo(map).on('click', onClick4); // this activates the onclick function. Which we need to set to slide out menu.

        L.marker(ll3, {
        icon: icon3,
        title: '!'
      }).addTo(map).on('click', onClick3); // this activates the onclick function. Which we need to set to slide out menu.


     }
 }




function changeMarker(){
/*  L.marker(ll3, {
  icon: icon2,
  title: '!'
  }).addTo(map).on('click', onClick2); // this activates the onclick function. Which we need to set to slide out menu.
*/

// this works. but stil has wrong color underneedth.
L.marker(ll2, {
icon: icon3,
title: '!'
}).addTo(map).on('click', onClick2); // this activates the onclick function. Which we need to set to slide out menu.

  console.log("yoooo")
}

function changeMarker3(){
L.marker(ll3, {
icon: icon3,
title: '!'
}).addTo(map).on('click', onClick2); // this activates the onclick function. Which we need to set to slide out menu.

}


function changeMarker2(){
// this works. but stil has wrong color underneedth.
L.marker(ll3, {
icon: icon2,
title: '!'
}).addTo(map).on('click', onClick2); // this activates the onclick function. Which we need to set to slide out menu.
}

function changeMarker1(){
// this works. but stil has wrong color underneedth.
L.marker(ll2, {
icon: icon2,
title: '!'
}).addTo(map).on('click', onClick2); // this activates the onclick function. Which we need to set to slide out menu.

}


 // create marker

 function onClickShow(divname) {
   var name = divname;
   console.log(divname);
   if(name == 'device'){
   onClick();
   }
   if(name == 'device1'){
   onClick1();
   }
   if(name == 'device2'){
   onClick2();
   }
 }



 function onClick(e) {
   var hidden = $('.device');
   var hidden1 = $('.device1');
   var hidden2 = $('.device2');
   // need to make this more dynamic.
   // but first hide the other two divs per click.
   if (hidden1.hasClass('visible')){
       hidden1.animate({"left":"-1000px"}, "fast").removeClass('visible');
   }
   if (hidden2.hasClass('visible')){
       hidden2.animate({"left":"-1000px"}, "fast").removeClass('visible');
   }

   if (hidden.hasClass('visible')){
       hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
   } else {
       hidden.animate({"left":"0px"}, "slow").addClass('visible');
   }
 }

 function onClick1(e) {

   var hidden = $('.device1');
   var hidden1 = $('.device');
   var hidden2 = $('.device2');

   if (hidden1.hasClass('visible')){
       hidden1.animate({"left":"-1000px"}, "fast").removeClass('visible');
   }
   if (hidden2.hasClass('visible')){
       hidden2.animate({"left":"-1000px"}, "fast").removeClass('visible');
   }

   if (hidden.hasClass('visible')){
       hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
   } else {
       hidden.animate({"left":"0px"}, "slow").addClass('visible');
   }
 }

 function onClick2(e) {
   var hidden = $('.device2');
   var hidden1 = $('.device1');
   var hidden2 = $('.device');

   if (hidden1.hasClass('visible')){
       hidden1.animate({"left":"-1000px"}, "fast").removeClass('visible');
   }
   if (hidden2.hasClass('visible')){
       hidden2.animate({"left":"-1000px"}, "fast").removeClass('visible');
   }


   if (hidden.hasClass('visible')){
       hidden.animate({"left":"-1000px"}, "slow").removeClass('visible');
   } else {
       hidden.animate({"left":"0px"}, "slow").addClass('visible');
   }
 }

   var testMarker = L.marker(ll3, {
      icon: icon4,
      title: ''
    });

  var testMarker1 = L.marker(ll, {
     icon: icon4,
     title: ''
   });

   var testMarker2 = L.marker(ll2, {
      icon: icon4,
      title: ''
    });

var tooltips;
var tool1 = {permanent: true, direction:"center", offset: new L.Point(90,0)};
var tool2 = {permanent: true, direction:"center", offset: new L.Point(-75,0)};
var tool3 = {permanent: true, direction:"center", offset: new L.Point(5,80)};

 function onClick3(e) {
   testMarker2.remove();
   testMarker1.remove();
// is it clickable>
//
// &#128251 radio
//value="+onClickShow('device')+"
//hide(target)
   testMarker.addTo(map).bindTooltip("<div class='unicode'><a href='http://172.16.30.98:8073/' target='_self'><img src='img/radio_on.png' width='40px'></a><br/><span class='unicodeText'>$4</span></div><div class='unicode'><img src='img/video_off.png' width='40px'><br/><span class='unicodeText'>$4</span></div><div class='unicode'><img src='img/audios_off.png' width='40px'><br/><span class='unicodeText'>$4</span></div>"
  +"",{permanent: true, direction:"center", interactive: true, offset: new L.Point(5,5)}).openTooltip();
     console.log("larger stroke border");
 }


//.setContent(e.latlng.toString() + '<a href="http://www.google.com">Visit Google</a>"')

 function onClick4(e) {
  testMarker1.remove();
  testMarker.remove();
  testMarker2.addTo(map).bindTooltip("<div class='unicode'><img src='img/radio_on.png' width='40px'><br/><span class='unicodeText'>$4</span></div><div class='unicode'><img src='img/video_on.png' width='40px'><br/><span class='unicodeText'>$4</span></div><div class='unicode'><img src='img/audios_on.png' width='40px'><br/><span class='unicodeText'>$4</span></div>"
 +"",{permanent: true, direction:"center", interactive: true, offset: new L.Point(5,5)}).openTooltip();

   console.log("try to remove");
//   $(".leaflet-tooltip").hide();
//   testMarker.remove(tool2);

 }

function testconsole(){
  console.log("blah blah blah")
}


 function onClick5(e) {
   testMarker2.remove();
   testMarker.remove();
   testMarker1.addTo(map).bindTooltip("<div class='unicode'><img src='img/radio_off.png' width='40px'><br/><span class='unicodeText'>$4</span></div><div class='unicode'><img src='img/video_off.png' width='40px'><br/><span class='unicodeText'>$4</span></div><div class='unicode'><img src='img/audios_off.png' width='40px'><br/><span class='unicodeText'>$4</span></div>"
  +"",{permanent: true, direction:"center", interactive: true, offset: new L.Point(5,5)}).openTooltip();
   console.log("larger stroke border")
 }

/* Old placement stuffs.
 function onClick5(e) {
   L.marker(ll, {
   icon: icon4,
   title: ''
 }).addTo(map).bindTooltip("<span class='unicode'>&#128644;</span>"
 +"",{permanent: true, direction:"center", offset: new L.Point(90,0)}).openTooltip().bindTooltip("<span class='unicode'>&#128251;</span>"
 +"",{permanent: true, direction:"center", offset: new L.Point(-75,0)}).openTooltip().bindTooltip("<span class='unicode'>&#128247;</span>"
 +"",{permanent: true, direction:"center", offset: new L.Point(5,80)}).openTooltip(); // this activates the onclick function. Which we need to set to slide out menu.
   console.log("larger stroke border")
 }
*/

 function adminPanel(){
   $(".adminDiv").toggle(1000);
 }

 function testing(){
   console.log("onclick works");
 }


 function show(target) {
     document.getElementById(target).style.display = 'block';
 }

 function hide(target) {
     document.getElementById(target).style.display = 'none';
 }
