var postOptions = (function()
{
	var dots, list;

	function displayOptions(currentDots, currentList, event){
		for(var i = 0; i < list.length; i++){
			for(var j = 0; j < list[i].children.length; j++)
				list[i].children[j].style.height = '0px';
			dots[i].style.display = 'block';
		}

		for(var i = 0; i < currentList.children.length; i++)
			currentList.children[i].style.height = '40px';
		currentDots.style.display = 'none';
	}

	function hideOptions(event){
		for(var i = 0; i < dots.length; i++){
			if(event.target == dots[i])
				return;
		}

		for(var i = 0; i < list.length; i++){
			for(var j = 0; j < list[i].children.length; j++)
				list[i].children[j].style.height = '0px';
			dots[i].style.display = 'block';			
		}
	}

	function init(obj)
	{
		dots = document.querySelectorAll(obj.dots);
		list = document.querySelectorAll(obj.list);

		for(var i = 0; i < list.length; i++){
			for(var j = 0; j < list[i].children.length; j++)
				list[i].children[j].style.height = '0px';
			dots[i].addEventListener('click', displayOptions.bind(this, dots[i], list[i]));
		}

		document.body.addEventListener('click', hideOptions);
	}

	return {
		'init' : init,
	};

})();