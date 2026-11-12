# Hundpensionatet Tassen

## Om projektet

Hundpensionatet Tassen är en hemsida som tillhör ett hundpensionat. Där kan besökare hitta information om verksamheten och olika tjänster för hundar. Besökare kan även boka en plats för sin hund och få information om vädret.

## Layout och design

Jag har använt Flexbox för att placera och centrera olika element på min webbsida, till exempel navigeringsmenyn och väderdelen. Jag valde Flexbox eftersom det är enkelt att styra hur elementen placeras.

Jag har använt CSS Grid för att visa mina tjänstekort i rader och kolumner. Jag valde Grid eftersom det gör layouten tydlig och hjälper mig att placera korten på ett organiserat sätt.

## Scope i JavaScript

Jag använder `forEach()` för att gå igenom mina sparade bokningar. Parametern `hunden` innehåller en bokning i taget. Jag kan använda `hunden` inne i callback-funktionen eftersom den tillhör funktionens lokala scope. Jag kan inte använda `hunden` utanför funktionen eftersom parametern bara finns tillgänglig inne i funktionen.


## forEach i JavaScript

Jag har använt `forEach()` för att gå igenom mina sparade bokningar, en bokning i taget, och visa dem på sidan. Jag valde `forEach()` eftersom det är enklare och gör koden kortare och lättare att läsa. Till skillnad från en vanlig `for`-loop behöver jag inte själv skriva en räknare med `i++`.