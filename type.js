let type = new Typed('.typing', {
    strings: [' ','Engineer' , 'Web Designer' , 'Fornt-End Developer' ,'Web Developer' ],
    typeSpeed: 90 ,
    BackSpeed : 600 ,
    loop : true
});
let button = document.querySelector('.home button');
let whats = document.querySelector('.home button a');
button.addEventListener('click' , () => {
    whats.click();
})