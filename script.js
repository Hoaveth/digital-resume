document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const sections = document.querySelectorAll(".fade-section");
  const workSection = document.querySelectorAll(".work");

  workSection.forEach((section) => {
    section.classList.add("fade-in");
  });

  function fadeInOnScroll() {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("fade-in");
      } else {
        section.classList.remove("fade-in");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
});
