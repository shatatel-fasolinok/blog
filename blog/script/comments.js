let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comments-list');
let authorField = document.querySelector('.author-field');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  commentList.append(newElement(authorField.value, commentField.value));
};

function newElement(authorName, authorText) {
	let newListItem = document.createElement('li');
	newListItem.classList.add('comments-item');

	let newItemImage = document.createElement('img');
	newItemImage.src = 'img/comment-1.png';
	newItemImage.width = '50';
	newItemImage.height = '50';
	newItemImage.alt = authorName;

	let newItemBlockquote = document.createElement('blockquote');
	let newItemCite = document.createElement('cite');
	newItemCite.textContent = authorName;
	let newItemParagraph = document.createElement('p');
	newItemParagraph.textContent = authorText;

	newItemBlockquote.append(newItemCite);
	newItemBlockquote.append(newItemParagraph);
	newListItem.append(newItemImage);
	newListItem.append(newItemBlockquote);

	return newListItem;
};