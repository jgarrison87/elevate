const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const modalClose = document.getElementById('modal-close');

// hamburger menu
hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
})



// email modal
function modalOpen5() {
  document.querySelector(".modal-bg").style.display = 'block'
};

setTimeout("modalOpen5()", 5000);

// email modal close
modalClose.addEventListener('click', () => {
  document.querySelector(".modal-bg").style.display = 'none'
});