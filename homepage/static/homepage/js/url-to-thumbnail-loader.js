var urlToThumbnailLoader = (function()
{
	var postImage, postText, thumbnailSection

	function init(obj)
	{
		postImage = document.getElementsByClassName(obj.postImage);
		postText = document.getElementsByClassName(obj.postText);
		thumbnailSection = document.getElementsByClassName(obj.thumbnailSection);

		console.log(postText);
		console.log(postText);
		console.log(thumbnailSection);
	}

	return {
		'init' : init,
	};
})();