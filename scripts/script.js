const hamburger = document.querySelector(".header__hamburger");
const navigation = document.querySelector(".header__navigation");

let mobileMenuOpen = false;

function toggleMobileMenu() {
  if (!mobileMenuOpen) {
    navigation.style.display = "flex";
    mobileMenuOpen = true;
  } else closeMobileMenu();
}

function closeMobileMenu() {
  navigation.style.display = "none";
  mobileMenuOpen = false;
}

document.addEventListener("click", (event) => {
  if (event.target === hamburger) toggleMobileMenu();
  else if (!event.target.closest(".header__navigation")) {
    closeMobileMenu();
  }
});
