let button = document.querySelectorAll('.item__btn');
let audio_a = new Audio("audio/1.mp3");
let audio_s = new Audio("audio/2.mp3");
let audio_d = new Audio("audio/3.mp3");
let audio_f = new Audio("audio/4.mp3");
let audio_g = new Audio("audio/5.mp3");
let audio_h = new Audio("audio/6.mp3");
let audio_j = new Audio("audio/7.mp3");
let audio_k = new Audio("audio/8.mp3");

//keyboard down/up
function piano (event){
switch(event.keyCode) {
		case 65:
	audio_a.currentTime = 0;
	audio_a.play();
 	button[0].classList.add('active');
 	break;
 		case 83:
	audio_s.currentTime = 0;
	audio_s.play();
 	button[1].classList.add('active')
 	break;
 		case 68:
	audio_d.currentTime = 0;
	audio_d.play();
 	button[2].classList.add('active')
 	break;
 		case 70:
	audio_f.currentTime = 0;
	audio_f.play();
 	button[3].classList.add('active')
 	break;
 		case 71:
	audio_g.currentTime = 0;
	audio_g.play();
 	button[4].classList.add('active')
 	break;
 		case 72:
	audio_h.currentTime = 0;
	audio_h.play();
 	button[5].classList.add('active')
 	break;
 		case 74:
	audio_j.currentTime = 0;
	audio_j.play();
 	button[6].classList.add('active')
 	break;
 		case 75:
	audio_k.currentTime = 0;
	audio_k.play();
 	button[7].classList.add('active')
 	break;
}
};
document.addEventListener('keydown',piano);
document.addEventListener('keyup', function(){
button[0].classList.remove('active');
button[1].classList.remove('active');
button[2].classList.remove('active');
button[3].classList.remove('active');
button[4].classList.remove('active');
button[5].classList.remove('active');
button[6].classList.remove('active');
button[7].classList.remove('active');
});




//Mouse down/up
button[0].addEventListener('mousedown',function(){
	audio_a.currentTime = 0;
	audio_a.play();
	this.classList.add("active");
});
button[1].addEventListener('mousedown',function(){
	audio_s.currentTime = 0;
	audio_s.play();
	this.classList.add("active");
});
button[2].addEventListener('mousedown',function(){
	audio_d.currentTime = 0;
	audio_d.play();
	this.classList.add("active");
});
button[3].addEventListener('mousedown',function(){
	audio_f.currentTime = 0;
	audio_f.play();
	this.classList.add("active");
});
button[4].addEventListener('mousedown',function(){
	audio_g.currentTime = 0;
	audio_g.play();
	this.classList.add("active");
});
button[5].addEventListener('mousedown',function(){
	audio_h.currentTime = 0;
	audio_h.play();
	this.classList.add("active");
});
button[6].addEventListener('mousedown',function(){
	audio_j.currentTime = 0;
	audio_j.play();
	this.classList.add("active");
});
button[7].addEventListener('mousedown',function(){
	audio_k.currentTime = 0;
	audio_k.play();
	this.classList.add("active");
});

document.addEventListener('mouseup',function(){
button[0].classList.remove('active');
button[1].classList.remove('active');
button[2].classList.remove('active');
button[3].classList.remove('active');
button[4].classList.remove('active');
button[5].classList.remove('active');
button[6].classList.remove('active');
button[7].classList.remove('active');
});