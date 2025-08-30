//1. =======================toggle btn
const toogleOn = document.querySelector(".toggleOn");
const toogleOff = document.querySelector(".toggleOff");

const hv1 = document.querySelector("#hv-1");
const hv2 = document.querySelector("#hv-2");
const his1 = document.querySelector(".his-1");
const his2 = document.querySelector(".his-2");

toogleOn.addEventListener("click", () => {
  document.body.classList.add("lightMood");
  hv1.style.display = "none";
  hv2.style.display = "block";
  his1.style.display = "block";
  his2.style.display = "none";
});
toogleOff.addEventListener("click", () => {
  document.body.classList.remove("lightMood");
  hv1.style.display = "block";
  hv2.style.display = "none";
  his1.style.display = "none";
  his2.style.display = "block";
});

// 2===============================
const menu = document.getElementById("menu");
const navigationBar = document.getElementById("navigationBar");
const closeX = document.querySelector(".close-x");

menu.addEventListener("click", () => {
  navigationBar.style.right = "5px";
});
closeX.addEventListener("click", () => {
  navigationBar.style.right = "-100%";
});

// 3 ========================================

function countUp(elementId, target, speed) {
  let count = 0;
  let elements = document.getElementById(elementId);

  let counter = setInterval(() => {
    count++;
    elements.textContent = count;

    if (count >= target) {
      clearInterval(counter);
    }
  }, speed);
}
countUp("count1", 20, 100);
countUp("count2", 98, 25);


// 4 +=========================================== 
