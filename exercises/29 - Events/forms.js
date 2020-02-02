const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  event.preventDefault();
  const shouldChangePage = confirm(
    'this website might be malicious, do you wish to proceed?'
  );
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }
});
