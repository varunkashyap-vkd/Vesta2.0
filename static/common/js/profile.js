var profile = (function()
{
	var friends, photos;
	var allFriends;

	function displayFriends(event)
	{
		event.preventDefault();
		allFriendsSection.style.display = 'block';
	}

	function hideFriends(event)
	{
		if(event.target == allFriendsSection)
			allFriendsSection.style.display = 'none';
	}

	function createAllFriends()
	{
		allFriends = document.createElement('section');
		allFriends.setAttribute('id', 'allFriendsSection');
		allFriends.style.display = 'none';

		var innerDiv = document.createElement('div');

		var header = document.createElement('header');
		header.innerHTML = 'Friends';
		innerDiv.appendChild(header);

		var list = document.createElement('ul');

		for(var i = 0; i < 5; i++)
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

	function init(obj)
	{
		friends = document.getElementsByClassName(obj.allFriends);
		for(var i = 0; i < friends.length; i++)
			friends[i].addEventListener('click', displayFriends);

		createAllFriends();
		document.body.appendChild(allFriends);
	}

	return {
		'init' : init,
	};
})();