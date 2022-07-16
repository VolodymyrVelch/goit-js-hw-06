const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navEl = document.querySelector('#ingredients');

ingredients.forEach(el => {
  const ingerdientList = document.createElement('li');
  ingerdientList.textContent = el;
  navEl.appendChild(ingerdientList);
});
console.log(navEl);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
