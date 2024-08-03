/*let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);
let nane=div.getAttribute("nane");
console.log(nane);
let para=document.querySelector("p");
console.log(para.getAttribute("class"));
let para=document.querySelector("p");
console.log(para.setAttribute("class","newclass"));

let div=document.querySelector("div");
console.log(div);
let div=document.querySelector("div");
div.style.backgroundColor="green";
div.style.fontSize="30px"
div.innerText="Ritesh"*/
//Insert Element
let newBtn=document.createElement("button");
newBtn.innerText="Click Me !";
console.log(newBtn);
let div=document.querySelector("div");
//div.append(newBtn);
//div.prepend(newBtn);
//div.before(newBtn);
//div.after(newBtn);
//  ****** paragraph ke bad add kerna ho to
let p=document.querySelector("p");
p.after(newBtn);
//   ********* Heading add
let newHeading=document.createElement("h1");
newHeading.innerHTML="<li> ******DOM Model******</li>"
document.querySelector("body").prepend(newHeading);

//delete Element
let para=document.querySelector("p");
para.remove();
//Paragraph tag remove ho gya
