var floatingOptions = (function()
{
	var list, section;
	var header, label, form, data;
	
	function showPopup(kind)
	{
		header.innerHTML = data[kind].header;
		label.innerHTML = data[kind].label;
		form.setAttribute('action', data[kind].action);

		section.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function hidePopup(event)
	{
		if(event.target == section){
			section.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	}

	function init(obj)
	{
		data = obj;
		header = document.getElementById(obj.header);
		label = document.getElementById(obj.label);
		form = document.getElementById(obj.form);
		list = document.querySelectorAll(obj.li);
		section = document.getElementById(obj.section);

		for(var i = 0; i < list.length; i++)
			list[i].addEventListener('click', showPopup.bind(this, list[i].getAttribute('search')));

		document.body.addEventListener('click', hidePopup);
	}

	return {
		'init' : init,
	};
})();