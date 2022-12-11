const menubtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menubtn.addEventListener('click' ,()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})

window.onscroll = ()=>{
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}



const swiper = new Swiper('.home-slider', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//*********************************************************

const mouseEvent =document.querySelector('.mouseEvent');
const horizontal =document.querySelector('.horizontal');
const vertical =document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (e) => {
horizontal.innerHTML = e.x;
vertical.innerHTML = e.y;
mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

if (e.x > 500) {
document.body.style.filter = "blur(3px)";
} else {
document.body.style.filter = "none";
}
}) 
//**********************************************************

document.getElementById('input') .addEventListener('input', () => {
vertical.innerHTML = e.target.value
})




