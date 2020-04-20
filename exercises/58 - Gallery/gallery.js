function Gallery(gallery) {
  if (!gallery) {
    throw new Error('no gallery found, oops 😬');
  }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevBtn = modal.querySelector('.prev');
  const nextBtn = modal.querySelector('.next');
  let currentImage;

  function openModal() {
    console.info('opening modal...');
    // check if modal is already open
    if (modal.matches('.open')) {
      console.info('modal already open');
      return; // stop the functino from running
    }
    modal.classList.add('open');

    // event listeners to be bound when we open the modal
    window.addEventListener('keyup', handleKeyUp);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    // ToDo: add event listeners for clicks and keyboard
    window.removeEventListener('keyup', handleKeyUp);
    nextBtn.removeEventListener('click', showNextImage);
    prevBtn.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    // show the next image, or wrap around to the beginning and show the first image :)
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.log('no image to return');
      return;
    }
    // update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').src = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // these are our event listeners
  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget))
  );
  // loop over each image
  images.forEach(image => {
    // attach event listener to each image
    image.addEventListener('keyup', e => {
      // when that was keyup'd, check if that was enter
      if (e.key === 'Enter') {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    });
  });
  modal.addEventListener('click', handleClickOutside);
}

// use the above code on the page, for two seperate galleries
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
