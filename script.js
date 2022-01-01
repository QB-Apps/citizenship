
let elements = document.getElementsByTagName("g");

let info = document.getElementById("info")
let provinceName = document.getElementById("nameProvince")

info.addEventListener("click", hideInfo);

function findProvinces() {

for (var i = 0; i < elements.length; i++) {   
    addEvents(i)
  }

}

function addEvents(el){
    elements[el].addEventListener("click", provinceClicked)
}




function provinceClicked(){
    
    info.style.display = "block";

    provinceName.innerHTML = `${this.id}`;
    
}


function hideInfo() {

    info.style.display = "none";

}

        
    



// select elements
// var elements = Array.from(document.querySelectorAll('g'));


// var a = document.getElementById("canadaMap");

// alert(elements[2].id)

// elements[0].addEventListener("click", function(){ alert(`${elements[0].id} clicked`);}
// , false);


// add event listeners
// elements.forEach(function(el) {
//    el.addEventListener("touchstart", start);
//    el.addEventListener("mousedown",  start);
//    el.addEventListener("touchmove",  move);
//    el.addEventListener("mousemove",  move);
// })

// // event listener functions

// function start(e){
//     alert(e.id)
//   console.log(e);
//   // just an example
// }

// function move(e){
//   console.log(e);
//   // just an example
// }



// select elements
// var elements = Array.from(document.querySelectorAll('#canadaMap path'));

// // add event listeners
// elements.forEach(function(el) {
//    el.addEventListener("touchstart", start);
//    el.addEventListener("mousedown",  start);
//    el.addEventListener("touchmove",  move);
//    el.addEventListener("mousemove",  move);
// })

// // event listener functions

// function start(e){
//     alert(e.id)
//   console.log(e);
//   // just an example
// }

// function move(e){
//   console.log(e);
//   // just an example
// }

// var a = document.getElementById("canadaMap");
// a.addEventListener("load",function(){
//   var svgDoc = a.contentDocument;
//   var els = svgDoc.querySelectorAll("NFL_L");
//   for (var i = 0, length = els.length; i < length; i++) {
//     els[i].addEventListener("click", 
//        function(){ alert("clicked"); 
//     }, false);
//   }
// },false);


