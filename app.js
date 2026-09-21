let result = document.getElementById("result")
const honapok = [
    { nev: "Január", evszak: "Tél", napok: 31, ünnep: ["Újév"] },
    { nev: "Február", evszak: "Tél", napok: 28, ünnep: ["Valentin-nap"] }, // Szökőévben 29
    { nev: "Március", evszak: "Tavasz", napok: 31, ünnep: ["Március 15."] },
    { nev: "Április", evszak: "Tavasz", napok: 30, ünnep: ["Húsvét"] },
    { nev: "Május", evszak: "Tavasz", napok: 31, ünnep: ["Munka ünnepe"] },
    { nev: "Június", evszak: "Nyár", napok: 30, ünnep: ["Nincs"] },
    { nev: "Július", evszak: "Nyár", napok: 31, ünnep: ["Nincs"] },
    { nev: "Augusztus", evszak: "Nyár", napok: 31, ünnep: ["Szent István ünnepe"] },
    { nev: "Szeptember", evszak: "Ősz", napok: 30, ünnep: ["Nincs"] },
    { nev: "Október", evszak: "Ősz", napok: 31, ünnep: ["Október 23."] },
    { nev: "November", evszak: "Ősz", napok: 30, ünnep: ["Mindenszentek"] },
    { nev: "December", evszak: "Tél", napok: 31, ünnep: ["Karácsony"] }
];

function honapInfo(honapSzam) {

    return honapok[honapSzam-1];
}


function inditas(){
try{
    let eredmeny = Number(document.getElementById("honapInput").value);
    
    while (isNaN(eredmeny) || eredmeny < 1 || eredmeny > 12) {
        if (isNaN(eredmeny)) {
            result.textContent = "Hibás adat! Nem szám!";
        } 
        else if (eredmeny < 1 || eredmeny > 12) {
            result.textContent = "Hibás adat! Adj meg egy 1 és 12 közötti hónapszámot!";
        }

        document.getElementById("honapInput").value = "";
        document.getElementById("honapInput").focus();

        return;
    }

    let honapID=honapInfo(eredmeny);
    result.textContent=(`Hónap: ${honapID.nev} | Évszak: ${honapID.evszak} | Napok száma: ${honapID.napok} | Ünnepek: ${honapID.ünnep.join(", ")}`);
         
        
    }
catch (error) {
    result.textContent=("Hiba történt: " + error.message);
    
}
        document.getElementById("honapInput").value = "";
        document.getElementById("honapInput").focus();
}
