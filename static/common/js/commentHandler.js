var commentHandler = (function()
{
	var button, addComment, commentList;
	var commentListShown, commentListHidden;
	var addCommentShown, addCommentHidden;
	var addCommentClass;

	function commentButtonClicked(button, addComment, commentList, event)
	{
		event.preventDefault();
		addComment.getElementsByTagName('input')[0].focus();
		var current = button.getAttribute('open');

		if(current == 0)
		{
			addComment.setAttribute('class', addCommentClass + ' ' + addCommentShown);
			commentList.setAttribute('class', commentListShown);
			button.setAttribute('open', '1');
		}

		else
		{
			addComment.setAttribute('class', addCommentClass + ' ' + addCommentHidden);
			commentList.setAttribute('class', commentListHidden);
			button.setAttribute('open', '0');
		}
	}

	function init(obj)
	{
		addCommentClass = 'addComment';
		addCommentShown = 'addCommentShown';
		addCommentHidden = 'addCommentHidden';
		commentListHidden = 'commentListHidden';
		commentListShown = 'commentListShown';

		button = document.querySelectorAll(obj.commentButton);
		addComment = document.getElementsByClassName(obj.addCommentDiv);
		commentList = document.getElementsByClassName(obj.commentList);

		for(var i = 0; i < button.length; i++)
		{
			button[i].addEventListener('click', commentButtonClicked.bind(this, button[i], addComment[i], commentList[i]));
		}
	}

	return {
		'init' : init,
	};
})();