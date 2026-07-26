const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function(){

const file = this.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

preview.src = e.target.result;

preview.style.display = "block";

}

reader.readAsDataURL(file);

});

document.getElementById("compressBtn").addEventListener("click",function(){

alert("Compression feature next part me add karenge.");

});
