// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

//scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });


//sticky navbar
let header = document.querySelector('header');
window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 100);
}

//remove toggle icon and nav bar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
// classlist
const element = document.getElementById('yourElementId');
if (element) {
    // Safely access classList or other properties
    element.classList.add('someClass');
}
// Animation
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
    loop:true,
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.Project-box',{origin:'buttom'});
ScrollReveal().reveal('.home-content h1,.about-img,.my-skills',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content p,.timeline',{origin:'right'});





