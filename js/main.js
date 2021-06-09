// Navigation menu toggler function
function togglemenu() {
  let x = document.getElementById("navBar");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}