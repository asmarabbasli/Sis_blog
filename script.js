const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const toLogin = document.getElementById("to-login");
const toSignup = document.getElementById("to-signup");
const formTitle = document.getElementById("form-title");
const authSection = document.getElementById("auth-section");
const portfolio = document.getElementById("portfolio");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Switch between login/signup
toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
  formTitle.textContent = "Welcome Back";
});

toSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
  formTitle.textContent = "Get Started Now";
});

// Simulate login/signup transition
function openPortfolio() {
  authSection.style.display = "none";
  portfolio.classList.remove("hidden");
  window.scrollTo(0, 0);
}

loginBtn.addEventListener("click", openPortfolio);
signupBtn.addEventListener("click", openPortfolio);

// Logout
logoutBtn.addEventListener("click", () => {
  portfolio.classList.add("hidden");
  authSection.style.display = "flex";
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  formTitle.textContent = "Get Started Now";
});

// Mobile menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
