const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    const picture = 'images/pic' + i + '.jpg';
    newImage.setAttribute('src', picture);
    thumbBar.appendChild(newImage);
    
/* When clicked, changes displayed image to thumbnail image */
    newImage.onclick = function refresh(pict) {
        displayedImage.src = pict.target.src;
    }

} 

/* Wiring up the Darken/Lighten button  */
btn.onclick = function() {
    let atr = btn.getAttribute('class');
    if (atr === "dark") {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; /* Adds darken effect to full-size image*/
        btn.setAttribute('class', 'light');
        btn.innerText = "Lighten";
    }
    else if (atr === "light") {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'; /* Adds transparent overlay to full-size image*/
        btn.setAttribute('class', 'dark');
        btn.innerText = "Darken";
    }
}


