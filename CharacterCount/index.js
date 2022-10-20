const textArea = document.querySelector(".textarea");
const totalCharacters = document.querySelector(".span1");
const remCharacters = document.querySelector(".span2");
// remCharacters.innerHTML = textArea.getAttribute("maxLength");
// console.log(typeof remCharacters.innerHTML);


function myFunc() {
    totalCharacters.innerHTML = textArea.value.length;
    remCharacters.innerHTML = 
        textArea.getAttribute("maxLength")-
        totalCharacters.innerHTML;
}

textArea.addEventListener(("keyup"), () => {
    myFunc();
})

