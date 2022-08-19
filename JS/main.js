var usuarios = '';
var visitas = 0;

initialize();

function initialize() {
	document.getElementById('receiver-login').addEventListener('click', identificarUsuario);

	if (localStorage.getItem('visitas') !== null) {
		visitas = localStorage.getItem('visitas');
	}


	contador();
	localStorage.setItem('visitas', visitas);

	if (localStorage.getItem('usuarios') !== null) {
		usuarios = localStorage.getItem('usuarios');
		document.getElementById('receiver-login').innerHTML = 'Hola ' + usuarios + ' !';
		document.getElementById('receiver-login').setAttribute('title', 'Numero de visitas ' + visitas);
	}
}
function identificarUsuario(){
	usuarios = prompt('Ingrese su nombre');
	while (usuarios == '') {
		usuarios = prompt('Ingrese su nombre para identificarse, no puede estar vacio');
		if (usuarios === null) {
			return;
		}
	}
	if (usuarios === null) {
		return;
	}
	document.getElementById('receiver-login').innerHTML = 'Hola ' + usuarios + ' !';
	document.getElementById('receiver-login').setAttribute('title', 'Numero de visitas ' + visitas);
	localStorage.setItem('usuarios', usuarios);
}
function contador(){
	visitas++;
}



var swiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 20,
	// init: false,
	loop: true,
	grapCursor: true,
	centeredSlides: true,
	autoplay: {
		delay: 5800,
		disableOnInteraction: false,
	},

	breakpoints: {
		620: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1240: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	}
});
