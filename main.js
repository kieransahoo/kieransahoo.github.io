let resume = document.getElementById("downloadresume");
resume.addEventListener("click",function(){
    window.open("https://drive.google.com/file/d/1YoHai2h49Uq26Y381QkFz0uObtnO6qoN/view?usp=sharing")
})

let resume2 = document.getElementById("downloadresume2");
resume2.addEventListener("click",function(){
    window.open("https://drive.google.com/file/d/1YoHai2h49Uq26Y381QkFz0uObtnO6qoN/view?usp=sharing")
})

function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active")
    menu.classList.toggle("active")
}


const sr = ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:2000,
    reset:true
})

sr.reveal(".home-text",{})
sr.reveal(".home-img",{delay:200})

sr.reveal(".about-img",{})
sr.reveal(".about-text",{delay:200})
sr.reveal(".social",{delay:200})

sr.reveal(".content",{})
sr.reveal(".tech-stack",{delay:200})

sr.reveal(".project-content",{})
sr.reveal(".box",{delay:200})

// sr.reveal(".git-stat",{})
// sr.reveal(".calendar",{delay:200})

//sr.reveal(".contact-content",{})
// sr.reveal(".contact-details",{delay:200})
// sr.reveal(".contact-form",{delay:200})

