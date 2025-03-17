const  d =document.getElementById("date")

export function date () {
    console.log(d)
    d.innerHTML = new Date().getFullYear()
}