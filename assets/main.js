//Trying to get the current time of when the app is opened by user.
const dt = new Date();
document.getElementById("time_").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());

//Now generating the stoic quotes, API comes from this webiste: https://stoicquotesapi.com
const displayQuote = document.querySelector(".quote");
const dipslayAuthor = docment.querySelector(".author");
const newQuoteButton = document.querySelector(".btn_continue");

async function getQuote(){
    //calling the API
    const apiResponse = await fetch(
        `https://stoicquotesapi.com/v1/api/quotes`
    );
    const theData = await apiResponse.json();
    const quote = theData.quote;
    const author = theData.author;
    
    displayQuote.innerHTML = quote;
    dipslayAuthor.innerHTML = author;

}

newQuoteButton.addEventListener("click",getQuote);

getQuote();