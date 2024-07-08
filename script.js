setCookie = (cName, cValue, expDays) => {
  const date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

  const expire = `expires= ${date.toUTCString()}`;

  document.cookie = `${cName} = ${cValue}; ${expire}; path=/`;
};

getCookie = (cName) => {
  const name = `${cName}=`;
  const cDecoded = decodeURIComponent(document.cookie);

  const cArr = cDecoded.split(`; `);
  let value;

  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) {
      value = val.substring(name.length);
    }
  });

  return value;
};

document.getElementById("cookies-btn").addEventListener("click", () => {
  document.getElementById("cookies").style.display = "none";
  setCookie("cookie", true, 20);
});

window.addEventListener(
  "load",
  (cookieMessage = () => {
    if (!getCookie("cookie")) {
      document.getElementById("cookies").style.display = "block";
    }
  })
);
