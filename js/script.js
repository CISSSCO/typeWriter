const QUOTEAPI = 'http://api.quotable.io/random'
const displayQuoteInParagraph = document.getElementById('quotes')

function getQuote() {
    return fetch(QUOTEAPI)
    .then(response => response.json())
    .then(data => data.content)
}

async function displayQuote() {
    const quote = await getQuote()
    displayQuoteInParagraph.innerText = quote
    
}

displayQuote()