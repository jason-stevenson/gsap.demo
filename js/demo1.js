


$( document ).ready(function() {
  
	
	var winWid = $( window ).width();


	 // $('#header').mouseover(function() {
 	// 	TweenMax.to($("#header"), 1.5,  { paddingTop:"10em", ease:Bounce.easeOut});
 	// 	console.log(this.next());
	 //  })


var tl = new TimelineMax({yoyo:true, onComplete:animComplete});    
	



// $( ".menu li" ).each(function( index ) {
// 	  var t = $( ".menu li" )

// 	  tl.staggerTo(t, 1, {rotationX:360}, 0.2)
// 	});
	


for (i = 0; i < $( ".menu li" ).length; i++) { 
	tl.to($( ".menu" ), 1, {height:"800px"})
    tl.staggerTo($( ".menu li" ), 1, {paddingLeft:"250px"}, 0.8);
    //tl.to($( ".menu" ), 1, {paddingLeft:"500px"});
    tl.to($( ".menu" ), 3, {left:winWid - $('.menu').width()});
    tl.to($( ".menu" ), 1, {top:"80px"})
     tl.to($( ".menu" ), 2.5, {left:"0px"});

   
}



});


function animComplete(){
/*	console.log("complete")
	alert('complete');*/
}





// $('li').mouseover(function(){

// 		buttonSpin($(this).children('a'));
// })


// $('li a').mouseleave(function(){
// 		buttonSpinReset(this);
// })



// function buttonSpin(t){
// 	TweenMax.to(t, 1.5,  {rotationX:360, transformOrigin:"center center"});
// }

// function buttonSpinReset(t){
// 	TweenMax.to(t, 1.5,  {rotationX:0, transformOrigin:"center center"});
// }