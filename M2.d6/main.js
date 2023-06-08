const container = document.getElementById('container');
const descriptions = document.getElementsByClassName('description');
const images = document.getElementsByTagName('img');

/*console.log(document.querySelectorAll('.featured'));*/


console.log('cnt:', container);
console.log('desc:', descriptions);
console.log('images:', images);

for (const currentImage of images) {
    currentImage.style.width = "10em";
    currentImage.style.height = "auto";
}

const titololo = document.getElementById('titolo');
console.log(titololo.innerHTML);

const paragrafi= document.getElementsByClassName('paragrafo')
console.log(paragrafi.innerText);

const heading = document.getElementById('myHeading');
console.log("Heading: ", heading);

function addClass(){
heading.classList.add('red-text');
heading.classList.add('bold-text');
}

function remClass(){
heading.classList.remove('red-text');
heading.classList.remove('bold-text');
}