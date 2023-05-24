import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // HAMBURGER FUNCTION
// function navSlide() {
//   const menubtn = document.querySelector(".menubtn");
//   const nav = document.querySelector(".navlinks");
//   const navLinks = document.querySelectorAll(".navlinks li");
  
//   menubtn.addEventListener("click", () => {
//       //Toggle Nav
//       nav.classList.toggle("nav-active");
      
//       //Animate Links
//       navLinks.forEach((link, index) => {
//           if (link.style.animation) {
//               link.style.animation = ""
//           } else {
//               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//           }
//       });
//       //Burger Animation
//       menubtn.classList.toggle("toggle");
//   });
  
// }

// navSlide();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
