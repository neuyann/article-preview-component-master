const button = document.querySelector(".divButton");
const social = document.querySelector(".sharedSocial");
const image = document.querySelector(".shareButtonImg");

const showDiv = () =>  {
  social.classList.toggle("hidden");
  if((button.className === "divButton") && (image.className === "shareButtonImg")){
    button.className = "divButton2";
    image.className = "shareButtonImg2";
  } else {
    button.className = "divButton";
    image.className = "shareButtonImg";
  }
};

button.addEventListener("click", showDiv);

