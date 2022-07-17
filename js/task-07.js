const inputSizeControl = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

inputSizeControl.addEventListener('input', onHandChange);
console.dir(inputSizeControl.nodeName);

function onHandChange(event) {
  spanText.style.fontSize = event.currentTarget.value + 'px';
}

// Напиши скрипт, який реагує на зміну значення input#font - size - control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір
// тексту.

/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */
