var popupoverlay = document.querySelector(".popupoverlay");
var popupbox = document.querySelector(".popupbox");
var addpop = document.getElementById("addpop");

addpop.addEventListener("click", function () {
    popupbox.style.display = "block";
    popupoverlay.style.display = "block";
});

var cancel = document.getElementById("cancel");

cancel.addEventListener("click", function (event) {
    event.preventDefault();
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("add");
var booktitleip = document.getElementById("booktitle");
var bookauthorip = document.getElementById("bookauthor");
var bookdescriptioninput = document.getElementById("bookdescriptioninput");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container"); 
    div.innerHTML = `
        <h2>${booktitleip.value}</h2>
        <h5>${bookauthorip.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="remove-button">Remove</button>`; 
    container.append(div);

    var removeButton = div.querySelector(".remove-button");
    removeButton.addEventListener("click", function () {
        div.remove(); 
    });

    popupbox.style.display = "none";
    popupoverlay.style.display = "none";
});
