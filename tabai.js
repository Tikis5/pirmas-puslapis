var sheets = document.getElementsByClassName("sheet");
function atidaryti(sheetoId) {
    for (var i = 0; i < sheets.length; i++) {
        sheets[i].style.display = "none";
    }
    document.getElementById(sheetoId).style.display = "block";
}

