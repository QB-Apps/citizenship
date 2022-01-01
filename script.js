
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


    provinceName.innerHTML = `${provincesInfo[this.id]._name}`;
    
    
    
}


function hideInfo() {

    info.style.display = "none";

}

        
//  let provincesInfo = {

//     pName : ["Québec", "Ontario", "Manitoba"],
//     pPrime : ["Doyon", "Keney", "Dowenend"]

//  }   

 
class Province{

    constructor(name, capital, parti, prime, opposition, chefOpposition, lieutgouv, secteurs, note){
        this._name = name;
        this._capital = capital;
        this._parti = parti;
        this._prime = prime;
        this._opposition = opposition;
        this._chefOpposition = chefOpposition;
        this._lieutgouv = lieutgouv;
        this._secteurs = secteurs;
        this._note = note;
    }
}

function provinceSelector(number) {

    // console.log(`${provincesInfo.pName[number]} et
    //              ${provincesInfo.pPrime[number]}`)

    console.log(`${provincesInfo[number]._name}
    ${provincesInfo[number]._parti}`)

}

let provincesInfo = []

let qc = new Province("Québec", 
                      "Ville de Québec", 
                      "CAQ Coalition Avenir Québec",
                      "François Legault",
                      "PQ Parti Québecois",
                      "Pauline Marois",
                      "Doyon",
                      "Turisme, agrigulture, Hydroelecticité",
                      "Vote Femme 1916"
                      ); 

let on = new Province("Ontario", 
                      "Toronto", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      );  

let nl = new Province("Terre-Neuve-et-Labrador", 
                      "Toronto", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 

let bc = new Province("Colombie-Britannique", 
                      "Victoria", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      );  

let ab = new Province("Alberta", 
                      "Edmonton", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 


let mb = new Province("Manitoba", 
                      "Winnipeg", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      );  

let nb = new Province("Nouveau-Brunswick", 
                      "Fredericton", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 

let ns = new Province("Nouvelle-Écosse", 
                      "Halifax", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      );  

let sk = new Province("Saskatchewan", 
                      "Regina", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 

let nu = new Province("Nunavut", 
                      "Iqaluit", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 

let nt = new Province("Territoires du Nord-Ouest", 
                      "Yellowknife", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 

let yt = new Province("Yukon", 
                      "Whitehorse", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 

let pe = new Province("Île-du-Prince-Édouard", 
                      "Charlottetown", 
                      "Conservative Party",
                      "Dogdford",
                      "Parti Libéral",
                      "Auwen",
                      "Peter",
                      "Turisme, agrigulture, services",
                      "Bilangue"
                      ); 

provincesInfo = [ nl, bc, ns, qc, on, yt, nt, nu, pe, nb, mb, sk, ab]

console.log(`${provincesInfo[0]._name} ${provincesInfo[1]._name}`)

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


