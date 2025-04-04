" use strict";


const closeIcon=document.querySelector(".close-icon")
const menuIcon=document.querySelector(".menu-icon")
const homePage=document.querySelector('.home-page')
const body=document.querySelector("body")


// Add event listeners to the menu icon and close icon
menuIcon.addEventListener('click', () => {
    // Show the ul element
    homePage.classList.remove('hidden');
    body.classList.add("blur");
    // Show the close icon
    closeIcon.classList.remove('hidden');
    // Hide the menu icon
    menuIcon.classList.add('hidden');
  });
  
  closeIcon.addEventListener('click', () => {
    // Hide the ul element
    homePage.classList.add('hidden');
    body.classList.remove('blur');
    // Hide the close icon
    closeIcon.classList.add('hidden');
    // Show the menu icon
    menuIcon.classList.remove('hidden');
  });
  
  