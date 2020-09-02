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
