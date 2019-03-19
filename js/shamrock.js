//      shamrock button toggle colour background
const button = document.getElementById('bgButton');
const bg = document.getElementById('moving-bg');
button.addEventListener('click', (e) => {
    if (bg.style.display !== 'block' || bg.style.display == 'none') {
        bg.className = 'moving-bg';
        bg.style.display = 'block';
    } else {
        bg.getElementsByClassName = 'moving-bg';
        bg.style.display = "none";
        bg.setAttribute('class', '');
    }
})
// colour bg end