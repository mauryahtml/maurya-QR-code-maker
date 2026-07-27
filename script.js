const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const compressBtn = document.getElementById("compressBtn");
const downloadBtn = document.getElementById("downloadBtn");
const targetSize = document.getElementById("targetSize");

let selectedImage = null;

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        preview.src = e.target.result;
        preview.style.display = "block";

        const img = new Image();

        img.onload = function () {
            selectedImage = img;
        };

        img.src = e.target.result;

    };

    reader.readAsDataURL(file);

});

compressBtn.addEventListener("click", function () {

    if (!selectedImage) {
        alert("Please select image first.");
        return;
    }

    if (targetSize.value === "") {
        alert("Enter target size.");
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = selectedImage.width;
    canvas.height = selectedImage.height;

    ctx.drawImage(selectedImage, 0, 0);

    alert("Canvas Engine Ready.\nNext part me real compression algorithm add hoga.");

});
