const images = document.querySelectorAll(`.lazy_img`);

let options = {
  root: null,
  rootMargin: `0px`,
  threshold: 1
};

const appear = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove(`lazy_img`);
      observer.unobserve(lazyImage);
    }
  });
};

const observer = new IntersectionObserver(appear, options);

images.forEach((image) => {
  observer.observe(image);
});


/// Icon disappearance

function isVisible(element) {
  let coords = element.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom > 0 && coords.bottom < windowHeight ;

  return topVisible || bottomVisible;
}

window.addEventListener('scroll', () => {
  images.forEach((image) => {
    if (!isVisible(image)) {
      image.style.opacity = 0;
    } else {
      image.style.opacity = 1;
    }
  })
});
