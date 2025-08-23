//1. =======================toggle btn 
const toogleOn = document.querySelector(".toggleOn");
const toogleOff = document.querySelector(".toggleOff");

const hv1 = document.querySelector("#hv-1");
const hv2 = document.querySelector("#hv-2");

toogleOn.addEventListener("click", () => {
     document.body.classList.add("lightMood");
     hv1.style.display = "none";
     hv2.style.display = "block";

});
toogleOff.addEventListener("click", () => {
     document.body.classList.remove("lightMood");
       hv1.style.display = "block";
     hv2.style.display = "none";


});




