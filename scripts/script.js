const hamburger = document.querySelector(".header__hamburger");
const navigation = document.querySelector(".header__navigation");

let mobileMenuOpen = false;

function openMobileMenu() {
  navigation.style.display = "flex";
  mobileMenuOpen = true;
  gsap.fromTo(
    navigation,
    {
      transform: "scale(0.7)",
      opacity: 0,
    },
    { opacity: 1, ease: "back.out(4)", duration: 0.3, transform: "scale(1)" }
  );
}

function closeMobileMenu() {
  gsap.to(navigation, { duration: 0.3, opacity: 0 }).then(() => {
    navigation.style.display = "none";
    mobileMenuOpen = false;
  });
}

function toggleMobileMenu() {
  if (!mobileMenuOpen) openMobileMenu();
  else closeMobileMenu();
}

document.addEventListener("click", (event) => {
  if (event.target === hamburger) toggleMobileMenu();
  else if (
    !event.target.closest(".header__navigation") &&
    window.innerWidth < 1000
  ) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000) {
    navigation.style.display = "flex";
    navigation.style.opacity = "1";
  } else navigation.style.display = "none";
  mobileMenuOpen = false;
});
