
let input = document.querySelector(".input");
let addBtn = document.querySelector(".add")
let subBtn = document.querySelector(".sub")
let resetBtn = document.querySelector(".reset")

let count = 0;


function addNum(){
 count++;
 input.value = count;
}

function subNum(){
    count--;
    input.value = count;
}

addBtn.addEventListener("click",addNum)
subBtn.addEventListener("click",subNum)

resetBtn.addEventListener("click",()=>{
    count = 0;
    input.value = count;
})