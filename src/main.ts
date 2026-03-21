import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    }
  }, observerOptions);

  for (const el of document.querySelectorAll(".animate-on-scroll")) {
    observer.observe(el);
  }
});
