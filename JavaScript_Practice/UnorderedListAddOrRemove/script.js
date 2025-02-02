var intext = document.querySelector("#inputtext");
var addbtn = document.querySelector("#additem");
var removebtn = document.querySelector("#removeitem");
var listitem = document.querySelector("#list");

addbtn.addEventListener("click", function () {
    var input_text = intext.value.trim();
    if (input_text === "") {
        alert("Please enter an item! to add");
        return;
    }

    var li = document.createElement("li");
    li.textContent = input_text;
    listitem.appendChild(li);
    intext.value = "";
});

removebtn.addEventListener("click", function () {
    /* let lastItem = listitem.lastElementChild;
 
     if(lastItem) {
         listitem.removeChild(lastItem);
     }
     else {
         alert("No items to remove!");
     }*/

    var input_text = intext.value.trim();
    if (input_text === "") {
        alert("Please enter an item to remove!");
        return;
    }

    var items = listitem.getElementsByTagName("li");
    var found = false;

    for (let i = 0; i <= items.length; i++) {
        if (items[i].textContent === input_text) {
            listitem.removeChild(items[i]);
            found = true;
        }
    }

    if (!found) {
        alert("Item not found in the list!");
    }

    intext.value = "";
});