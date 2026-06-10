const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");

        tabs.forEach(section => {
            section.classList.remove("active");
        });

        document.getElementById(tab).classList.add("active");
    });
});
