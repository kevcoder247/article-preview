const authorContainer = document.getElementById('author-container');
const authorList = document.querySelector('.author-list');
const shareBtn = document.getElementById('shareBtn');
const avatar = document.querySelector('.avatar');
const authorText = document.querySelector('.author-text');

//Store the original class of author container before adding 'adjust-author-container'
const originalAuthorContainerClass = authorContainer.className;

//store original state of the share btn
const originalShareBtnState = shareBtn.className;

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
    if(!shareTextAdded){
      //create a new element that will hold the share text
      const shareText = document.createElement('li');
      shareText.textContent = `share`
      shareText.classList.add('shareText', 'item');
      
      //Append the newly created element to the author list
      authorList.prepend(shareText);



      //create new element that holds social media links
      const socialLinks = document.createElement('ul');
      socialLinks.classList.add('social-links');

      //Define an array of image filenames
      const imageFilenames = ['icon-facebook.svg', 'icon-twitter.svg', 'icon-pinterest.svg'];

      //specify the path to the images folder
      const imagesFolderPath = 'images/';

      //loop though the image filenames and create img elements for each
      imageFilenames.forEach(iconFileName => {
        //create an img element for the social media image
        const socialMediaImage = document.createElement('img');

        //set the src attribute to the path of the image in the images folder
        socialMediaImage.src = `${imagesFolderPath}${iconFileName}`;

        //append the image element to the social links
        socialLinks.appendChild(socialMediaImage);
      })


      //insert the social links element after the share text element
      authorList.insertBefore(socialLinks, shareText.nextSibling);

      
      //Update the flag to indicate that sharedText has been added
      sharedTextAdded = true;


      //set a new class for the author-list
      authorContainer.classList.add('adjust-author-container');

      //add a class to the share button which will allow us to add styles based on its state
      shareBtn.classList.add('share-state-btn')

    }
    }else{
    //Remove the shareText element if it exists
    const shareText = authorContainer.querySelector('li');
    if(shareBtn){
      authorList.removeChild(shareText);

      //Remove social links element if it exits
      const socialLinks = authorContainer.querySelector('.social-links');
      if(socialLinks){
        authorList.removeChild(socialLinks);
      }

      //Update the flag to indicate to false if shared text is added
      sharedTextAdded = false;

      //Resotore the original class of author container
      authorContainer.className = originalAuthorContainerClass;

      //Restore the original state of share btn when clicked again
      shareBtn.className = originalShareBtnState;

    }
  }
}


//click event on the share button
shareBtn.addEventListener('click', (e) => {
  
  if(!shareTextAdded){
  toggleUI();
  }
})