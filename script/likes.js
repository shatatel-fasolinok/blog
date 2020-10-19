let likesButton = document.querySelector('.likes-button');
let likesNumber = document.querySelector('.likes-number');
let counter = likesNumber.textContent;

likesButton.onclick = function () {
  if (likesButton.classList.contains('added')) {
    counter--;
  } else {
    counter++;  
  }
  
  likesNumber.textContent = counter;
  likesButton.classList.toggle('added');
};
