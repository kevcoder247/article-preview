const authorContainer = document.getElementById('author-container');
const shareBtn = document.getElementById('shareBtn');
const avatar = document.querySelector('.avatar');
const authorText = document.querySelector('.author-text');

//create a flag to keep track of whether shareText has been added to the author container
let shareTextAdded = false;

//Define flag to keep track of if the share section is toggled
let isToggled = false;

//Function to toggle the UI elements
function toggleUI(){
  //Toggle the state
  isToggled = !isToggled;

  //Toggle hides avatar and text based on the toggle state
  avatar.classList.toggle('hide', isToggled);
  authorText.classList.toggle('hide', isToggled);

  //Check to see if toggle state is true(share text is visible)
  if(isToggled){
    //create a new element that will hold the share text
    const shareText = document.createElement('h4');
    shareText.textContent = 'SHARE'

    //Append the newly created element to the author container
    authorContainer.appendChild(shareText);
  }else{
    //Remove the shareText element if it exists
    const shareText = authorContainer.querySelector('h4');
    if(shareBtn){
      authorContainer.removeChild(shareText);
    }
  }
}


//click event on the share button
shareBtn.addEventListener('click', (e) => {
  
  if(!shareTextAdded){
  toggleUI();
  }
})