"use strict"

const vColor = document.querySelector(".color");
const text = document.querySelector(".hexCode");
const btn = document.querySelector("button.btn");

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
};

btn.addEventListener("click", () => {
    let color = randomColor()
    vColor.style.backgroundColor = color
    btn.style.backgroundColor = color
    text.textContent = color
})
