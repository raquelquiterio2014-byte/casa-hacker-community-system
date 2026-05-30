console.log("Casa Hacker Community System iniciado!");

const links = document.querySelectorAll("nav ul li a");
const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

links.forEach((link) => {
  if (link.getAttribute("href") === paginaAtual) {
    link.style.color = "#ffffff";
    link.style.borderBottom = "1px solid #008000";
    link.style.borderRadius = "0";
    link.style.paddingBottom = "6px";
  }
});