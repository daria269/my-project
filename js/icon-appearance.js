const icons = document.querySelectorAll('.tour-conditions__icon');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

const appear = function(entries, observer) {
  entries.forEach(entry => {
    icons.forEach(icon => {
      let target = entry.target;
      if (entry.isIntersecting) {
        target.style.opacity = 1;
        observer.unobserve(target);
      }
    });
  })
};

const observer = new IntersectionObserver(appear, options);

icons.forEach(icon => {
  observer.observe(icon);
});
