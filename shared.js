var backdrop = document.querySelector(".backdrop");

backdrop.addEventListener("click", function() {
    closeModal();
});

function closeModal() {
    backdrop.classList.remove("open");
}