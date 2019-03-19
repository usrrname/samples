// toggle between responsive menu in smaller screens

//global var
const listItems = document.getElementById('menu').children;

const noBootstrap = () => {
        const nav = listItems;
        for (var i = 0; i < nav.length; i++) {
                if (!nav[i].classList.contains('responsive')) {
                        nav[i].className.add = "responsive"
                        nav[i].firstChild.style.display = "block"
                }
                if (nav[i].className == 'responsive') {
                        nav[i].classList.remove('responsive')
                        nav[i].style.display = "none";
                }
        }
}
const feedBack = document.getElementById('feedback');
feedback.addEventListener('click', (e) => {
        document.getElementById('email').style.display = "block";
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