// Select HTML Element

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const ampmElement = document.getElementById("ampm");
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");

// Days & Months

const days = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
];

const months = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

// Update Clock Function

function updateClock() {
  // Get current date and time

  const now = new Date();

  // Get Hours, Minutes and Second

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();


  // Add Leading Zero

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Update Time

  hoursElement.textContent = formattedHours;
  minutesElement.textContent = formattedMinutes;
  secondsElement.textContent = formattedSeconds;

  

  // Update Day

  const currentDay = days[now.getDay()];

  dayElement.textContent = currentDay;

  // Update Date

  const currentDate = now.getDate();
  const currentMonth = months[now.getMonth()];
  const currentYear = now.getFullYear();
  dateElement.textContent = `${currentDate} ${currentMonth.toLowerCase()} ${currentYear}`;
}

function visaStatus (){
   const statusText = document.getElementById("status-text");
   const statusDot = document.getElementById("status-dot");

    const now = new Date();

    const day = now.getDay();
    const hours = now.getHours();

    if (day >= 1 && day <= 5 && hours >= 7 && hours < 18){
       
        statusText.innerHTML = "<h4>Öppet just nu</h4>";
        statusDot.style.backgroundColor = "green";
    }
    else if (day === 6 && hours >= 9 && hours < 14){
         statusText.innerHTML = "<h4>Öppet just nu</h4>"; 
        statusDot.style.backgroundColor = "green";
    }
    else{
        statusText.innerHTML = "<h4>Stängt just nu</h4>"; 
        statusDot.style.backgroundColor = "red";
    }
        
}

//Show status immediately
visaStatus();
// Run Clock Immediately
updateClock();

// Update Every Second
setInterval(visaStatus,60000);
setInterval(updateClock, 1000);

const kommentar = document.getElementById("kommentar");
const namn = document.getElementById("namn");
const laggtillKnapp = document.getElementById("lägg-till");
const omdomenknapp = document.getElementById("knapp-omdomen");


let kundkommentar = JSON.parse(localStorage.getItem("kundkommentar") || "[]");


laggtillKnapp.addEventListener("click", function(event) {
    event.preventDefault();

      console.log("Knappen fungerar!");
   
      const comment = {
      kommentar: kommentar.value,
      namn: namn.value,
    };
    console.log(comment);

    if(kommentar.value.trim() !== "" && namn.value.trim() !== ""){

       kundkommentar.push(comment);

        
       sparaKommentar(); 


      kommentar.value = "";
       namn.value = ""; 
      
       

    } 
     
     
   
    
});

function sparaKommentar(){
        
         localStorage.setItem("kundkommentar", JSON.stringify(kundkommentar));
         
}



const omdomen = document.getElementById("omdomen-item")
 
let forraIndex = -1; 

omdomenknapp.addEventListener("click", function (event){
   
  event.preventDefault();
  console.log("visa knappen");
   console.log(kundkommentar.length);

   const slumptal = Math.floor(kundkommentar.length * Math.random());
  
    const ruta = document.createElement("div");
    ruta.classList.add("kommentar-ruta");
    const p = document.createElement("p");
    omdomen.innerHTML = "";
     

   
if (kundkommentar.length > 1) {
    while (slumptal === forraIndex) {
        slumptal = Math.floor(kundkommentar.length * Math.random());
    }
}

forraIndex = slumptal;
 
   
 
  
  for (let i = 0; i < kundkommentar.length ; i++){
     const föreslumptal = slumptal;
    if (slumptal == i){

    
      const valdkommentar = kundkommentar[i];
       p.textContent = "Kommentar: " + valdkommentar.kommentar + "\nNamn: " + valdkommentar.namn;
     
      
       


    const knapp = document.createElement("button");
    knapp.textContent = "Ta bort";
    knapp.classList.add("ta-bort");   
    knapp.dataset.namn = valdkommentar.namn;
    knapp.style.color = "black";
    knapp.style.border = "none";
    knapp.style.borderRadius = "8px";
    knapp.style.padding = "8px 15px";
    knapp.style.marginLeft = "15px";
    knapp.style.backgroundColor = "#feeab4";
    knapp.style.borderRadius = "8px";

      p.appendChild(knapp);
       ruta.appendChild(p);
       omdomen.appendChild(ruta);
    }
    
  }


 /*kundkommentar.forEach((comment) => {

    const ruta = document.createElement("div");
    ruta.classList.add("kommentar-ruta");
    const p = document.createElement("p");
   

   p.textContent = "Kommentar: " + comment.kommentar + "\nNamn: " + comment.namn;
    

    const knapp = document.createElement("button");
    knapp.textContent = "Ta bort";
    knapp.classList.add("ta-bort");   
    knapp.dataset.namn = comment.namn;
    knapp.style.color = "black";
    knapp.style.border = "none";
    knapp.style.borderRadius = "8px";
    knapp.style.padding = "8px 15px";
    knapp.style.marginLeft = "15px";
    knapp.style.backgroundColor = "#feeab4";
    knapp.style.borderRadius = "8px";
  
    p.appendChild(knapp);
    ruta.appendChild(p);
    omdomen.appendChild(ruta);
  
    
    
  })*/
});

function taBortKommentar() {
  document.querySelector("#omdomen-item").addEventListener("click", (event) => {
     event.preventDefault();
    console.log("Ta bort");

    if (event.target.matches("button.ta-bort")) {

      const namn =(event.target.dataset.namn);

      kundkommentar = kundkommentar.filter(comment => String(comment.namn) !== namn);

     
      
     

    sparaKommentar();
  


    }
   
   
  });
  
}
   


/*document.addEventListener("DOMContentLoaded", function () {
   visaKommentar();
   
});*/


sparaKommentar();


taBortKommentar();


const ortInput = document.getElementById("ort");
const vader_knapp = document.getElementById("vader");
const visa_resultat = document.getElementById("resultat");

   

  vader_knapp.addEventListener("click", async function(event){
    event.preventDefault();
    console.log("knapp fungerar");
    
    const ort = ortInput.value; 
    if(ort.trim() === ""){
        console.log("Ange en ort för att se vädret.");

        visa_resultat.textContent = "Ange en ort för att se vädret.";
        return;
    }

   const svar = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${ort}&count=1`);
   
   console.log(svar);
   const data = await svar.json();
   console.log(data);

    if(data.results === undefined  || data.results.length === 0){
      visa_resultat.textContent = "Orten hittades inte";
      return;
    }

   const latitude = data.results[0].latitude;

   console.log(latitude);

   const longitude = data.results[0].longitude;

    console.log(longitude);
    
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

    console.log(url);
   
    const vaderSvar = await fetch(url);
    const vaderData = await vaderSvar.json();

    const temperatur = vaderData.current.temperature_2m;

    visa_resultat.textContent = `${ort}: ${temperatur}°C`;

    console.log(temperatur);





    
 })
