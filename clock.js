const hr= document.querySelector("#hr") 
const min= document.querySelector("#min") 
const sec= document.querySelector("#sec") 
function update(){
    let date= new Date();
    let h=date.getHours();
    if (h>12) h=h%12;
    hr.innerText=(h<10)?("0"+h):h;
    min.innerText=(date.getMinutes()<10)?("0"+date.getMinutes()):date.getMinutes();
    sec.innerText=(date.getSeconds()<10)?("0"+date.getSeconds()):date.getSeconds();
}
setInterval(update,1000)