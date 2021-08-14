const typeWriter = document.getElementById("typeWriter");
const typeWriterArr = ["Frontend Developer", "Blogger", "Programmer"]
let text = 0;

setInterval(() => {
    text = (text < typeWriterArr.length - 1) ? ++text : 0;
    typeWriter.innerHTML = typeWriterArr[text];
}, 6000);

