//best in Chrome
//Safari does ok
//IE10 doesn't support transform-style: preserve-3d;
//Firefox tries real hard.


//http://www.greensock.com/gsap-js/

var tunnel = $(".tunnel"),
    tl = new TimelineMax({repeat:1, yoyo:true, onUpdate:updateSlider, onComplete:showNav}),
    slider = $("#slider"),
    playBtn = $("#playBtn").button(),
    nav = $("#nav"),
    ringCount = 71,
    radius = 200,
    gapDegrees = 360 / (ringCount + 1),
    i, ring, rings, angle;

//loop through 71 times and create a new <li>, positioning it and coloring it appropriately.
for (i = 0; i <= ringCount; i++) {
  ring = $("<li class='ring' />");
  angle = i * gapDegrees * Math.PI / 180;
  TweenLite.set(ring, {
    rotationX:i * gapDegrees, 
    y:Math.cos(angle) * -radius, 
    z:Math.sin(angle) * -radius, 
    color: "hsla(" + (i / ringCount * 360) + ",100%,50%, 0.5)"
  });
  ring.appendTo(tunnel);
}

rings = $(".ring");

TweenLite.set(tunnel, {visibility:"visible"});
tl.to(tunnel, 4, { rotationZ:45, ease:Back.easeInOut}, "+=0.5")
.to(tunnel, 4, {rotationY:180, ease:Back.easeInOut}, 0)
.to(tunnel, 10, {scale:2.4})
.to(tunnel, 12, {rotationZ:450, ease:Back.easeInOut}, "-=8")
.to(tunnel, 6, {rotationZ:200, rotationY:360, scale:1, ease:Back.easeInOut}, "+=2.5")


//if you are using Chrome, uncomment the next line
//.staggerTo(rings, 3, {rotationY:-360, scale:3}, 0.01, "-=4")

.to(tunnel, tl.duration(), {rotationX:360*3, ease:Power1.easeInOut}, 0)


// controls

$( "#slider" ).slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.totalProgress( ui.value/100 ).pause();
  }
});	
			
	function updateSlider() {
		slider.slider("value", tl.totalProgress() * 100);
	} 				  

playBtn.click(function(e) {
  if(tl.totalProgress() === 1){
    tl.restart();
  }else{
    tl.play();
  }
  TweenLite.to($(this), 0.2, {autoAlpha:0});
});

slider.mousedown(function(){
  TweenLite.to(playBtn, 0.2, {autoAlpha:1});
})

function showNav(){
  TweenLite.to([nav, playBtn], 0.2, {autoAlpha:1});
}


//inspired by and forked from: Peter Westendorp 
// http://codepen.io/peterwestendorp/pen/JEomi <-- very cool. check it out.