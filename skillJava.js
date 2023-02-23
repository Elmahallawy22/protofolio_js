window.addEventListener('load' , () => {
    let skills = document.querySelectorAll('.pars span');
    skills.forEach( skill => {
        skill.style.width = skill.dataset.progress;
    })
});
// calculate my age ........
let date = new Date();
let birthDay = new Date("2000-11-11")
let age = (date - birthDay) / 1000 / 365 / 24 / 60 / 60  ;
let ageP = document.querySelector('.age');
let ageT = document.createTextNode(`${Math.ceil(age)}`);
ageP.append(ageT);
// degree .......
let graduationYear = new Date("7/1/2023")
let eduP = document.querySelector('.edu');
let ed ;
(date > graduationYear) ? ed = 'Bachelor Degree' : ed ='High degree';
let eduT = document.createTextNode(`${ed}`);
eduP.append(eduT);