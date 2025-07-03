const menuBtn = document.querySelector(".ri-menu-line");
const navUl = document.querySelector(".nav-ul");

menuBtn.addEventListener('click', ()=>{
    navUl.classList.toggle('active');
})