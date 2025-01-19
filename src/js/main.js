import "./_components.js";
import { burger } from "./functions/burger.js";
const cursor = document.getElementById("customCursor");

document.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.pageX - cursor.clientWidth / 2}px`;
  cursor.style.top = `${event.pageY - cursor.clientWidth / 2}px`;
});

document.querySelectorAll(".hover-effect").forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    cursor.classList.add("hover");
  });
  link.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("hover");
  });
});

const moreBtn = document.querySelector(".more-btn");
const items = document.querySelector(".more-content")?.children;

if (moreBtn) {
  const INITIAL_VISIBLE = 6;
  const STEP = 6;

  let visibleCount = INITIAL_VISIBLE;

  function updateVisibility() {
    [...items].forEach((item, index) => {
      if (index < visibleCount) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    if (visibleCount >= items.length) {
      moreBtn.style.display = "none";
    }
  }

  updateVisibility();

  moreBtn.addEventListener("click", () => {
    visibleCount += STEP;
    updateVisibility();
  });
}
