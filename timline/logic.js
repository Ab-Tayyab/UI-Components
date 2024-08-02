
  document.addEventListener('DOMContentLoaded', function() {
    function checkVisibility() {
      const containers = document.querySelectorAll('.container');
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top + scrollTop;
        const containerHeight = container.offsetHeight;

        if (scrollTop + windowHeight > containerTop + containerHeight / 2) {
          container.classList.add('visible');
        } else {
          container.classList.remove('visible');
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility); // Ensure it runs on initial load
  });