let abc = document.querySelector(".abc");


window.addEventListener("mousemove",function(e){
    abc.style.top = e.clientY-25 + "px";
    abc.style.left = e.clientX-25 + "px";
})






// let form = document.getElementById("form");
// let main = document.querySelector(".main");


// form.addEventListener("submit",function(e){
//     console.log(e);
//     e.preventDefault();



//     let card = document.createElement("div");
//     card.classList.add("card");
    

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img =document.createElement("img");
//     img.classList.add("img");
//     img.setAttribute(
//       "src",
//       e.target[0].value
//     );
//     profile.appendChild(img);

//     let name = document.createElement("h3");
//     name.textContent = e.target[1].value;

//     let occupation = document.createElement("h4")
//     occupation.textContent =e.target[2].value;

//     let info = document.createElement("p");
//     info.textContent = e.target[3].value;
    
//     card.append(profile,name,occupation,info)
    
//     main.appendChild(card)

//     form.reset();

    

// })
    







// // let btn = document.querySelector("#btn");
// // let input = document.querySelector("#input");

// // btn.addEventListener("click", function(){
// //     input.click();
// // })
// // input.addEventListener("change", function(e){
// //     if(e.target.files.length>0){
// //            btn.textContent = e.target.files[0].name;

// //     }
  
 
// // })




// // let h = document.querySelector("h1")

// // window.addEventListener("keydown", function(e){
// //     if(e.key ===" "){
// //         h.textContent = "Spc"
// //     }
// //     else {
// //         h.textContent = e.key;
// //     }
// // })









// // let select  = document.querySelector("select");
// // let h= document.getElementById("device")

// // select.addEventListener("change",function(e){

// //    h.textContent = `${e.target.value}  is selected`;
// // })
























// // let input = document.querySelector("#input");

// // input.addEventListener("input",function(e){
// //     if(e.data!==null){
// //         console.log("you typed:" + e.data)
// //     }
// // })









// // function clickHandler(){
// //   p.style.color = "yellow";
// // }

// // p.addEventListener("click", clickHandler)

// // function inputHandler(e){
// //     p.textContent= e.target.value;
// // }

// // let input = document.getElementById("input");
// // input.addEventListener("input",inputHandler)
  
