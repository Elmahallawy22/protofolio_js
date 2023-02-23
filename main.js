let con = document.querySelectorAll('.con-a')
let conI = document.querySelectorAll('.con-i')
conI.forEach((e, index) => {
    e.addEventListener('click', () => {
        con[index].click();
    })
})

let sittings = document.querySelector('.sittings-icon');
let dash = document.querySelector('.sittings-dash');
sittings.onclick = () => sittingsBlock();
function sittingsBlock() {
    dash.style.display = 'block';
    sittings.onclick = () => sittingsNone();
}
function sittingsNone() {
    dash.style.display = 'none';
    sittings.onclick = () => sittingsBlock();
}

let sun = document.querySelector('.dark-light .sun');
sun.addEventListener('click', () => {
    document.body.classList.remove('dark');
    window.localStorage.removeItem('theme');
});

let moon = document.querySelector('.dark-light .moon');
moon.addEventListener('click', () => {
    document.body.classList.add('dark');
    window.localStorage.removeItem('theme');
    window.localStorage.setItem('theme', 'dark')
});

let wrong = document.querySelectorAll('.services .item .false');
let services = document.querySelectorAll('.services .service');

let colors = document.querySelectorAll('.sittings .sittings-dash .colors .color');
colors.forEach((color, index) => {
    color.addEventListener('click', () => {
        colors.forEach((color, index) => {
            document.body.classList.remove(`color-1${index}`);
            window.localStorage.removeItem('color');
        });
        window.localStorage.setItem('color', `color-1${index}`)
        document.body.classList.add(`color-1${index}`);
        if (index === 0 || index === 1 || index === 4) {
            services.forEach((j) => {
                j.onmouseover = () => wrong.forEach((w) => w.style.color = 'black')
                j.onmouseout = () => wrong.forEach((w) => w.style.color = 'red')
            })
        }
    });
});

let mobileNavIcon = document.querySelector('.mobile-navs i');
let mobileNavList = document.querySelector('.mobile-navs .list');
let mobileNavItems = document.querySelectorAll('.mobile-navs .list ul li');

mobileNavIcon.onclick = () => setBlock();
function setBlock() {
    mobileNavList.style.display = 'block';
    listClick()
    mobileNavIcon.onclick = () => setNone();
}
function setNone() {
    mobileNavList.style.display = 'none';
    mobileNavIcon.onclick = () => setBlock()
}
function listClick() {
    mobileNavItems.forEach((e) => {
        e.addEventListener('click', () => e.click())
    })
}

window.addEventListener('load', () => {
    document.body.classList.add(window.localStorage.getItem('theme'));
    document.body.classList.add(window.localStorage.getItem('color'));
});

