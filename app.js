let result = document.getElementById("result")
const honapok = [
    { nev: "Január", evszak: "Tél", napok: 31 },
    { nev: "Február", evszak: "Tél", napok: 28 }, // Szökőévben 29
    { nev: "Március", evszak: "Tavasz", napok: 31 },
    { nev: "Április", evszak: "Tavasz", napok: 30 },
    { nev: "Május", evszak: "Tavasz", napok: 31 },
    { nev: "Június", evszak: "Nyár", napok: 30 },
    { nev: "Július", evszak: "Nyár", napok: 31 },
    { nev: "Augusztus", evszak: "Nyár", napok: 31 },
    { nev: "Szeptember", evszak: "Ősz", napok: 30 },
    { nev: "Október", evszak: "Ősz", napok: 31 },
    { nev: "November", evszak: "Ősz", napok: 30 },
    { nev: "December", evszak: "Tél", napok: 31 }
];

function honapInfo(honapSzam) {

    return honapok[honapSzam-1];
}

function inditas(){
try{
    let eredmeny = Number(document.getElementById("honapInput").value);
    
    if (isNaN(eredmeny)) {
        
        throw new Error("Nem számot adtál meg");
    }
    else if (eredmeny<1 || eredmeny>12) {

        throw new Error("Érvénytelen hónap");
    }
    let honapID=honapInfo(eredmeny);
    console.log(`Hónap: ${honapID.nev} | Évszak: ${honapID.evszak} | Napok száma: ${honapID.napok}`);

    }
catch (error) {
    console.log("Hiba történt: " + error.message);
}
}
