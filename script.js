// Change text content dynamically when the button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "The text has been changed!";
});

// Change CSS styles dynamically when the button is clicked
document.getElementById("changeStyleBtn").addEventListener("click", function() {
    let styleTextElement = document.getElementById("styleText");
    styleTextElement.style.color = "blue";
    styleTextElement.style.fontSize = "20px";
    styleTextElement.style.fontWeight = "bold";
});

// Add a new element when the button is clicked
document.getElementById("addElementBtn").addEventListener("click", function() {
    let newElement = document.createElement("p");
    newElement.textContent = "This is a new element added dynamically!";
    document.getElementById("newElementsContainer").appendChild(newElement);
});
