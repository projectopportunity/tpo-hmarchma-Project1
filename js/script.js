/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/*
Selected quote objects and their properties held in an array 'quotes'.
Each object has a quote and a source property. 
3 quotes have a citation property. 
4 quotes have a year property.
*/
//Exceeds: Added property of type for quotes from literature
const quotes = [ 
    {
      quote: "Believe you can and you're halfway there.", 
      source: "Theodore Roosevelt"
    },
    {
      quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", 
      source: "Albert Einstein",
      year: "1930"
    },
    {
      quote: "It is never too late to be what you might have been.", 
      source: "George Eliot", 
      year: "1884"
    },
    {
      quote: "There is some good in this world, and it's worth fighting for.", 
      source: "J.R.R. Tolkien", 
      citation: "The Two Towers",
      type: "Literary"
    },
    {
      quote: "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?", 
      source: "L.M. Montgomery", 
      citation: "Anne of Green Gables", 
      year: "1908",
      type: "Literary"
    },
    {
      quote: "The answer to the ultimate question of life, the universe and everything is 42.", 
      source: "Douglas Adams", 
      citation: "The Hitchhiker's Guide to the Galaxy", 
      year: "1979",
      type: "Literary"
    },
];

/***
 * `getRandomQuote` function
***/
/* randomQuote function generates a random number between 0 and 5, 
since there are 6 objects in the 'quotes' array.
then the quote in the array is returned and stored as 'randomlySelectedQuote' in the printQuote function
*/
function getRandomQuote() {
    const randomQuoteNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteNumber];
}

//Exceeds: Function changeBackgroundColor generates a random color and changes the background when the quote changes
function changeBackgroundColor(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  return document.body.style.background = backgroundColor;

}
/***
 * `printQuote` function
***/
/* printQuote function takes the randomlySelectedQuote and runs through
if statements to add citations/years as needed
*/

function printQuote() {
    let randomlySelectedQuote = getRandomQuote(); //randomlySelectedQuote variable calls the getRandomQuote function
    let quoteAppearing = ''; //Initializes the quoteAppearing variable as blank
      quoteAppearing = //Changes quoteAppearing to the quote and citation
        `<p class= "quote">${randomlySelectedQuote.quote}</p>
         <p class= "source">${randomlySelectedQuote.source}`;
    
    //if statement checks to see if there is a citation for the randomlySelectedQuote
    if (randomlySelectedQuote.citation){
      quoteAppearing += `<span class= "citation">${randomlySelectedQuote.citation}</span>`;
      } 
    //if statement checks to see if there is a year for the randomlySelectedQuote   
    if (randomlySelectedQuote.year) {
      quoteAppearing += `<span class= "year">${randomlySelectedQuote.year}</span>`;
    }
    //Exceeds: if statement checks to see if there is a type for the randomlySelectedQuote   
     if (randomlySelectedQuote.type) {
      quoteAppearing += `<span class= "type">, ${randomlySelectedQuote.type}</span>`;
    }
    quoteAppearing += `</p>`;

    //returns the string quoteAppearing on the page
    document.getElementById('quote-box').innerHTML = quoteAppearing;
    changeBackgroundColor();
  }



//Exceeds: Quote automatically refreshes every 20 seconds
var intervalID = window.setInterval(printQuote, 20000);



    



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);