var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(path) {
    fullImgBox.style.display = "flex";
    fullImg.src = path;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}