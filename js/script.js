let QUOTEAPI = 'http://api.quotable.io/random'
let displayQuoteInParagraph = document.getElementById('quotes')
let timer = document.getElementById('timer')
let inputArea = document.getElementById('textArea')
let startTime
let endTime = null;

const keyListener = inputArea.addEventListener('input', () => {

    //starting time just after a key is pressed

    const arrayQuote = displayQuoteInParagraph.querySelectorAll('span')
    const arrayValue = inputArea.value.split('')
    

    let noOfchar= 0;
    let correct = true;
    arrayQuote.forEach((span, index) => {
        noOfchar++;
        const char1 = arrayValue[index]
        if(char1 == null){
            span.classList.remove('correct')
            span.classList.remove('wrong')
            correct = false;
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
    if(correct) {
        
        start();
        
    }
})

function getQuote() {
    return fetch(QUOTEAPI)
    .then(response => response.json())
    .then(data => data.content)

}



async function start() {
    let quote = await getQuote()
    displayQuoteInParagraph.innerHTML = ''
    // displayQuoteInParagraph.innerText = quote
    quote.split('').forEach(character => {
        const span = document.createElement('span')
        span.innerText = character
        displayQuoteInParagraph.appendChild(span)
    })

    inputArea.value = null
    
    startTimer()

    
    
}



function startTimer(){
    timer.innerText = 0
    startTime = new Date();
    setInterval(() => {

        timer.innerText = getTime();
    }, 1000)
}

function getTime(){
    return Math.floor((new Date() - startTime) / 1000)
}


//defining main function 
function startGame() {
    start()

}


//main function called just after the game starts 
startGame()