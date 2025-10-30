// header.js
console.log("Header JS running...");

const toggleMenu = document.getElementById("toggleMenu");
const overlay = document.getElementById("overlay");
const categoryBox = document.getElementById("categoryBox");

if (!toggleMenu || !overlay || !categoryBox) {
    console.error("❌ Không tìm thấy phần tử header");
} else {
    console.log("✅ Header DOM found");

    const openMenu = () => {
        categoryBox.classList.add("show");
        overlay.classList.add("active");
    };

    const closeMenu = () => {
        categoryBox.classList.remove("show");
        overlay.classList.remove("active");
    };

    toggleMenu.addEventListener("click", (e) => {
        e.preventDefault();
        categoryBox.classList.contains("show") ? closeMenu() : openMenu();
    });

    overlay.addEventListener("click", closeMenu);
}
