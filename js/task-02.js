const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navEl = document.querySelector('#ingredients');

const ingerdientList = ingredients.map(el => {
  const ingredient = document.createElement('li');
  ingredient.textContent = el;
  return ingredient;
});
navEl.append(...ingerdientList);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
