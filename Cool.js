// Get all anchor tag elements 
const anchors = document.querySelectorAll('a');

// Loop through each anchor tag
anchors.forEach(a => {

  // Remove the href attribute to remove the link  
  a.removeAttribute('href');

  // Remove the inner text 
  a.innerText = '';

});

// Get all images 
const images = document.querySelectorAll('img');

// Remove src attribute from images  
images.forEach(img => img.removeAttribute('src'));


// Get all paragraphs
const paragraphs = document.querySelectorAll('p');

// Remove text from paragraphs
paragraphs.forEach(p => {
  p.innerText = ''; 
});

// Get the body element
const body = document.querySelector('body'); 

// Remove everything inside body
body.innerHTML = '';
