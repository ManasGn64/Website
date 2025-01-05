window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => loadingScreen.classList.add("hidden"), 1000);
  setTimeout(() => loadingScreen.remove(), 1500); // Completely remove the element
});
