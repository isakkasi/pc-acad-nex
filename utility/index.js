export const nextUtility = {
  stickyNav() {
    if (typeof window === "undefined") return;
    const header = document.getElementById("header-sticky");
    if (!header) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  },
  scrollAnimation() {
  if (typeof window !== "undefined") {
    const WOW = require("wow.js");
    new WOW().init();
  }
},
};
