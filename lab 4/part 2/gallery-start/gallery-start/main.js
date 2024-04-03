const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alter = ["eye close up", "weird wave picture",  "flowers", "Egyptian gods", "butterfly"];
/* Looping through images */
for (let i = 0; i < images.length; i++)
{
const newImage = document.createElement('img');
newImage.setAttribute('src', images[i]);
newImage.setAttribute('alt', alter[i]);
thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
