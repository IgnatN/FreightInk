/////////////  circle intersecting 

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show')
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.work-img');
for (let elm of elements) {
    observer.observe(elm);

}
///////  BIG/LIttle  gallety image

(function () {
    document.onclick = function (event) {
        event = event || window.event;
        let target = event.target || event.srcElement,
            active = this.querySelector('.size'),
            elCls;
        while (target != this) {
            elCls = target.className;
            elCls == 'gallery-img' && (target.className += ' size') || elCls == 'gallery-img size' && (target.className = 'gallery-img');
            target = target.parentNode;
        }
        active && (active.className = 'gallery-img');
    }
}());


const linksContainer = document.querySelector('.menu__box');

linksContainer.addEventListener('click', (e) => {
    if (e.target.matches('.menu__item')) {
        e.preventDefault();
        closeSideMenu();
        window.location.href = e.target.href;
    }
});

function closeSideMenu() {
    const sideMenuToggle = document.querySelector('#menu__toggle');
    sideMenuToggle.click();
}

let burgerBtn = document.querySelector('.hamburger-menu');
let menuBox = document.querySelector('.menu__box')
burgerBtn.addEventListener('click', () => {
    menuBox.classList.toggle('active')
})

let barMenu = document.querySelector('.bar-menu');
let logRock = document.querySelector('.logo')
barMenu.addEventListener('click', () => {
    logRock.classList.toggle('logoOff')
})