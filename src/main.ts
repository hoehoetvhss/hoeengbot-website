import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("MZ Style Hoeengbot Website Loaded! ✨");

  const observerOptions = {
    threshold: 0.1,
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

  for (const btn of document.querySelectorAll(".neo-btn")) {
    btn.addEventListener("mousedown", () => {
      (btn as HTMLElement).style.transform = "translate(0, 0)";
      (btn as HTMLElement).style.boxShadow = "none";
    });

    btn.addEventListener("mouseup", () => {
      (btn as HTMLElement).style.transform = "";
      (btn as HTMLElement).style.boxShadow = "";
    });
  }
});
