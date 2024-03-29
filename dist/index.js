
function menuFunction(){
    let menuBtn = document.getElementById("NavMenu")
    let menuIcon = document.getElementById("menu-icon")
    
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
        console.log(menuIcon)
        menuIcon.classList.add("uil-plus");
        menuIcon.classList.add("nav_icon_change");
    }
    else{
        menuBtn.className = "nav-menu";
        menuIcon.classList.remove("uil-plus");
        menuIcon.classList.remove("nav_icon_change");
    }
}

const navItems = document.getElementsByClassName("nav-link");
for(let item of navItems){
    item.addEventListener('click', (e) =>{
        console.log(e.target)
        if(!(e.target.className === "nav-link active-link")){
            for(let it of navItems){
                if(it.className === "nav-link active-link"){
                    it.classList.remove("active-link");
                }
            }
            e.target.classList.add("active-link")
        }
        
    })
}
window.onscroll = function() {headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }
    else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

let typingEffect = new Typed(".typedText", {
    strings: ["Engineer", "Developer","Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '25px',
    duration: 1000,
    reset: true
})

sr.reveal('.box-text-card',{})
sr.reveal('.box-name',{delay:100})
sr.reveal('.box-text-info',{delay: 200})
sr.reveal('.box-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.box-image',{delay: 300})

sr.reveal('.grid',{interval: 200})
sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 1000,
    reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '30px',
    duration: 1000,
    reset: true,
})

srRight.reveal('.skills',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop  = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }

    })
}




  

window.addEventListener('scroll', scrollActive)

