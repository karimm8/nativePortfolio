const projects = [
    {
        name : "Quiz App",
        url : "https://karimm8.github.io/QuizApp/",
        categorie : "js",
        img : "./img/projec/quiz.jpg"
    },
    {
        name : "Portfolio",
        url : "https://portfolio-pv8s.vercel.app/",
        categorie : "reactjs",
        img : "./img/projec/portfolio.jpg"
    },
    {
        name : "App Immobilier",
        url :"https://kapsa.vercel.app/",
        categorie : "reactjs",
        img : "./img/projec/kapsa.jpg"
    },
    {
        name : "Landing Page Product",
        url : "https://product-six-pied.vercel.app/",
        categorie : "js",
        img : "./img/projec/product.jpg"
    },
    {
        name : "Shop Boutique",
        url : "https://shop-boutique.vercel.app/",
        categorie : "reactjs",
        img : "./img/projec/shop.jpg"
    },
    {
        name : "Landing Page Turkey",
        url : "https://karimm8.github.io/turkey/",
        categorie:"html/css",
        img:"./img/projec/turky.jpg"
    }
]

const article = document.querySelector(".list")
const btns = document.querySelectorAll(".btn")

export function initial(){
    showProjects(projects)
}

export function showProjects(p){
    let pro = p.map((project)=>{
          return `
          <div class="box">
            <img src=${project.img} alt="img"/>
            <div class="info">
              <h3>${project.name}</h3>
              <p>By using language <span>${project.categorie}</span></p>
              <button>
                 <a href='${project.url}'>Live Demo</a>
              </button>
            </div>
          </div>
          `
    })
    article.innerHTML = pro.join("")
}

export function filterProjects(){
    btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
           const categorie = e.currentTarget.dataset.id 
           let listFilter = projects.filter((ele)=>{
               if(ele.categorie === categorie){
                return ele
               }
           }) 
           if(categorie === "all"){
            showProjects(projects)
           }
           else{
            showProjects(listFilter)
           }
        })
       })
}
