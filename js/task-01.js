const navCategories = document.querySelectorAll('.item');
console.log('Number of categories:', navCategories.length);

const navCategoryName = document.querySelectorAll('h2');
const navCategoryItem = document.querySelectorAll('.item ul');

const navCategoryElement = navCategories.forEach((el, index) => {
  console.log('Category:', navCategoryName[index].textContent),
    console.log('Elements:', navCategoryItem[index].children.length);
});

// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто
// елементів li.item.Для кожного элемента li.item у спику ul#categories,
//     знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
//      кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
