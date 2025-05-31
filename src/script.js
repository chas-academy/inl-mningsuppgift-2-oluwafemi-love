// Definera array av namn
let people = [
  "Femi",
  "Tobi",
  "Jael",
  "Bori",
  "Chinedu",
  "Aisha",
  "Ngozi",
  "Temi",
  "Emeka",
  "Zainab",
  "Ayodele",
  "Kelechi",
  "Ifeoma",
  "Sani",
  "Bolaji",
  "Nneka",
  "Yusuf",
  "Funmi",
  "Obinna",
  "Hadiza",
  "Lisa"
];

export function initSearch(people) {
  // rör ej denna rad

  // Hämta HTML-element
  let searchInput = document.getElementById("searchInput");
  let searchBtn = document.getElementById("searchBtn");
  let resultDisplay = document.getElementById("resultDisplay");

  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click", () => {
    // 1. Hämta texten i searchInput.value
    let searchQuery = searchInput.value;

    // 2. Skapa en boolean för found
    let foundSearchQuery = false;

    //This code Works:
    // for (let i = 0; i < people.length; i++) {

    //   if (searchQuery === people[i]) {
    //     resultDisplay.innerText = "Namn hittades!";
    //     foundSearchQuery = true;
    //     break;
    //   } else if(searchQuery !== people[i]) {
    //     resultDisplay.innerText = "Namn hittades inte.";
    //     foundSearchQuery = false;
    //   }
    // }

    // 3. Loopa igenom people-arrayen
    for (let prsnName of people){
      if(searchQuery.trim().toLowerCase() === prsnName.toLowerCase()){
        foundSearchQuery = true;
        break;
      }
    }

    if(foundSearchQuery){
      resultDisplay.innerHTML = `Namn hittades: ${searchQuery}`;
    }else{
      resultDisplay.innerHTML = "Namn hittades inte.";
    }


    // 4. Jämför texten med varje namn i arrayen

    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true

    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
  });
}

// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});
