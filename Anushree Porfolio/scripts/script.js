function openMenu() {
  let burgerIcon = document.getElementById("mainNav");
  let about = document.getElementById("aboutId");
  let bars = document.getElementById("menu");
  let cross = document.getElementById("cross");

  if (burgerIcon.style.opacity === "") {
    console.log("opacity is 0");
    burgerIcon.style.opacity = "1";
    burgerIcon.style.maxHeight = "400px";
    about.style.paddingTop = "18rem";
    about.style.marginTop = "30px";
    burgerIcon.style.transition = "all 2s";
    bars.style.display = "none";
    cross.style.display = "block";
  } else if (burgerIcon.style.opacity === "1") {
    burgerIcon.style.opacity = "";
    burgerIcon.style.maxHeight = "40px";
    about.style.paddingTop = "5rem";
    burgerIcon.style.transition = "all 2s";
    bars.style.display = "block";
    cross.style.display = "none";
  }
}
