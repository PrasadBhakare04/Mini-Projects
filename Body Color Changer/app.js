function makeRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
const btn = document.querySelector('button');
const text = document.querySelector('h1');
btn.addEventListener('click', function () {
    const col = makeRandColor();
    document.body.style.backgroundColor = col;
    text.innerText = col
})

