console.log("logic.js loaded");

function setLeftPicture() {
    var img = document.getElementById("classifiersLeft");
    var value = img.options[img.selectedIndex].value;
    document.getElementById("leftImg1").src = `${value}.jpg`;
    document.getElementById("leftResults").data = `${value}.txt`
}

function setRightPicture() {
    var img = document.getElementById("classifiersRight");
    var value = img.options[img.selectedIndex].value;
    document.getElementById("rightImg1").src = `${value}.jpg`;
    document.getElementById("rightResults").data = `${value}.txt`
}