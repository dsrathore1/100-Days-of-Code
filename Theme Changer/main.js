let exploreBtn = document.querySelector(".explore-btn");
let exploreBtn2 = document.querySelector(".explore-btn2");
let textColor = document.getElementById("TextColor");
let textColor2 = document.getElementById("TextColor2");

// Color buttons
let greenBtn = document.getElementById("greenColor").addEventListener("click", () => {
    textColor.style.color = "#26f587";
    exploreBtn.style.background = "#26f587";

    textColor2.style.color = "#26f587";
    exploreBtn2.style.background = "#26f587";

    document.getElementById("navBar").style.backgroundColor = "#26f587";


    document.querySelector(".svg").src = "./assets/blooming/blooming-green.svg";

    document.querySelector(".svg2").src = "./assets/Multitasking/multitasking-green.svg";
});

let orangeBtn = document.getElementById("orangeColor").addEventListener("click", () => {
    textColor.style.color = "#ffc964";
    exploreBtn.style.background = "#ffc964";

    textColor2.style.color = "#ffc964";
    exploreBtn2.style.background = "#ffc964";

    document.getElementById("navBar").style.backgroundColor = "#ffc964";


    document.querySelector(".svg").src = "./assets/blooming/blooming-yellow.svg";

    document.querySelector(".svg2").src = "./assets/Multitasking/multitasking-yellow.svg";

});

let purpleBtn = document.getElementById("purpleColor").addEventListener("click", () => {
    textColor.style.color = "#b532b5";
    exploreBtn.style.background = "#b532b5";

    textColor2.style.color = "#b532b5";
    exploreBtn2.style.background = "#b532b5";

    document.getElementById("navBar").style.backgroundColor = "#b532b5";


    document.querySelector(".svg").src = "./assets/blooming/blooming-purple.svg";

    document.querySelector(".svg2").src = "./assets/Multitasking/multitasking-purple.svg";
});

let redBtn = document.getElementById("redColor").addEventListener("click", () => {
    textColor.style.color = "#d50303";
    exploreBtn.style.background = "#d50303";

    textColor2.style.color = "#d50303";
    exploreBtn2.style.background = "#d50303";

    document.getElementById("navBar").style.backgroundColor = "#d50303";


    document.querySelector(".svg").src = "./assets/blooming/blooming-red.svg";

    document.querySelector(".svg2").src = "./assets/Multitasking/multitasking-red.svg";

});


// Switching between color theme

let colorBtnToggle = document.getElementById("colorBtn");
let switcherIcon = document.getElementById("switcherIcon");

switcherIcon.addEventListener("click", () => {
    colorBtnToggle.classList.toggle("open");
    setTimeout(() => {
        colorBtnToggle.classList.remove("open")
    }, 1500);
}); //Function

// Switch between dark/light mode
let modeBtn = document.getElementById("modeBtn");
let body = document.querySelector(".body");

modeBtn.addEventListener("click", () => {
    body.classList.toggle("darkMode");
}); // Function




