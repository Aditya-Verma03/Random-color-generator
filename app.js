const cols = ["green", "red", "rgb(133,122,200)", "#f15025"]
const btn = document.getElementById("btn")
const col = document.querySelector(".color")

btn.addEventListener('click', function(){
    console.log(document.body);
    console.log(randomColor());

    document.body.style.backgroundColor = randomColor();
    col.textContent = randomColor();
});

function randomColor () {
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;
return rgb;
}