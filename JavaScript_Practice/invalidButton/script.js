var form = document.querySelector("form");
var t1 = document.querySelector("#form1");
var t2 = document.querySelector("#form2");
var button = document.querySelector("button");

button.addEventListener("click", function (event) {
    if (t1.value.trim() === "" || t2.value.trim() === "") {
        alert("Invalid input: Both fields are required!");
        event.preventDefault();
    }
});
