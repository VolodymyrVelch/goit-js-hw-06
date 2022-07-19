const input = document.querySelector('input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(dataLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
