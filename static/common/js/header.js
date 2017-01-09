var headerAndNavManager = (function()
{
	var navButton, navBar;
	var notificationList, notificationsIcon;
	var friendRequestsList, friendRequestsIcon;

	function resize()
	{
		if(window.innerWidth > 768)
			navBar.setAttribute('class', 'navigationHidden');
	}

	function toggleVisibility(event)
	{
		if(event.target == navButton){
			navBar.setAttribute('class', 'navigationShown');
			
			if(notificationList)
				notificationList.style.display = 'none';

			if(friendRequestsList)
				friendRequestsList.style.display = 'none';
		}

		else if(event.target == notificationsIcon){
			notificationList.style.display = 'flex';
			navBar.setAttribute('class', 'navigationHidden');
			friendRequestsList.style.display = 'none';
		}

		else if(event.target == friendRequestsIcon){
			friendRequestsList.style.display = 'flex';
			navBar.setAttribute('class', 'navigationHidden');
			notificationList.style.display = 'none';
		}

		else{ 
			navBar.setAttribute('class', 'navigationHidden');

			if(notificationList)
				notificationList.style.display = 'none';

			if(friendRequestsList)
				friendRequestsList.style.display = 'none';
		}
	}

	function init(obj)
	{
		navButton = document.querySelector(obj.navButton);
		navBar = document.getElementById(obj.navBar);

		friendRequestsList = document.getElementById(obj.friendRequestsList);
		friendRequestsIcon = document.getElementById(obj.friendRequestsIcon);

		notificationList = document.getElementById(obj.notificationList);
		notificationsIcon = document.getElementById(obj.notificationsIcon);

		document.addEventListener('click', toggleVisibility);
		window.addEventListener('resize', resize);
	}

	return {
		'init' : init,
	};
})();