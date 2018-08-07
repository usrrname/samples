//      shamrock button toggle colour background
let button = document.getElementById('bgButton');
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
const listItems= document.getElementById('menu').children;
const noBootstrap = () => {
        const nav = listItems;
      console.log(listItems);
                for (var i = 0; i < nav.length; i++) {
                if (nav[i].firstChild.className !== 'responsive') {           
                        nav[i].firstChild.className = "responsive";
                      nav[i].firstChild.style.display = "inline-block";
                }
                else if (nav[i].firstChild.className === 'responsive'){
                        nav[i].firstChild.className = "";
                nav[i].firstChild.style.display = "none";
        }
        }       
}
//  function end

// slide to menu item
var link_array = [];
var anchors = [];
for (var i = 0; i < listItems.length; i++) { 
       var anchor = listItems[i].firstChild.attributes[0].nodeValue;
        link_array.push(anchor);
        listItems[i].addEventListener('click', function (e) {
        console.log(this.firstChild.attributes[0].nodeValue + ' clicked')
        e.preventDefault();
        document.querySelector(this.firstChild.attributes[0].nodeValue).scrollIntoView({
        behavior: 'smooth',
        block: "start", 
        inline: "nearest"
                });
        });
}
// function end