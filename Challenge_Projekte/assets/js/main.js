// #####################################
// 
//         Functions II Uebungen
// 
// #####################################


// ----------------------------------
//      Project: Background-color
// ----------------------------------

const showColor = () =>
{
    event.preventDefault();
    const colorInput = document.body.querySelector('#colorInput').value;
    const bgColor = document.body.querySelector('.bgColor');
    
    if(colorInput.includes("https"))
    {
        bgColor.style.background = `url(${colorInput}) center / cover, no-repeat`;
    }
    else
    {
        bgColor.style.background = colorInput;
    }
}

// ----------------------------------
//       Project: Score Keeper
// ----------------------------------

const resetScoreboard = document.body.querySelector('#resetScore');

// Home button
const addOneBtnHome = document.body.querySelector('#addOneHome');
const addTwoBtnHome = document.body.querySelector('#addTwoHome');
const addThreeBtnHome = document.body.querySelector('#addThreeHome');

// Away button
const addOneBtnAway = document.body.querySelector('#addOneAway');
const addTwoBtnAway = document.body.querySelector('#addTwoAway');
const addThreeBtnAway = document.body.querySelector('#addThreeAway');

const scoreDisplayHome = document.body.querySelector('#scoreHome');
const scoreDisplayAway = document.body.querySelector('#scoreAway');

let pointsHome = 0;
let pointsAway = 0;

scoreDisplayHome.textContent = pointsHome;
scoreDisplayAway.textContent = pointsAway;

const resetScore = () =>
{
    scoreDisplayHome.textContent = pointsHome -= pointsHome;
    scoreDisplayAway.textContent = pointsAway -= pointsAway;
}

const addOneHome = () => 
{
    pointsHome++
    scoreDisplayHome.textContent = pointsHome;
}

const addTwoHome = () => 
{
    pointsHome += 2;
    scoreDisplayHome.textContent = pointsHome;
}

const addThreeHome = () => 
{
    pointsHome += 3;
    scoreDisplayHome.textContent = pointsHome;
}

const addOneAway = () => 
{
    pointsAway++
    scoreDisplayAway.textContent = pointsAway;
}

const addTwoAway = () => 
{
    pointsAway += 2;
    scoreDisplayAway.textContent = pointsAway;
}

const addThreeAway = () => 
{
    pointsAway += 3;
    scoreDisplayAway.textContent = pointsAway;
}

// ----------------------------------
//       Project: Adition Game
// ----------------------------------



let firstValue = Number(valueOne.textContent = Math.floor(Math.random() * 100)); 
let secondValue = Number(valueTwo.textContent = Math.floor(Math.random() * 100));
// console.log(solution);


const checkResult = () =>
{
    const resultInput = Number(document.body.querySelector('#resultInput').value);
    const valueOne = document.body.querySelector('#valueOne');
    const valueTwo = document.body.querySelector('#valueTwo');
    const displayFeedback = document.body.querySelector('#displayFeedback');
    let solution = firstValue + secondValue;

    event.preventDefault()
    if(resultInput === solution)
    {
        displayFeedback.textContent = "Das ist richtig!"
        displayFeedback.style.color = "green";
    }
    else
    {
        displayFeedback.textContent = "Leider falsch!"
        displayFeedback.style.color = "red";
    }
}

const randValues = () =>
{
    event.preventDefault()
    
    firstValue = Number(valueOne.textContent = Math.floor(Math.random() * 100));
    secondValue = Number(valueTwo.textContent = Math.floor(Math.random() * 100));

}