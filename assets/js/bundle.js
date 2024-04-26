const webButton = document.getElementById("buttonWebsites");
const webItems = document.querySelectorAll(".web-items");
const allItems = document.querySelectorAll(".all");
const designItems = document.querySelectorAll(".design-items");

webButton.addEventListener("click", () => {
    designItems.forEach(item => {
        item.style.display = "none";
    });
    webItems.forEach(item => {
        item.style.display = "block";
    });
    webButton.classList.add('active-button');
    
    console.log(designItems.length);
});

document.getElementById("buttonAll").addEventListener("click", () => {
    allItems.forEach(item => {
        item.style.display = "block";
    });
});
document.getElementById("buttonDesign").addEventListener("click", () => {
    webItems.forEach(item => {
        item.style.display = "none";
    });
    designItems.forEach(item => {
        item.style.display = "block";
    });
});