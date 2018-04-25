// Cookie
document.querySelector("#cookie__close").addEventListener(
  "click",
  function() {
    document.querySelector("#cookie__wrap").style.display = "none";
    localStorage.setItem("cookie", true);
  },
  false
);

// Check for cookie
const getCookie = localStorage.getItem("cookie");
if (!getCookie) {
  document.querySelector("#cookie__wrap").classList.add("active");
}
