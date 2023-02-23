let bots = document.querySelectorAll('.go');
let botLinks = document.querySelectorAll('.go a');

bots.forEach((e, index) => {
    e.addEventListener("click", () => {
        botLinks.forEach((e, i) => {
            if (i === index) {
                e.click();
            }
        })
    })
})
