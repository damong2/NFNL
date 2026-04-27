// ======================
// header scroll
// ======================
let lastScrollTop = 0;
const header = document.querySelector("#header");

if (header) {
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScrollTop = scrollTop;
  });
}

// ======================
// 모바일 메뉴
// ======================
const button = document.querySelector("#mNav button");
const nav = document.querySelector("#mNav nav");

if (button && nav) {
  button.addEventListener("click", () => {
    nav.classList.toggle("dropdown");
  });
}

// ======================
// 모바일 서브메뉴
// ======================
const menu = document.querySelectorAll(".mNav_nav > ul > li");

menu.forEach((menuList) => {
  menuList.addEventListener("click", function () {
    const subMenu = this.querySelector("ul");

    if (!subMenu) return;

    if (subMenu.style.height === "120px") {
      subMenu.style.height = "0px";
    } else {
      subMenu.style.height = "120px";
    }
  });
});

// ======================
// PC 메뉴 hover
// ======================
const navList = document.querySelector("#header .lnb > ul");

if (navList && header) {
  navList.addEventListener("mouseover", function () {
    navList.querySelectorAll(".submenu2").forEach((sub) => {
      sub.style.height = "200px";
    });
    header.classList.add("on");
  });

  navList.addEventListener("mouseout", function () {
    navList.querySelectorAll(".submenu2").forEach((sub) => {
      sub.style.height = "0";
    });
    header.classList.remove("on");
  });
}

// ======================
// GSAP
// ======================
if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
