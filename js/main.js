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
function pianino (code,btn,audio) {
	document.addEventListener('keydown', function(event){
		if (event.keyCode == code) {
			audio.currentTime = 0;
			audio.play();
 			btn.classList.add('active');
		} 

	});
	document.addEventListener('keyup', function(event){
		btn.classList.remove('active');
	})
}
pianino(65,button[0],audio_a);
pianino(83,button[1],audio_s);
pianino(68,button[2],audio_d);
pianino(70,button[3],audio_f);
pianino(71,button[4],audio_g);
pianino(72,button[5],audio_h);
pianino(74,button[6],audio_j);
pianino(75,button[7],audio_k);



//Mouse down/up
function mouse(btn,audio) {
	btn.addEventListener('mousedown', function(){
		audio.currentTime = 0;
		audio.play();
		this.classList.add("active");
	});
	btn.addEventListener('mouseup', function(){
		this.classList.remove("active");
	});
}
mouse(button[0],audio_a);
mouse(button[1],audio_s);
mouse(button[2],audio_d);
mouse(button[3],audio_f);
mouse(button[4],audio_g);
mouse(button[5],audio_h);
mouse(button[6],audio_j);
mouse(button[7],audio_k);
