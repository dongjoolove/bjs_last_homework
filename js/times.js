const clock = document.querySelector('h2#clock');

function timeSet(){
    const date = new Date();
    const timeYear=date.getFullYear();
    const timeMonth= String(date.getMonth()+1).padStart(2,'0');
    const timeDay= String(date.getDate()).padStart(2,'0');
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${timeYear}-${timeMonth}-${timeDay} ${hours}:${minutes}:${seconds}`;
}
setInterval(timeSet, 1000);