var searchResultsDoctor = (function()
{
	var lowerLink, upperLink, internalList, internalList2;
	
	function toggleVisibility(internalList, internalList2, event)
	{
		event.preventDefault();

		if(internalList)
		{
			var displayed = internalList.getAttribute('displayed');

			if(displayed == 'true')
			{
				internalList.setAttribute('displayed', 'false');
				internalList.style.maxHeight = '0px';
				internalList.style.marginTop = '0px';
			}

			else
			{
				internalList.setAttribute('displayed', 'true');
				internalList.style.maxHeight = '700px';
				internalList.style.marginTop = '15px';
			}
		}

		if(internalList2)
		{
			var displayed = internalList2.getAttribute('displayed');

			if(displayed == 'true')
			{
				internalList2.setAttribute('displayed', 'false');
				internalList2.style.maxHeight = '0px';
				internalList2.style.marginTop = '0px';
			}

			else
			{
				internalList2.setAttribute('displayed', 'true');
				internalList2.style.maxHeight = '700px';
				internalList2.style.marginTop = '15px';
			}
		}

	}

	function init(obj)
	{
		lowerLink = document.getElementsByClassName(obj.lowerLink);
		upperLink = document.getElementsByClassName(obj.upperLink);
		internalList = document.querySelectorAll(obj.internalList);
		internalList2 = document.querySelectorAll(obj.internalList2);

		for(var i = 0; i < lowerLink.length; i++)
		{
			lowerLink[i].addEventListener('click', toggleVisibility.bind(this, internalList[i], internalList2[i]));
			upperLink[i].addEventListener('click', toggleVisibility.bind(this, internalList[i], internalList2[i]));
		}
	}

	return {
		'init' : init,
	};
})();