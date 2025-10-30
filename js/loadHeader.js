// loadHeader.js
window.addEventListener("DOMContentLoaded", async () => {
    const placeholder = document.getElementById("header-placeholder");
    if (!placeholder) return;

    try {
        const res = await fetch("header.html");
        if (!res.ok) throw new Error("Không thể tải header.html");
        const html = await res.text();
        placeholder.innerHTML = html;

        // Thêm CSS nếu cần
        if (!document.querySelector('link[href="css/header.css"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "css/header.css";
            document.head.appendChild(link);
        }

        // Thêm FontAwesome nếu cần
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const font = document.createElement("link");
            font.rel = "stylesheet";
            font.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
            document.head.appendChild(font);
        }

        // 🚀 Quan trọng: chạy JS header SAU KHI DOM header có mặt
        import("./header.js")
            .then(() => console.log("✅ Header script loaded"))
            .catch(err => console.error("Lỗi import header.js:", err));

    } catch (err) {
        console.error("Lỗi tải header:", err);
    }
});
