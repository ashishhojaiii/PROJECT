let input = document.querySelector("input");
let button = document.querySelector("button");

let todo=[];

button.addEventListener("click",()=>{
let p = document.createElement("p");
let removebtn = document.createElement("button")

p.classList.add("p")
removebtn.classList.add("rmv")
document.body.appendChild(p)
p.innerText=input.value;
p.appendChild(removebtn)
removebtn.innerText='Remove'
todo.push(input.value);
input.value=""

p.addEventListener("click", (dets)=>{
let val = p;
p.remove()


/*let OriginalText = p.innerText;
let newText = OriginalText.replace("Remove" , "");

let val = todo.indexOf(newText)
todo.splice(val,1)*/


})
})

