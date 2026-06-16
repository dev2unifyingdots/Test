(function () {
    const btn = document.getElementById("show-more-btn");
    const grid = document.querySelector(".product-grid");

    if (!btn || !grid) return;

    btn.addEventListener("click", function () {
        grid.classList.add("open");
        btn.style.display = "none"; // Hide button after expanding
    });
})();