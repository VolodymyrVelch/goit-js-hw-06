let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  console.log('клік');
  counterValue -= 1;
  counter.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
  console.log('клік');
  counterValue += 1;
  counter.textContent = counterValue;
});
//     Створи змінну counterValue, в якій буде зберігатися поточне значення
//  лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
