const hr = document.querySelector(".hour");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
// console.log(hr)
function updatedTime(){
    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    

    hrs = hrs<10 ? "0"+hrs : hrs;
    mins = mins<10 ? "0"+mins : mins;
    secs = secs<10 ? "0"+secs : secs;

    hr.innerText  = hrs;
    min.innerText  = mins;
    sec.innerText  = secs;

    setTimeout(() => {
        updatedTime();
    },1000)
}
updatedTime();


