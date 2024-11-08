
document.addEventListener("DOMContentLoaded", (event) => {
    const openModalButton = document.querySelectorAll(".modal-btn-fi");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const inputs = document.querySelectorAll('input[type="password"]');
    openModalButton.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
            setTimeout(() => {
            modal.classList.remove("opacity-0");
            modal.classList.add("opacity-100");
            }, 10);
        });
    })

    modal.addEventListener("click", (event) => {
        if (!modalContent.contains(event.target)) {
        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0");
        setTimeout(() => {
            modal.classList.remove("flex");
            modal.classList.add("hidden");
        }, 300);
        }
    });

    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
        });
    });
});