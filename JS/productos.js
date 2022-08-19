console.log(document.getElementsByClassName('cuotas-medios-container'));
document.getElementsByClassName('cuotas-medios-container').forEach(function(i) {
	i.addEventListener('hover', function(){
		i.childNodes.forEach(function(j) {
			if (j.className == 'bx bx-credit-card') {
				j.style.color = 'green'; alert('hola');
			}
		});
	});
})


document.getElementById('cuotas-medios-container').addEveios-containerntListener('hover', identificarUsuario);