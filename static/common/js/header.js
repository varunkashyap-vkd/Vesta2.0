var headerAndNavManager = (function()
{
	var navButton, navBar, search, inputField, requested;

	function resize(){
		if(window.innerWidth > 768)
			navBar.setAttribute('class', 'navigationHidden');
	}

	function toggleNavigationVisibility(event){
		if(event.target == navButton)
			navBar.setAttribute('class', 'navigationShown');

		else
			navBar.setAttribute('class', 'navigationHidden');
	}

	function makeInputVisible(){
		requested = true;
		inputField.setAttribute('class', 'inputShown');
		inputField.focus();
	}

	function makeInputHidden(){
		if(inputField.value.length == 0)
			inputField.setAttribute('class', 'inputHidden');
	}

	function init(obj)
	{
		requested = false;
		navButton = document.querySelector(obj.navButton);
		navBar = document.getElementById(obj.navBar);
		search = document.querySelector(obj.search);
		inputField = document.querySelector(obj.inputField);

		document.addEventListener('click', toggleNavigationVisibility);
		search.addEventListener('click', makeInputVisible);
		inputField.addEventListener('blur', makeInputHidden);
		window.addEventListener('resize', resize);
	}

	return {
		'init' : init,
	};
})();