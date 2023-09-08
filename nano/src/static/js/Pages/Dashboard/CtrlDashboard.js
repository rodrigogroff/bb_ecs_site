import MyForm from "./Views/ViewDashboard";

window.addEventListener("resize", (e) => {
  var screenWidth = window.innerWidth;
  var mobileImg = document.getElementById('bg_mobile');
  var desktopImg = document.getElementById('bg_desktop');
  document.getElementById('carouselx-container').style.width = (screenWidth / 2) + "px"
  mobileImg.style.width = screenWidth + "px";
  desktopImg.style.maxWidth = screenWidth;
  if (screenWidth < 1200) {
      mobileImg.style.display = 'block';
      desktopImg.style.display = 'none';
  } else {
      mobileImg.style.display = 'none';
      desktopImg.style.display = 'block';
  }
});

export default class {

  getHtml() {
    return MyForm.getHtml();
  }

  constructor() {
    $(document).ready(function () {

      {
        var mobileImg = document.getElementById('bg_mobile');
        var desktopImg = document.getElementById('bg_desktop');
        var screenWidth = window.innerWidth;
        mobileImg.style.width = screenWidth + "px";
        desktopImg.style.maxWidth = screenWidth;
        if (screenWidth < 1200) {
            mobileImg.style.display = 'block';
            desktopImg.style.display = 'none';
        } else {
            mobileImg.style.display = 'none';
            desktopImg.style.display = 'block';
        }
      }

      let menuIcon = document.querySelector(".navbar__mob__menu-icon");

      // OPEN MENU
      menuIcon.addEventListener("click", () => {

          menuIcon.classList.toggle("open");
          let menu = document.querySelector(".navbar__list");
          menu.classList.toggle("open");
          document.documentElement.classList.toggle("o-hidden");
      });


      const circles = document.querySelectorAll(".bolotas__bolota");
      circles.forEach(circle => {

          window.addEventListener("scroll", () => {

              const topCircle = circle.getBoundingClientRect().top;

              if (topCircle < 800) {
                  circle.classList.add("active");
              } else {
                  circle.classList.remove("active")
              }
          });
      });

      const numbers = document.querySelectorAll(".number");
      numbers.forEach(number => {

          const total = +number.textContent;
          const incremento = Math.floor(total / 30);
          let start = 0;
          const timer = setInterval(() => {
              start = start + incremento;
              number.innerText = start;

              if(start > total) {
                  number.innerText = total;
                  clearInterval(timer);
              }
          }, 32);
      });

    });
  }
}
