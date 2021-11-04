let copyimage = document.getElementById('download_btn');
copyimage.addEventListener('click', imagecopy);
function imagecopy() {
    console.log("helo");
    console.log("helo funciton is clalling");
    var button = document.getElementById('btn-download');
    console.log(button.tabIndex);
    html2canvas(document.getElementById("image")).then(function (canvas) {
        // Get the image data as JPEG and 0.9 quality (0.0 - 1.0
        let urli = canvas.toDataURL("image/jpeg", 0.9);
        button.href = urli;
        button.click();
    });
}
