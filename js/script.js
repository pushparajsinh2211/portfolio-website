const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Hide / Show Menu

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Mobile Menu
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Skills toggle
const skillsContent = document.getElementById("skills-content"),
  skillsHeader = document.getElementById("skills-header");

let toggleSkill = true;

function toggleSkills() {
  if (toggleSkill) {
    skillsContent.classList.remove("skills_open");
    skillsContent.classList.add("skills_close");
    toggleSkill = false;
  } else {
    skillsContent.classList.remove("skill_close");
    skillsContent.classList.add("skills_open");
    toggleSkill = true;
  }
}

skillsHeader.addEventListener("click", toggleSkills);

// Qualification switching
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

// Portfolio Swiper
let swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active_link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active_link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Header Background Change
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) {
    nav.classList.add("scroll_header");
  } else {
    nav.classList.remove("scroll_header");
  }
}
window.addEventListener("scroll", scrollHeader);

// Scroll Up button
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 500) {
    scrollTop.classList.add("show_scroll");
  } else {
    scrollTop.classList.remove("show_scroll");
  }
}
window.addEventListener("scroll", scrollTop);
