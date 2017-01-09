var imagePopout = (function()
{
	var images, backgroundDiv, wrapperDiv, imageElement;

	function createElements(){
		backgroundDiv = document.createElement('div');
		backgroundDiv.style.position = 'fixed';
		backgroundDiv.style.width = '100vw';
		backgroundDiv.style.height = '100vh';
		backgroundDiv.style.backgroundColor = 'rgba(10, 10, 10, 0.4)';
		backgroundDiv.style.top = '0px';
		backgroundDiv.style.left = '0px';
		backgroundDiv.style.zIndex = '5000';
		backgroundDiv.style.display = 'none';

		wrapperDiv = document.createElement('div');
		wrapperDiv.style.position = 'fixed';
		wrapperDiv.style.width = '40vw';
		wrapperDiv.style.maxHeight = '80vh';
		wrapperDiv.style.overflow = 'auto';
		wrapperDiv.style.top = '10vh';
		wrapperDiv.style.left = '30vw';
		wrapperDiv.style.zIndex = '5001';
		wrapperDiv.style.display = 'none';

		newImage = document.createElement('img');
		newImage.style.width = '100%';
		newImage.style.height = 'auto';
		imageElement = newImage;

		wrapperDiv.appendChild(newImage);
		document.body.appendChild(backgroundDiv);
		document.body.appendChild(wrapperDiv);
		backgroundDiv.addEventListener('click', hideElements);
	}

	function hideElements(event){
		if(event.target == backgroundDiv){
			backgroundDiv.style.display = 'none';
			wrapperDiv.style.display = 'none';
			document.body.style.overflow = 'auto';		
		}
	}

	function displayLightBox(image){
		backgroundDiv.style.display = 'block';
		wrapperDiv.style.display = 'block';
		document.body.style.overflow = 'hidden';
		imageElement.setAttribute('src', image.getAttribute('src'));
	}

	function preventDefaults(element, event)
	{
		if(element.nodeName == 'A')
			event.preventDefault();
	}

	function init(obj)
	{
		images = document.getElementsByClassName(obj.images);
		createElements();
		
		for(var i = 0; i < images.length; i++)
		{
			images[i].style.cursor = 'pointer';
			images[i].addEventListener('click', displayLightBox.bind(this, images[i]));
			images[i].parentNode.addEventListener('click', preventDefaults.bind(this, images[i].parentNode));
		}
	}

	return {
		'init' : init,
	};
})();