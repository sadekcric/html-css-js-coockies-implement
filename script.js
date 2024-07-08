document.getElementById("cookies-btn").addEventListener("click", () => {
  document.getElementById("cookies").style.display = "none";
  setCookie("cookie", true, 30);
});

setCookie = (cName, cValue, cExp) => {};
