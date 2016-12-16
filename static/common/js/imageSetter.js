var imageSetter = (function()
{
	var wrapper, vw;

	function resize()
	{
		for(var i = 0; i < wrapper.length; i++)
		{
			var image = wrapper[i].getElementsByTagName('img')[0];

			if(image.getAttribute('src') == '')
				return;

//			console.log(wrapper[i].getBoundingClientRect());
			wrapper[i].style.height = wrapper[i].getBoundingClientRect().width + 'px';
			var imageWidth = image.getBoundingClientRect().width;
			var imageHeight = image.getBoundingClientRect().height;

			if(imageWidth > imageHeight){
				image.style.width = '100%';
				image.style.height = 'auto';
				wrapper[i].style.height = wrapper[i].getBoundingClientRect().width + 'px';
			}

			else{
				image.style.height = '100%';
				image.style.width = 'auto';
			}
		}
	}

	function init(obj)
	{
		wrapper = document.getElementsByClassName(obj.wrapper);
		vw = window.innerWidth/100;

		resize();
		window.addEventListener('resize', resize);
	}

	return {
		'init' : init,
	};
})();