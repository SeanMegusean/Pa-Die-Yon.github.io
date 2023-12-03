const pathName = window.location.pathname;
const pageName = pathName.split ("/").pop();

if(pageName === "about.html"){
  document.querySelector (".home").classList.add ("activeLink");
}