const webItems = document.querySelector(".web-items");
const allItems = document.querySelector(".all");
const designItems = document.querySelector(".design-items");

document.getElementById("buttonWebsites").addEventListener("click", () => {
    allItems.style.display = "none";
    designItems.style.display = "none";
    webItems.style.display = "block";
});

document.getElementById("buttonAll").addEventListener("click", () => {
    webItems.style.display = "none";
    designItems.style.display = "none";
    allItems.style.display = "block";
});
document.getElementById("buttonDesign").addEventListener("click", () => {
    webItems.style.display = "none";
    allItems.style.display = "none";
    designItems.style.display = "block";
});