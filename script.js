const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const elemC = document.querySelector("#elem-container");

const fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", () => {
  fixed.style.display = "block";
});
elemC.addEventListener("mouseleave", () => {
  fixed.style.display = "none";
});

const elems = document.querySelectorAll(".elem");
elems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    fixed.style.backgroundImage = `url(${elem.getAttribute("data-image")})`;
  });
  elem.addEventListener("mouseleave", () => {
    // elem.classList.remove("active");
    fixed.style.backgroundImage = "none";
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 80,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
});

const loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 4200);
