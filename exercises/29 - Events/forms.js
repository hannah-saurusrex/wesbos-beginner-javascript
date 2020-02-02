const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  //   event.preventDefault();
  const shouldChangePage = confirm(
    'this website might be malicious, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    // window.location = event.currentTarget.href;
    event.preventDefault(); // handy for when you want to stop the default thing from happening
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  //   event.currentTarget.querySelector('[name="email"'); this is unnecessary if your forms are written properly
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked);
});
