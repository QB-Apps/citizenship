
let elements = document.getElementsByTagName("g");

let provinceName = document.getElementById("nameProvince")
let provinceTitle = document.getElementById("title")
let carte = document.getElementById("canadaMap")

let info = document.getElementById("info")

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
    document.getElementById("capital").innerHTML = "Réponse";
    document.getElementById("prime").innerHTML = "Réponse";
    document.getElementById("parti").innerHTML = "Réponse";
    document.getElementById("lieutgouv").innerHTML = "Réponse";
    document.getElementById("opposition").innerHTML = "Réponse";
    document.getElementById("chefOp").innerHTML = "Réponse";
    document.getElementById("secteurs").innerHTML = "Réponse";
    document.getElementById("note").innerHTML = "Réponse";
    
}

function showAll() {

    document.getElementById("capital").innerHTML = provincesInfo[selectedProv]._capital;
    document.getElementById("prime").innerHTML = provincesInfo[selectedProv]._prime;
    document.getElementById("parti").innerHTML = provincesInfo[selectedProv]._parti;
    document.getElementById("lieutgouv").innerHTML = provincesInfo[selectedProv]._lieutgouv;
    document.getElementById("opposition").innerHTML = provincesInfo[selectedProv]._opposition;
    document.getElementById("chefOp").innerHTML = provincesInfo[selectedProv]._chefOp;
    document.getElementById("secteurs").innerHTML = provincesInfo[selectedProv]._secteurs;
    document.getElementById("note").innerHTML = provincesInfo[selectedProv]._note;
    
}

function verRespuesta(id) {       

    let localId = id;  
    
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
                      "Libéral",
                      "Dominique Anglade",
                      "J. Michel Doyon",
                      "Les pâtes et papiers, la foresterie et la production d'énergie hydroélectrique",
                      "Les Québécois sont des chefs de file dans des industries de pointe comme l’industrie pharmaceutique et l’aéronautique"
                      ); 

let on = new Province("Ontario", 
                      "Toronto", 
                      "Progressive Conservative",
                      "Doug Ford",
                      "NPD",
                      "Andrea Horwath",
                      "Elizabeth Dowdeswell",
                      "L'exploitation minière, le tourisme et le secteur automobile",
                      "L’Ontario compte plus d’un tiers de la population canadienne, Toronto est la plus importante ville du Canada et le principal centre financier du pays."
                      );  

let nl = new Province("Terre-Neuve-et-Labrador", 
                      "St. John's", 
                      "Liberal",
                      "Andrew Furey",
                      "Progressive Conservative",
                      "David Brazil",
                      "Judy May Foote",
                      "La pêche, le pétrole et l'extraction de gaz",
                      "Occupe son propre fuseau horaire."
                      ); 

let bc = new Province("Colombie-Britannique", 
                      "Victoria", 
                      "NPD",
                      "John Horgan",
                      "Liberal",
                      "Shirley Bond",
                      "Janet Austin",
                      "La foresterie, les pâtes et papiers, la pêche, l'industrie minière et vinicole",
                      "La capitale, Victoria, est un centre touristique et sert de port d’attache à la flotte du Pacifique de la Marine canadienne."
                      );  

let ab = new Province("Alberta", 
                      "Edmonton", 
                      "United Conservative",
                      "Jason Kenney",
                      "NPD",
                      "Rachel Notley",
                      "Salma Lakhani",
                      "Première productrice de pétrole et de gaz du Canada, agriculture et exploitation bovines",
                      "Cette province, tout comme le célèbre lac Louise situé dans les montagnes Rocheuses, a été nommée en l’honneur de la princesse Louise Caroline Alberta, quatrième fille de la reine Victoria."
                      ); 


let mb = new Province("Manitoba", 
                      "Winnipeg", 
                      "Progressive Conservative",
                      "Heather Stefanson",
                      "NPD",
                      "Wab Kinew",
                      "Janice Filmon",
                      "L'agriculture, l’exploitation minière et la production d’hydroélectricité",
                      "compte la plus grande proportion d’Autochtones de toutes les provinces, à plus de 15 pour 100 de sa population."
                      );  

let nb = new Province("Nouveau-Brunswick", 
                      "Fredericton", 
                      "Progressive Conservative",
                      "Blaine Higgs",
                      "Liberal",
                      "Roger Melanson",
                      "Brenda Murphy",
                      "La foresterie, l’agriculture, la pêche, les mines, la transformation des aliments et le tourisme",
                      "La seule province officiellement bilingue"
                      ); 

let ns = new Province("Nouvelle-Écosse", 
                      "Halifax", 
                      "Progressive Conservative",
                      "Tim Houston",
                      "Liberal",
                      "Iain Rankin",
                      "Arthur Joseph LeBlanc",
                      "L'exploitation du charbon, la foresterie et l'agriculture",
                      "la construction navale, à la pêche et à la marine marchande profite également de l’exploration pétrolière et gazière en mer"
                      );  

let sk = new Province("Saskatchewan", 
                      "Regina", 
                      "Saskatchewan Party",
                      "Scott Moe",
                      "NPD",
                      "Ryan Meili",
                      "Russell Mirasty",
                      "productrice de céréales, du pétrole et du gaz naturel",
                      "autrefois surnommée « le grenier du monde » et « la province du blé », possède 40 pour 100 des terres arables du Canada"
                      ); 

let nu = new Province("Nunavut", 
                      "Iqaluit", 
                      "Consensus government",
                      "P.J. Akeeagok",
                      "Aucun",
                      "Personne",
                      "Eva Aariak",
                      "mines d’or, de plomb, de cuivre, de diamants et de zinc, et des gisements de pétrole et de gaz",
                      "..."
                      ); 

let nt = new Province("Territoires du Nord-Ouest", 
                      "Yellowknife", 
                      "Consensus government",
                      "Caroline Cochrane",
                      "Aucun",
                      "Personne",
                      "Margaret Thom",
                      "mines d’or, de plomb, de cuivre, de diamants et de zinc, et des gisements de pétrole et de gaz",
                      "..."
                      ); 

let yt = new Province("Yukon", 
                      "Whitehorse", 
                      "Liberal",
                      "Sandy Silver",
                      "Parti du Yukon",
                      "Currie Dixon",
                      "Angélique Bernard",
                      "Les mines continuent d’ailleurs d’occuper une grande place dans l’économie du Yukon",
                      "..."
                      ); 

let pe = new Province("Île-du-Prince-Édouard", 
                      "Charlottetown", 
                      "Progressive Conservative",
                      "Dennis King",
                      "Vert",
                      "Peter Bevan-Baker",
                      "Antoinette Perry",
                      "la plus petite des provinces, est reconnue pour ses plages, sa terre rouge et son agriculture, particulièrement sa production de pommes de terre",
                      "Berceau de la Confédération"
                      ); 

provincesInfo = [ nl, bc, ns, qc, on, yt, nt, nu, pe, nb, mb, sk, ab]


