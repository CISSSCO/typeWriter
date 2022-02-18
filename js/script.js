let QUOTEAPI = 'http://api.quotable.io/random'
let displayQuoteInParagraph = document.getElementById('quotes')
let timer = document.getElementById('timer')
let inputArea = document.getElementById('textArea')
let startTime
let endTime = null;

let countWords = 0
let prevWordTyped = 0
let noOfchar = 0

const keyListener = inputArea.addEventListener('input', () => {

    countWords++
    if(countWords === 1){
        startTimer()
    }
    
    const arrayQuote = displayQuoteInParagraph.querySelectorAll('span')
    const arrayValue = inputArea.value.split('')

    let end = true;
    arrayQuote.forEach((span, index) => {
        noOfchar++;
        const char1 = arrayValue[index]
        if(char1 == null){
            span.classList.remove('correct')
            span.classList.remove('wrong')
            end = false;
        }
        else if(char1 === span.innerText){
            span.classList.add('correct')
            span.classList.remove('wrong')
        }
        else{
            span.classList.add('wrong')
            span.classList.remove('correct')
        }
    })
    if(end) {
        
        start();
        prevWordTyped = countWords
        countWords = 0
        
    }
})

function getQuote() {
    return fetch(QUOTEAPI)
    .then(response => response.json())
    .then(data => data.content)

}



async function start() {
    noOfchar = 0
    timer.innerText = 0
    let quote = await getQuote()
    displayQuoteInParagraph.innerHTML = ''
    // displayQuoteInParagraph.innerText = quote
    quote.split('').forEach(character => {
        const span = document.createElement('span')
        span.innerText = character
        displayQuoteInParagraph.appendChild(span)
        noOfchar++;
    })

    inputArea.value = null
    

    
    
}



function startTimer(){
 
    timer.innerText = 0

    startTime = new Date();
    setInterval(() => {

        timer.innerText = getTime();
    }, 1000)
}

function getTime(){
    if(countWords === 0){
        return 0;
    }
    return Math.floor((new Date() - startTime) / 1000)
}


//defining main function 
function startGame() {
    start()
}


//main function called just after the game starts 
startGame()