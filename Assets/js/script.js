const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
})
function toggleInfo(button) {
    const info = button.nextElementSibling;
    if (info.style.maxHeight) {
      info.style.maxHeight = null; // Cierra el desplegable
    } else {
      info.style.maxHeight = info.scrollHeight + "px"; // Abre el desplegable
    }
  }  