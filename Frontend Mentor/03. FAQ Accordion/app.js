let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let answer = document.querySelectorAll(".answer");

for(let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        minus[i].classList.toggle("hidden");
        plus[i].classList.toggle("hidden");
        answer[i].classList.toggle("hidden");
    });
}

for(let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        minus[i].classList.toggle("hidden");
        plus[i].classList.toggle("hidden");
        answer[i].classList.toggle("hidden");
    });
}