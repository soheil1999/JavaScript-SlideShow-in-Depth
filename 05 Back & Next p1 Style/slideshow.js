window.onload=function(){
	// var a=1, b=2, c=3;
	var slideshow = document.getElementsByClassName('slideshow').item(0),
		train = slideshow.getElementsByClassName('train').item(0),
		lists = slideshow.getElementsByClassName('btns').item(0).getElementsByTagName('li'),
		currentSlide = 0;

	(go2slide = function (n) {
		if(n>lists.length-1) n=0;
		train.style.left=(-450*n)+'px';
		lists.item(currentSlide).className = '';
		lists.item(n).className = 'active';
		currentSlide=n;
	})(0); // set active of first li

	nextSlide = function(){
		go2slide(currentSlide+1);
	}

	var autoPlayIv = false;
	(autoPlayStart = slideshow.onmouseout = function(){
		if(autoPlayIv) return;
		autoPlayIv = setInterval(nextSlide, 5000);
	})(); // run auto play

	autoPlayStop = slideshow.onmouseover = function(){
		clearInterval(autoPlayIv);
		autoPlayIv = false;
	}

	for (var i=0; i<lists.length; i++) {
		(function(j){
			lists.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}

	//go2slide(0); // set active of first li
	//autoPlayStart();
}