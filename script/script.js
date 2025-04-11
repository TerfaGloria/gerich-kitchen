" use strict";


// const closeIcon = document.querySelector(".close-icon");
// const menuIcon = document.querySelector(".menu-icon");
// const sideBar = document.querySelector('.sidebar');
// const overLay=document.querySelector('.overlay')

// menuIcon.addEventListener('click', () => {
//   console.log('Menu icon clicked');
//   sideBar.classList.remove('hidden');
//   overLay.classList.remove('hidden')
//   closeIcon.classList.remove('hidden');
//   menuIcon.classList.add('hidden');
// });

// closeIcon.addEventListener('click', () => {
//   console.log('Close icon clicked');
//   sideBar.classList.add('hidden');
//   overLay.classList.add('hidden')
//   closeIcon.classList.add('hidden');
//   menuIcon.classList.remove('hidden');
// });

// overLay.addEventListener("click",()=>{
//   document.body.classList.add
// })
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector('.sidebar');
const overLay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
  console.log('Menu icon clicked');
  sideBar.classList.remove('hidden');
  // overLay.classList.add('hidden'); 
  closeIcon.classList.remove('hidden');
  menuIcon.classList.add('hidden');
});

closeIcon.addEventListener('click', () => {
  console.log('Close icon clicked');
  sideBar.classList.add('hidden');
  // overLay.classList.remove('hidden'); 
  closeIcon.classList.add('hidden');
  menuIcon.classList.remove('hidden');
});








  
