const popupBackground = document.querySelector(".popup-background");
const popupBox = document.querySelector(".popup-box");
const addPopup = document.getElementById("add-popup-button");



addPopup.addEventListener("click", function () {
  popupBackground.style.display = "block";
  popupBox.style.display = "block";
});

const cancelButton=document.getElementById("btn-cancel-list");
  cancelButton.addEventListener("click",function(event){
    event.preventDefault()
    popupBackground.style.display = "none";
  popupBox.style.display = "none";
})

//select box-container,btn-add-list,add-list-title,add-list-timing,add-list-description

var boxcontainer=document.querySelector(".box-container");
var btnaddlist=document.getElementById("btn-add-list");
var addlisttitle=document.getElementById("add-list-title");
var addlisttiming=document.getElementById("add-list-timing");
var addlistdescription=document.getElementById("add-list-description");
var deleteButton=document.getElementById("delete-btn");

btnaddlist.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","list-container");
    div.innerHTML=`<h2>${addlisttitle.value}</h2>
    <h4>${addlisttiming.value}</h4>
    <p>${addlistdescription.value}</p>
    <button class="btn-delete" onclick="deleteBook(event)">Delete</button>`
    boxcontainer.append(div)
    popupBackground.style.display="none";
    popupBox.style.display="none";

})

function deleteBook(event){
    event.target.parentElement.remove();
}