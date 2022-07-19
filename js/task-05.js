const ref = {
  nameInput: document.querySelector('input'),
  nameOutput: document.querySelector('#name-output'),
};

ref.nameInput.addEventListener('input', event => {
  event.currentTarget.value
    ? (ref.nameOutput.textContent = event.currentTarget.value)
    : (ref.nameOutput.textContent = 'Anonymous');
});

// Напиши скрипт, який під час набору тексту в інпуті input#name - input
//     (подія input), підставляє його поточне значення в span#name - output.
//     Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
