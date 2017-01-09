var urlToThumbnailLoader = (function()
{
	var postImage, postText, thumbnailSection

	function sendRequests()
	{
		for(var i = 0; i < postText.length; i++)
		{
			$.ajax({
				indexValue: i,
				url : '/thumbnail',
				method : 'POST',
				data: {'text' : postText[i].innerHTML},
				dataType: "json",
				success: function(data){ 				
					updateAccordingly(data, this.indexValue); 
				},
			});
		}
	}

	function updateAccordingly(data, i)
	{
		console.log(data);
		if(postImage[i].getAttribute('src') != '')
		{
			postImage[i].parentNode.style.display = 'block';
			thumbnailSection[i].parentNode.style.display = 'none';			
		}

		else
		{
			if(data.match == 'false')
			{
				thumbnailSection[i].parentNode.style.display = 'none';			
				postImage[i].parentNode.style.display = 'none';
			}

			else
			{
				postImage[i].parentNode.style.display = 'none';
				thumbnailSection[i].parentNode.style.display = 'inline';

				thumbnailSection[i].children[0].children[0].children[0].setAttribute('src', data.data.image);
				thumbnailSection[i].children[0].children[1].innerHTML = data.data.title;
				thumbnailSection[i].children[0].children[2].innerHTML = data.data.description;
				thumbnailSection[i].parentNode.setAttribute('href', data.data.url);
			}
		}
	}

	function init(obj)
	{
		postImage = document.getElementsByClassName(obj.postImage);
		postText = document.getElementsByClassName(obj.postText);
		thumbnailSection = document.getElementsByClassName(obj.thumbnailSection);
		sendRequests();
	}

	return {
		'init' : init,
	};
})();