	
	/*Кнопка меню*/



function f1(){
	var display = document.getElementById('menu').style.display;

	if(display == 'none'){
		document.getElementById('menu').style.display = 'flex';

		/*декор и анимации*/
		document.getElementById('hamburger').style.border = 3+'px'+' solid'+' #FCB324';
	}
	else{
		document.getElementById('menu').style.display = 'none';

		/*декор и анимации*/
		document.getElementById('hamburger').style.border = 3+'px'+' solid'+' white';
		document.getElementById('hamburger').style.border = 3+'px'+' solid'+' white';
	}


}

