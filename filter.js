filterSelection("all")
function filterSelection(c) {
    console.log(c + " is selected");
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    // x = document.querySelectorAll("filterDiv.*");
    // x = document.getElementsByClassName(".filterDiv-healthPaper .filterDiv-dbPaper .filterDiv-etPaper");
    // x = document.getElementsByTagName("div");

    console.log(x);
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "showSelected");
        if (x[i].className.indexOf(c) > -1) {
            w3AddClass(x[i], "showSelected");
            console.log(x[i].id + " is selected");
        }
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    console.log(arr1 + " " + arr2)
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class (event listener) to the current button (highlight it)
var btnContainer = document.getElementById("filterBtnContainer");
var btns = btnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("fBtnActive");
        current[0].className = current[0].className.replace(" fBtnActive", "");
        this.className += " fBtnActive";
    });
}
