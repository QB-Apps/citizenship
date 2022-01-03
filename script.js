
let elements = document.getElementsByTagName("g");

let provinceName = document.getElementById("nameProvince")
let provinceTitle = document.getElementById("title")
let carte = document.getElementById("canadaMap")

let info = document.getElementById("info")
// info.addEventListener("click", hideInfo);

let selectedProv = "";


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

    provinceTitle.innerHTML = `${provincesInfo[this.id]._name}`;

    selectedProv = this.id;
    this.style.fill = "rgb(170, 10, 10)";
}


function hideInfo() {

    info.style.display = "none";
    provinceTitle.innerHTML = `Canada`;
    document.getElementById("capital").innerHTML = "Respuesta";
    document.getElementById("prime").innerHTML = "Respuesta";
    document.getElementById("parti").innerHTML = "Respuesta";
    document.getElementById("lieutgouv").innerHTML = "Respuesta";
    document.getElementById("opposition").innerHTML = "Respuesta";
    document.getElementById("chefOp").innerHTML = "Respuesta";
    document.getElementById("secteurs").innerHTML = "Respuesta";
    document.getElementById("note").innerHTML = "Respuesta";
    
}

function verRespuesta(id) {       

    let localId = id;

    // document.getElementById("capital").innerHTML = provincesInfo[selectedProv]._capital;
  
    
    switch (localId) {
        case "capital":          
            document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._capital;
          break;
        case "prime":
            document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._prime;
          break;
        case "parti":
          document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._parti;
        break;
        case "lieutgouv":
          document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._lieutgouv;
        break;
        
        case "opposition":
          document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._opposition;
        break;
        
        case "chefOp":
          document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._chefOp;
        break;
        
        case "secteurs":
          document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._secteurs;
        break;
        
        case "note":
          document.getElementById(localId).innerHTML = provincesInfo[selectedProv]._note;
       
      }

      
}


class Province{

    constructor(name, capital, parti, prime, opposition, chefOp, lieutgouv, secteurs, note){
        this._name = name;
        this._capital = capital;
        this._parti = parti;
        this._prime = prime;
        this._opposition = opposition;
        this._chefOp = chefOp;
        this._lieutgouv = lieutgouv;
        this._secteurs = secteurs;
        this._note = note;
    }
}

let provincesInfo = []

let qc = new Province("Québec", 
                      "Ville de Québec", 
                      "Coalition Avenir Québec",
                      "François Legault",
                      "",
                      "",
                      "J. Michel Doyon",
                      "",
                      ""
                      ); 

let on = new Province("Ontario", 
                      "Toronto", 
                      "Progressive Conservative",
                      "Doug Ford",
                      "",
                      "",
                      "Elizabeth Dowdeswell",
                      "",
                      ""
                      );  

let nl = new Province("Terre-Neuve-et-Labrador", 
                      "St. John's", 
                      "Liberal",
                      "Andrew Furey",
                      "",
                      "",
                      "Judy Foote",
                      "",
                      ""
                      ); 

let bc = new Province("Colombie-Britannique", 
                      "Victoria", 
                      "New Democratic",
                      "John Horgan",
                      "Parti Libéral",
                      "",
                      "Janet Austin",
                      "",
                      ""
                      );  

let ab = new Province("Alberta", 
                      "Edmonton", 
                      "United Conservative",
                      "Jason Kenney",
                      " ",
                      " ",
                      "Salma Lakhani",
                      " ",
                      " "
                      ); 


let mb = new Province("Manitoba", 
                      "Winnipeg", 
                      "Progressive Conservative",
                      "Heather Stefanson",
                      "",
                      "",
                      "Janice Filmon",
                      "",
                      ""
                      );  

let nb = new Province("Nouveau-Brunswick", 
                      "Fredericton", 
                      "Progressive Conservative",
                      "Blaine Higgs",
                      "",
                      "",
                      "Brenda Murphy",
                      "",
                      ""
                      ); 

let ns = new Province("Nouvelle-Écosse", 
                      "Halifax", 
                      "Progressive Conservative",
                      "Tim Houston",
                      "",
                      "",
                      "Arthur Joseph LeBlanc",
                      "",
                      ""
                      );  

let sk = new Province("Saskatchewan", 
                      "Regina", 
                      "Saskatchewan Party",
                      "Scott Moe",
                      "",
                      "",
                      "Russell Mirasty",
                      "",
                      ""
                      ); 

let nu = new Province("Nunavut", 
                      "Iqaluit", 
                      "Consensus government",
                      "P.J. Akeeagok",
                      "",
                      "",
                      "Eva Aariak",
                      "",
                      ""
                      ); 

let nt = new Province("Territoires du Nord-Ouest", 
                      "Yellowknife", 
                      "Consensus government",
                      "Caroline Cochrane",
                      "",
                      "",
                      "Margaret Thom",
                      "",
                      ""
                      ); 

let yt = new Province("Yukon", 
                      "Whitehorse", 
                      "Liberal",
                      "Sandy Silver",
                      "",
                      "",
                      "Angélique Bernard",
                      "",
                      ""
                      ); 

let pe = new Province("Île-du-Prince-Édouard", 
                      "Charlottetown", 
                      "Progressive Conservative",
                      "Dennis King",
                      "",
                      "",
                      "Antoinette Perry",
                      "",
                      ""
                      ); 

provincesInfo = [ nl, bc, ns, qc, on, yt, nt, nu, pe, nb, mb, sk, ab]


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


