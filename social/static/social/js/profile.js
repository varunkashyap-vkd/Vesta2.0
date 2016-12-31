var profile = (function()
{
	var friends, photos, profile, cover;
	var allFriends, allPhotos, formSection;

	function displayPhotos(event){
		if(event)
			event.preventDefault();
		document.body.style.overflow = 'hidden';
		allPhotos.style.display = 'block';		
	}

	function hidePhotos(event){
		if(event.target == allPhotos){
			allPhotos.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	}

	function createAllPhotos()
	{
		allPhotos = document.createElement('section');
		allPhotos.setAttribute('id', 'allPhotosSection');
		allPhotos.style.display = 'none';

		var innerDiv = document.createElement('div');
		var header = document.createElement('header');
		header.innerHTML = 'Photos';
		innerDiv.appendChild(header);

		var list = document.createElement('ul');

		for(var i = 0; i < 100; i++)
		{
			var item = document.createElement('li');

			var anchor = document.createElement('a');
			anchor.setAttribute('href', '/static/common/images/testimage.jpg');
			anchor.setAttribute('target', 'new');

			var wrapperDiv = document.createElement('div');

			var image = document.createElement('img');
			image.src = '/static/common/images/testimage.jpg';	//to be provided by database

			wrapperDiv.appendChild(image);
			anchor.appendChild(wrapperDiv);
			item.appendChild(anchor);
			list.appendChild(item);
		}
		innerDiv.appendChild(list);
		allPhotos.appendChild(innerDiv);
		allPhotos.addEventListener('click', hidePhotos);
	}


	function displayFriends(event){
		if(event)
			event.preventDefault();
		document.body.style.overflow = 'hidden';
		allFriends.style.display = 'block';
	}

	function hideFriends(event){
		if(event.target == allFriends)
		{
			allFriends.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	}

	function createAllFriends(){
		allFriends = document.createElement('section');
		allFriends.setAttribute('id', 'allFriendsSection');
		allFriends.style.display = 'none';

		var innerDiv = document.createElement('div');
		var header = document.createElement('header');
		header.innerHTML = 'Friends';
		innerDiv.appendChild(header);

		var list = document.createElement('ul');

		for(var i = 0; i < 100; i++)
		{
			var item = document.createElement('li');

			var image = document.createElement('img');
			image.src = '/static/common/images/user.jpg';	//to be provided by database
			var name = document.createElement('span');
			name.innerHTML = 'Varun Kashyap';				//to be provided by database
			item.appendChild(image);
			item.appendChild(name);
			list.appendChild(item);
		}
		innerDiv.appendChild(list);
		allFriends.appendChild(innerDiv);
		allFriends.addEventListener('click', hideFriends);
	}

	function displayForm()
	{
		formSection.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function hideForm()
	{
		if(event.target == formSection)
		{
			formSection.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	}

	function init(obj)
	{
		profile = document.getElementById(obj.changeProfile);
		cover = document.getElementById(obj.changeCover);
		formSection = document.getElementById(obj.formSection);
	
		profile.addEventListener('click', displayForm);
		cover.addEventListener('click', displayForm);

		friends = document.getElementsByClassName(obj.allFriends);
		for(var i = 0; i < friends.length; i++)
			friends[i].addEventListener('click', displayFriends);

		photos = document.getElementsByClassName(obj.allPhotos);
		for(var i = 0; i < photos.length; i++)
			photos[i].addEventListener('click', displayPhotos);

		createAllFriends();
		createAllPhotos();
		document.body.appendChild(allFriends);
		document.body.appendChild(allPhotos);
		formSection.addEventListener('click', hideForm);
	}

	return {
		'init' : init,
	};
})();