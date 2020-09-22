// Variable
const openModal = document.querySelector("#open-modal");
const overlayModal = document.querySelector("#overlay");
const closeModal = overlayModal.querySelector("#close-modal");

// Event Listener
// Open modal
openModal.addEventListener("click", () => {
  overlayModal.style.display = "block";
});

// Close Modal
closeModal.addEventListener("click", () => {
  overlayModal.style.display = "none";
});
