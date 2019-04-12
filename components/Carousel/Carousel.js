class Carousel {
  constructor(carousel, image){
  this.content = carousel;
  this.image = image;
  //console.log(this.image)
  this.number = 1; //number counter that keeps track and will match dataset number

  const rightButton = document.querySelector('.right-button');
  const leftButton = document.querySelector('.left-button');
  rightButton.addEventListener('click', this.right.bind(this));
  leftButton.addEventListener('click', this.left.bind(this));
 }
 right(event) {
   this.number ++; //add one to number when right arrow is clicked
  // console.log(this.number)
   const length = this.content.querySelectorAll('img').length; //length equal to number of images in carousel

   if(this.number > length) {
     this.number = 1; // if number is greater than # of images in carousel, go back to one
   } else if (this.number < 1) {
     this.number = length; // if number is less than 1, set number to the length # of carousel images
   }
   console.log(this.number);
   if(this.image.dataset.number ===  `${this.number}`) {; //if the dataset number equals the counter number, display it
     const currentImage = this.image;
     currentImage.classList.toggle('show-img');
  
  } else {
    this.image.classList.remove('show-img'); //if not, hide all other images
  }
 }
 left(event) {
   this.number --; //subtract one from counter when left arrow is clicked
  // console.log(this.number)
   const length = this.content.querySelectorAll('img').length;

   if(this.number > length) { //same as above
     this.number = 1;
   } else if (this.number < 1) {
     this.number = length;
   }
   console.log(this.number);
   if(this.image.dataset.number ===  `${this.number}`) {;
     const currentImage = this.image;
     currentImage.classList.toggle('show-img');
  } else {
    this.image.classList.remove('show-img');
  }
 }
}
//constructor function that creates coursel
const carousel = document.querySelectorAll('.carousel');
carousel.forEach(carousel => {
  const images = carousel.querySelectorAll('img');
   images.forEach(image => {
     new Carousel(carousel, image);
   })
})

// const tabs = document.querySelectorAll('.tabs');
// tabs.forEach(tab => {
//   const links = tab.querySelectorAll('.tabs-link');
//   //console.log('Navigator:', links.length)
//   links.forEach(link => {
//     new TabLink(tab, link);
//   })
// })
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
