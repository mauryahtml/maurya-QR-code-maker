function generateQR(){

let text=document.getElementById("text").value.trim();

if(text==""){

alert("Enter Link");

return;

}

let qr=document.getElementById("qrImage");

qr.src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+encodeURIComponent(text);

qr.style.display="block";

}
