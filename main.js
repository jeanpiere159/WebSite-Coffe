const searchBox = document.querySelector(".search-box"); 

document.querySelector("#search-icon").onclick = () => {
  searchBox.classList.toggle("active");
  nabvar.classList.remove("active");
};

const  nabvar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  nabvar.classList.toggle("active");
  searchBox.classList.remove("active");
};

window.onscroll = () => {
  nabvar.classList.remove("active");
  searchBox.classList.remove("active");
}