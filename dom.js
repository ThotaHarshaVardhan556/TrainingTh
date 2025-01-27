// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementsByClassName("test")
// // ele.innerText= "<h1>Header</h1>
// console.log(ele);
// console.log(Array.isArray(ele))
// ele[0].innerText="Hello"


// let x = [...ele];
// x.map(element=>{
//     element.style.backgroundColor="orange"

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// const divs = document.querySelectorAll("div");

// 
// divs.forEach(div => {
//   div.addEventListener("click", () => {
//
//     document.body.style.backgroundColor = div.textContent.trim();
//   });
// });

// const divs = document.querySelectorAll("div");

// // Add a click event listener to each div
// divs.forEach(div => {
//   div.addEventListener("click", () => {
//     // Cha("h1nge the background color of the clicked block
//     div.style.backgroundColor = div.textContent.trim();
//


// let ele  =doument.createEdlement("HW" );
// ele .innerTect = "Dynamic creation of html element";
// EncodedAudioChunk.id="demo"

// let image = document.createElement("img");
// img src

// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw =  document.getElementById("uPass");


// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     letuname = username.Value;

//     letuemail = mail.Valu;
//     let upass = psw.value;
//     let userDetails={
//         uname , uemail , upass
//     }

//     console.log(userDetails);
//     localStorage.setItem("userData", JSON.stringify(userDetails))


// })
// Create and style the main container
let mainEle = document.createElement("div");
mainEle.setAttribute("id", "mainBlock");
mainEle.style.border = "2px solid red";
mainEle.style.width = "550px";
mainEle.style.height = "550px";


let topEle = document.createElement("div");
topEle.setAttribute("class", "topBlock");
topEle.style.textAlign = "center";
topEle.style.padding = "10px";
topEle.textContent = "Welcome to the Cat Gallery";


let image = document.createElement("img");
image.src = "https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
image.style.width = "550px";
image.style.display = "block";
image.style.margin = "auto";

let h1 = document.createElement("h1");
h1.innerText = "CAT";
h1.style.textAlign="center"


let btn = document.createElement("button");
h1.innerText = "View More";
btn.style.border="none";
btn.style.padding="20px";
btn.style.backgroundColor="dodgreblue";
btn.style.color="White";
h1.style.textAlign="center"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class", "bottomBlock");
bottomEle.style.textAlign = "center";
bottomEle.style.padding = "10px";
bottomEle.textContent = "Enjoy this cute cat!";

bottomEle.appendChild(h1)
bottomEle.appendChild(btn)
mainEle.appendChild(topEle);
mainEle.appendChild(image);
mainEle.appendChild(bottomEle);


document.body.appendChild(mainEle);
