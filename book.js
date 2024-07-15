var popup= document.querySelector(".popup")
var popbox = document.querySelector(".popup-box")
var but = document.querySelector(".but")
var cancel = document.getElementById("cancel")
but.addEventListener("click",function(){
    popup.style.display="block"
    popbox.style.display="block"
})
cancel.addEventListener("click",function(){
    popup.style.display="none"
    popbox.style.display="none"
    event.preventDefault()
})

//select box,add,book-title,book-author,book-des

var box = document.querySelector(".box")
var addbook = document.getElementById("add")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdes = document.getElementById("book-des")

addbook.addEventListener("click",function(){
    var div = document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=` <h3>${booktitle.value}</h3>
            <h5>${bookauthor.value}</h5>
            <p>${bookdes.value}</p>
            <button id="btn" onclick="dele(event)">delete</button>`
    box.append(div)
    event.preventDefault()
    popup.style.display="none"
    popbox.style.display="none"
})
function dele(event){
    event.target.parentElement.remove()
}  