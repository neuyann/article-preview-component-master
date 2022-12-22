const button = document.querySelector(".divButton");
const social = document.querySelector(".sharedSocial");
const image = document.querySelector(".shareButtonImg");

const showDiv = () =>  {
  if (window.matchMedia("(max-width: 900px)").matches) {
    if((button.className === "divButton") && (image.className === "shareButtonImg")){
    button.className = "divButton2";
    image.className = "shareButtonImg2";
    social.classList.toggle("hidden");
  } else {
    button.className = "divButton";
    image.className = "shareButtonImg";
    social.classList.toggle("hidden");
  } 
 } else {social.classList.toggle("hidden")}
};

button.addEventListener("click", showDiv);

