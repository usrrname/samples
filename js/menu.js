//      shamrock button toggle colour background
const button = document.getElementById('bgButton');
const bg = document.getElementById('moving-bg');
button.addEventListener('click', (e) => {
        if (bg.style.display !== 'block' || bg.style.display == 'none'){
                bg.className = 'moving-bg';
                bg.style.display = 'block';
        }
        else {
        bg.getElementsByClassName = 'moving-bg';
        bg.style.display="none";
        bg.setAttribute('class', '');
        }
})
// colour bg end

// toggle between responsive menu in smaller screens

//global var
const listItems= document.getElementById('menu').children;

const noBootstrap = () => {
        const nav = listItems;
                for (var i = 0; i < nav.length; i++) {
                if (!nav[i].classList.contains('responsive')){           
                        nav[i].className.add = "responsive"
                      nav[i].firstChild.style.display = "block"
                }
                        if (nav[i].className=='responsive'){
                        nav[i].classList.remove('responsive')
                        nav[i].style.display = "none";
        }
        }       
}
const feedBack = document.getElementById('feedback');
feedback.addEventListener('click', (e) =>  {
document.getElementById('email').style.display="block";
})

// slide to menu item
const link_array = [];

const anchors = [];
for (let i = 0; i < listItems.length; i++) { 
        const anchor = listItems[i].firstChild.attributes[0].nodeValue;
        link_array.push(anchor);
        listItems[i].addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor).scrollIntoView({
        behavior: 'smooth',
        block: "start", 
        inline: "nearest"
                });
        });
}