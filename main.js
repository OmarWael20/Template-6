let btnOpenmenu = document.getElementById("open-menu");
let btnClosemenu = document.getElementById("close-menu");
let menu = document.getElementById("menu");

btnOpenmenu.onclick = function(anything) {
  btnOpenmenu.style.display = "none";
  btnClosemenu.style.display = "flex";
  
  menu.style.display = "flex";
}

btnClosemenu.onclick = function(anything) {
  btnClosemenu.style.display = "none";
  btnOpenmenu.style.display = "flex";
  
  menu.style.display = "none";
};

// Dark Mode & Light Mode

let btnLightMode = document.getElementById("light-button");
let btnNightMode = document.getElementById("night-button");

btnLightMode.onclick = function(anything) 
{
  btnLightMode.style.display = "none";
  btnNightMode.style.display = "flex";
  
  document.body.classList.toggle("dark-theme");
};

btnNightMode.onclick = function(anything)
{
  btnNightMode.style.display = "none";
  btnLightMode.style.display = "flex";

  document.body.classList.toggle("dark-theme");
};
