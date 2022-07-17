const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
});

// --------------------------------------------
// alternative decision
// --------------------------------------------

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach(data => {
//     if (data === '') {
//       return alert('Please fill in all the fields!');
//     }
//     console.log(data);
//   });
//   event.currentTarget.reset();
// }
