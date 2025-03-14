// select items

const imgs = document.querySelectorAll(".img")
const nav = document.querySelector(".nav")
const toggle = document.querySelector(".toggle")
const links = document.querySelector(".links")

// carousel

let counter = 0

export function carousel(){
 imgs.forEach((img,index) => {
    img.style.left = `${index * 100}%`;
 });
}

export function time(){
    counter++
    if(counter > imgs.length-1){
        counter = 0
    }
    imgs.forEach((img)=>{
        img.style.transform = `translateX(-${counter * 100}%)`
    })
}

export function slide(){
    setInterval(time , 6000)
}

// sticky

export function sticky(){
    const heightScroll = window.pageYOffset
    const heightNavbar = nav.getBoundingClientRect().height
    if(heightScroll > heightNavbar){
        nav.classList.add("show-navbar")
    }
    else{
        nav.classList.remove("show-navbar")
    }
}

export function displaySticky(){
    window.addEventListener("scroll", sticky)
}

// toggle

export function toggleBars(){
    links.classList.toggle("show-links")
}

export function displayToggle(){
    toggle.addEventListener("click", toggleBars)
}