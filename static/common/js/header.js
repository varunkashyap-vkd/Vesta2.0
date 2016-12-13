var headerAndNavManager = (function()
{
	var navButton, navBar, leftArrow, search, inputField;

	function makeNavigationVisible(){
		navBar.setAttribute('class', 'navigationShown');
	}

	function makeNavigationHidden(){
		navBar.setAttribute('class', 'navigationHidden');
	}

	function makeInputVisible(){
		inputField.setAttribute('class', 'inputShown');
		inputField.focus();
	}

	function makeInputHidden(){
		if(inputField.value.length == 0)
			inputField.setAttribute('class', 'inputHidden');
	}

	function init(obj)
	{
		navButton = document.querySelector(obj.navButton);
		navBar = document.getElementById(obj.navBar);
		leftArrow = document.querySelector(obj.leftArrow);
		search = document.querySelector(obj.search);
		inputField = document.querySelector(obj.inputField);

		navButton.addEventListener('click', makeNavigationVisible);
		leftArrow.addEventListener('click', makeNavigationHidden);
		search.addEventListener('click', makeInputVisible);
		inputField.addEventListener('blur', makeInputHidden);
	}

	return {
		'init' : init,
	};
})();