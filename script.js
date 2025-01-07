window.addEventListener("load", () => {setTimeout(() => document.getElementById("loading-screen").classList.add("hidden"), 1500);});

// Page Transition Effect
window.addEventListener("beforeunload", function () {
  document.body.classList.add("page-transition");
});
