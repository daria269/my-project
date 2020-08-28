const icons = document.querySelectorAll('.tour-conditions__icon');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

const appear = function(entries, observer) {
  entries.forEach(entry => {
    icons.forEach(icon => {
      if (entry.isIntersecting) {
        icon.style.opacity = 1;
      }
    });
  })
};

const observer = new IntersectionObserver(appear, options);

// я не понимаю, как применить метод ко всем элементам массива по порядку, и можно ли это вообще

observer.observe(icons[0]);
