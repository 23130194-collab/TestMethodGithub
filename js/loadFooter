window.addEventListener("DOMContentLoaded", async () => {
    const placeholder = document.getElementById("footer-placeholder");
    if (!placeholder) return;

    try {
        console.log("Đang tải footer từ: /html/footer.html");
        const res = await fetch("/TestMethodGithub/html/footer.html");
        
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const html = await res.text();
        placeholder.innerHTML = html;
        console.log("Footer loaded");

        // Load CSS
        if (!document.querySelector('link[href="/css/footer.css"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/css/footer.css";
            document.head.appendChild(link);
        }

    } catch (err) {
        console.error("Lỗi tải footer:", err);
        placeholder.innerHTML = `<p style="color:red;">Lỗi: Không tải được footer</p>`;
    }
});
