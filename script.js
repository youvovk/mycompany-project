 function burgerMenuOpen() {
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

let x = document.getElementById('myTopnav');
let menu = document.getElementById('menu');

menu.addEventListener('click', burgerMenuOpen);