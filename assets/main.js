//Trying to get the current time of when the app is opened by user.
const dt = new Date();
document.getElementById("time_").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());


const getQuote = () =>{
    const quote = [
        {
          text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
          author: "Epictetus",
          image: "epictetus.jpg"
        },
        {
          text: "A ship should not ride on a single anchor, nor life on a single hope.",
          author: "Viktor Frankl",
          image: "epictetus.jpg"
          " </br></br> - "
        },
        {
          text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
          author: "Epictetus",
          image: "epictetus.jpg"
          "Do not try to seem wise. </br></br> - Friedrich Nietzsche",
        },
        {
          text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
          author: "Epictetus",
          image: "epictetus.jpg"
          "Know you not that a good person does nothing for appearance sake, but for the sake of having done right? </br></br> - Heraclitus",
        },
        {
          text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
          author: "Epictetus",
          image: "epictetus.jpg"
          "If evil be said of thee, and if it be true, correct thyself; if it be a lie, laugh at it. </br></br> - Friedrich Nietzsche",
        },
        {
          text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
          author: "Epictetus",
          image: "epictetus.jpg"
          "None are free who are not master of themselves. </br></br> - Marcus Aurelius",
        },
        // ... add other quotes here
      ];

let randomNumber = Math.floor(Math.random() * quote.length);
document.getElementById('quote').innerHTML = quote[randomNumber.toString()];

}



