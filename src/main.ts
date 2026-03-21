import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("MZ Style Hoeengbot Website Loaded! ✨");

  // 스크롤 시 요소 나타나기 효과
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // 버튼 클릭 시 통통 튀는 효과
  const buttons = document.querySelectorAll(".neo-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
      (btn as HTMLElement).style.transform = "translate(0, 0)";
      (btn as HTMLElement).style.boxShadow = "none";
    });

    btn.addEventListener("mouseup", () => {
      (btn as HTMLElement).style.transform = "";
      (btn as HTMLElement).style.boxShadow = "";
    });
  });
});
