const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        setTimeout(() => {
          entry.target.classList.add("dot");
        }, 600);
      } else {
        entry.target.classList.remove("active");
        entry.target.classList.remove("dot");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

items.forEach((item) => observer.observe(item));
