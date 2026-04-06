// Scroll Reveal Observer
const revealItems = document.querySelectorAll(".fade-up, .fade-delay, .fade-delay-2");

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

revealItems.forEach(el => io.observe(el));