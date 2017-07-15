/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//this doesn't work yet
var imgs=["img/testCmx/testComic2.gif", "img/testCmx/testComic3.gif"];

function changeImage(dir) {
        var img = document.getElementById("imgClickAndChange");
        img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
    }

document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            changeImage(-1) //left <- show Prev image
        } else if (e.keyCode == '39') {
            // right -> show next image
            changeImage()
        }
    }