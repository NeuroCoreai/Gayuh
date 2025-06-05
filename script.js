// ==== Script Interaktif untuk PSG FC ====

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formJoin");

  // Submit Form
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Terima kasih telah bergabung dengan komunitas fans PSG FC!");
      form.reset();
    });
  }

  // Smooth scroll untuk anchor
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ==== SLIDER PEMAIN ====
  const slider = document.getElementById("playerSlider");
  const nextBtn = document.querySelector(".slider-btn.next");
  const prevBtn = document.querySelector(".slider-btn.prev");

  let currentIndex = 0;

  function updateSlider() {
    const cardWidth = slider.querySelector(".card").offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < slider.children.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);
  updateSlider(); // agar langsung pas saat load
});