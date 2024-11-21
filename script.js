console.log("Raj Shekhawat");


let app = document.querySelector(".app")
let button = document.querySelector(".btn")

button.addEventListener("click",(event)=>{
    event.preventDefault()
    let textarea = document.createElement("textarea")
    textarea.classList.add("note")
    textarea.placeholder= "Empty Note"
    app.prepend(textarea)
})

window.addEventListener("beforeunload" ,function (event){
    event.preventDefault()
    event.returnValue = ""
})