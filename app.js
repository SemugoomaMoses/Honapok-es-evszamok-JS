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

function inditas(){
    try {
    let eredmeny = Number(document.getElementById("honapInput").value)-1;
   console.log(`Hónap: ${honapok[eredmeny].nev} | Évszak: ${honapok[eredmeny].evszak} | Napok száma: ${honapok[eredmeny].napok}`);

    } catch (hiba) {
      result.innerHTML = "Hiba történt: Hibás adatot adtál meg";
      
    return null;
  }
    
                       
}

