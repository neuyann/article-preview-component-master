const button = document.querySelector("button");
const social = document.querySelector(".sharedSocial");

const showDiv = () =>  {
  social.classList.toggle("hidden");
};

button.addEventListener("click", showDiv);
