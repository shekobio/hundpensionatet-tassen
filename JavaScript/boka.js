const hund = document.getElementById("hund");
const datum = document.getElementById("datum");
const id = document.getElementById("id");
const form = document.querySelector("#form");
const meddelande = document.querySelector("#meddelande");


let bokning = JSON.parse(localStorage.getItem("bokning") || "[]");

form.addEventListener("submit", function(event) {
       
    event.preventDefault();

    const hunden = {
        id: id.value,
        name: hund.value,
        datum: datum.value,
        meddelande: meddelande.value.trim() === "" ? "Ingen meddelande" : meddelande.value
    };

    
    




    if (hund.value.trim() !==" " && datum.value !== " " && id.value.trim() !== " ")
    {
          bokning.push(hunden);
          
      
      
    }

     
    sparaBokning();
    visaBokningar();
   

    
  
});

function sparaBokning(){
        
         localStorage.setItem("bokning", JSON.stringify(bokning));
         
}

function visaBokningar() {
  
  const lista = document.querySelector("#lista");

  lista.innerHTML = "";

  bokning.forEach(function(hunden) {
    const li = document.createElement("li");

    li.textContent = hunden.id + " " +  hunden.name + " " + hunden.datum + " "  + hunden.meddelande;

    
    const knapp = document.createElement("button");
    knapp.textContent = "Avboka";
    knapp.classList.add("ta-bort");   
    knapp.dataset.id = hunden.id;
    knapp.style.color = "white";
    knapp.style.border = "none";
    knapp.style.borderRadius = "8px";
    knapp.style.padding = "8px 15px";
    knapp.style.marginLeft = "15px";
    knapp.style.backgroundColor = "#75462F";
    knapp.style.borderRadius = "8px";
  
    li.appendChild(knapp);
    lista.appendChild(li);
  });

   
}


function taBortBokningar() {
  document.querySelector("#lista").addEventListener("click", (event) => {

    if (event.target.matches("button.ta-bort")) {

      const id =(event.target.dataset.id);

      bokning = bokning.filter(hunden => hunden.id !== id);

      

    }
    sparaBokning();
    visaBokningar();

  });
  
}
   

 taBortBokningar();