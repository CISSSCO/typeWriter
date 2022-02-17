let QUOTEAPI = 'http://api.quotable.io/random'
let displayQuoteInParagraph = document.getElementById('quotes')

let startTime = null;
let endTime = null;

function getQuote() {
    return fetch(QUOTEAPI)
    .then(response => response.json())
    .then(data => data.content)
}

async function displayQuote() {
    let quote = await getQuote()
    // displayQuoteInParagraph.innerText = quote
    let characters = quote.split("").map((char) => {
        let span = document.createElement("span");
        span.innerText = char;
        displayQuoteInParagraph.appendChild(span);
    })
    
}





//defining main function 
function startGame() {
    displayQuote()

}


//main function called just after the game starts 
startGame()