

let slidenumberelement = Array.from(document.querySelectorAll(".slide-containeer img"));
let slidecount = slidenumberelement.length;

let currentslide = 1;
let numberslide = document.getElementById("slide-number");
let nextbutton = document.querySelector("#next");
let prevbutton = document.querySelector("#prev");
let listes = Array.from(document.querySelectorAll("ul li"))
// for(let i=0 ; i < listes.length;i++){

//     listes[i].setAttribute("data-index",i);
//     if(listes[i].value == 0){
//         listes[i].value = 1

//     }
// }
for(i=0; i <listes.length;i++ ){
    listes[i].onclick = function(){
        currentslide = parseInt(this.getAttribute("data-index"));
        thCheacer();
    } 
}
prevbutton.onclick = function(){
    if(prevbutton.classList.contains("disable")){

    }
    else{
        currentslide++;
        thCheacer();
   
    console.log("hbjhjhk")
    }
}
nextbutton.onclick = function(){
    if(nextbutton.classList.contains("disable")){

    }
    else{
        currentslide--;
        thCheacer();
   
    console.log("hbjhjhk")
    }
}
thCheacer();


function thCheacer() {
    numberslide.textContent ='slide #' + (currentslide) + " " +'of'+ " "+ (slidecount);
    removeallactive()
    listes[currentslide - 1].classList.add("active")
   
    slidenumberelement[currentslide - 1].classList.add("active")
    
    if(currentslide == 1){
        nextbutton.classList.add("disable")

    }else{
        nextbutton.classList.remove("disable")

    }
    if(currentslide == slidecount){
        prevbutton.classList.add("disable")

    }else{
        prevbutton.classList.remove("disable")

    }


  console.log("hjjll")
}
function removeallactive (){
    listes.forEach(function(e){
        e.classList.remove("active")

    })
    slidenumberelement.forEach(function(e){
        e.classList.remove("active")
    })

}
   