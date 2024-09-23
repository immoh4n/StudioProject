// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw_sKW-9_4HK8Z7-jAHC7OfbYXg74DThM",
  authDomain: "infini-gallery.firebaseapp.com",
  projectId: "infini-gallery",
  storageBucket: "infini-gallery.appspot.com",
  messagingSenderId: "308098402389",
  appId: "1:308098402389:web:e2a96e0c8f4fac34b52cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Sign-Up
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed up:', user);
    })
    .catch((error) => {
      console.error('Error during sign-up:', error);
    });
});

// Handle Login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User logged in:', user);
    })
    .catch((error) => {
      console.error('Error during login:', error);
    });
});




const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

