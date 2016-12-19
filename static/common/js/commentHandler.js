var commentHandler = (function()
{
	var commentButton, bodyContent;

	function buttonClicked(button, event)
	{
		var scripts = document.querySelectorAll('script');
		var bodyContent = document.body.innerHTML;

		var parent = button.parentNode.parentNode;
		var div = document.createElement('div');
		div.style.position = 'fixed';
		div.style.top = '0px';
		div.style.left = '0px';
		div.style.width = '100vw';
		div.style.height = '100vh';
		div.style.backgroundColor = 'red';
		div.style.zIndex = '1000';

		var div2 = document.createElement('div');
		div2.style.position = 'fixed';
		div2.style.top = '0px';
		div2.style.left = '0px';
		div2.style.width = '30px';
		div2.style.height = '30px';
		div2.style.zIndex = '2000';
		div2.style.backgroundColor = 'blue';

		document.body.appendChild(div);
		document.body.appendChild(div2);
		parent.setAttribute('id', 'commentClicked');
		parent.style.zIndex = '3000';
		div.addEventListener('click', divClicked.bind(this, parent, div));
	}

	function divClicked(parent, div)
	{
		document.body.innerHTML = bodyContent;
		parent.setAttribute('id', '');
	}

	function init(obj)
	{
		commentButton = document.getElementsByClassName(obj.comment);

		for(var i = 0; i < commentButton.length; i++)
			commentButton[i].addEventListener('click', buttonClicked.bind(this, commentButton[i]));
	}

	return {
		'init' : init,
	};
})();