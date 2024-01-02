// For Cart button

let cart = document.querySelector('.cart-items');
document.querySelector('#cart-btn').onclick = () => {
        cart.classList.toggle('active');
        login.classList.remove('active');
        nav.classList.remove('active');
}

// For Login Option

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick =()=>{
    login.classList.toggle('active');
    cart.classList.remove('active');
    nav.classList.remove('active');
}

// responsive navbar with toggle BAR

let nav = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()  =>{
    nav.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

// Scroll effect
window.onscroll = () => {
    cart.classList.remove('active');
    login.classList.remove('active');
    nav.classList.remove('active');
}

// Scroll effect for About Section

const reveal = document.querySelectorAll("[reveal-effect]");

const scrollReveal = () =>{
    for(let i= 0, len = reveal.length; i< len; i++){
        const isElementOnScreen = reveal[i].getBoundingClientRect().top < window.innerHeight;

        if(isElementOnScreen){
            reveal[i].classList.add('revealed')
        } else {
            reveal[i].classList.remove("revealed");
        }
    }
};

window.addEventListener("scroll", scrollReveal);
