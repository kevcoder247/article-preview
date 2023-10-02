const authorContainer = document.getElementById('author-container');
const shareBtn = document.getElementById('shareBtn');
const avatar = document.querySelector('.avatar');
const authorText = document.querySelector('.author-text');



//click event on the share button
shareBtn.addEventListener('click', (e) => {
  
  //add a class to the author container
  avatar.classList.toggle('hide');
  authorText.classList.toggle('hide');


})