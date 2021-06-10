// JS Script for toggling between Day and Night Mode

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");
}