var floatingOptions = (function()
{
	var list, section;
	
	function showPopup()
	{
		section.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function hidePopup(event)
	{
		if(event.target == section)
		{
			section.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	}

	function init(obj)
	{
		list = document.querySelectorAll(obj.li);
		section = document.getElementById(obj.section);

		for(var i = 0; i < list.length; i++)
			list[i].addEventListener('click', showPopup);

		document.body.addEventListener('click', hidePopup);
	}

	return {
		'init' : init,
	};
})();