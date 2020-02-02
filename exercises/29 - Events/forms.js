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
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
  }
  //   event.currentTarget.querySelector('[name="email"'); this is unnecessary if your forms are written properly
  //   console.log(event.currentTarget.name.value);
  //   console.log(event.currentTarget.email.value);
  //   console.log(event.currentTarget.agree.checked);
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// ('keyup');
// ('keydown');
// ('focus');
// ('blur');

// for accessability, don't mix up buttons and links!

// this click event won't work with keyboard shortcuts.
const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked hte photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
