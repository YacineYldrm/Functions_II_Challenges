// #####################################
// 
//         Functions II Uebungen
// 
// #####################################


// ----------------------------------
//      arrow-functions level 1_1
// ----------------------------------

console.log("%c arrow functions level 1_1", "color: blue; background-color: gold");

function intro1()
{
    console.log("Hello Function");
}

const introArrow = () => console.log("Hello Arrow-Function")

intro1();
introArrow();

// ----------------------------------
//      arrow-functions level 1_2
// ----------------------------------

console.log("%c arrow functions level 1_2", "color: blue; background-color: gold");

function displayHallo(userInput)
{
    document.write(userInput, "<br>");
}
displayHallo("Hallo");

function showSum(x, y)
{
    document.write(x + y, "<br>");  
}
showSum(2, 3);

function showType(userInput)
{
    document.write(typeof userInput, "<br>");
}
showType(8);
showType(i = true);
showType(j = "hi");
showType(k = 1);
showType(l = {name: "John"});
showType(a = [0,1]);

document.write("<br>", "Konvertierung in Arrow-Functions:", "<br>", "<br>");

const displayHalloArrow = (userInput) => document.write(userInput, "<br>",);

displayHalloArrow("Hallo");

const showSumArrow = (x, y) => document.write(x + y, "<br>");

showSumArrow(2, 3);

const showSumArrow2 = (x, y) => window.alert(x * y);

showSumArrow2(2, 3);

const showTypeArrow = (userInput) => document.write(typeof userInput, "<br>");

showTypeArrow(8);
showTypeArrow(i = true);
showTypeArrow(j = "hi");
showTypeArrow(k = 1);
showTypeArrow(l = {name: "John"});
showTypeArrow(a = [0,1]);

document.write("<br>", "Mein:e Superheld:in:", "<br>", "<br>");

// ----------------------------------
//      arrow-functions level 1_4
// ----------------------------------

console.log("%c arrow functions level 1_4", "color: blue; background-color: gold");

const heroName = "Iron Man";
const heroPower = "Seine Rüstung ist mit modernster Technik ausgesatattet!";
const heroEnemy = "Mandarin"

const displayHero = (hero, power, enemy) => document.write(`Mein:e Lieblingsheld:in ist: ${hero}. Er/sie hat die Fähigkeit: ${power}. Sein/ihr größte/r Gegner:in ist: ${enemy}`);

displayHero(heroName, heroPower, heroEnemy);