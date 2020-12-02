const closeBtn = document.querySelector(".email-modal-close");
const submitBtn = document.querySelector(".submit");
const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector("#nav-ul");

// email modal
submitBtn.addEventListener('click', () => {
  document.getElementById("email-modal-bg").classList.remove("email-modal-bg-active");
});

closeBtn.addEventListener('click', () => {
  document.getElementById("email-modal-bg").classList.remove("email-modal-bg-active");
});


function modalOpen5() {
  document.getElementById("email-modal-bg").classList.add("email-modal-bg-active");
  document.getElementById("email-modal").classList.add("email-modal-active");
}

setTimeout("modalOpen5()", 5000);

// hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.style.backgroundColor = 'blue';
})