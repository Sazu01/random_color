"use strict"

const vColor = document.querySelector(".color");
const text = document.querySelector(".hexCode");
const btn = document.querySelector("button.btn");

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    
    function rgbToHex(r, g, b) {
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }
    return rgbToHex(r, g, b);
};

btn.addEventListener("click", () => {
    let color = randomColor()
    vColor.style.backgroundColor = color
    btn.style.backgroundColor = color
    text.textContent = color
})
