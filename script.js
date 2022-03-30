const container = document.querySelector(".container");
const generateBtn = document.querySelector(".btn");
const qrTextInput = document.querySelector(".link");
const qr_img = document.querySelector(".qr-code"); 

generateBtn.addEventListener('click', () => {
    const userInput = qrTextInput.value;
    if(userInput.length === 0) return;
    generateBtn.innerText="Generating QR code...";
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
    qr_img.addEventListener("load", ()=>{
        container.classList.add("active");
        generateBtn.innerText="Generate QR code";
    })

});

