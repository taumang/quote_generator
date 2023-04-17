//Trying to get the current time of when the app is opened by user.
const dt = new Date();

document.getElementById("time_").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());


const getQuote = () =>{
    const quote = [
        {
          text: "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!",
          author: "Epictetus",
          image: "./img/epictetus.jpg"
        },
        {
          text: "A ship should not ride on a single anchor, nor life on a single hope.",
          author: "Viktor Frankl",
          image: "./img/1 d2ELdzOn3DC_vTLJTDYq9g.jpg"
          
        },
        {
          text: "Do not try to seem wise.",
          author: "Friedrich Nietzsche",
          image: "./img/8471f8a69b5b3ea5b7dc91e7bf148933.jpg"
          
        },
        {
          text: "Know you not that a good person does nothing for appearance sake, but for the sake of having done right?",
          author: "Heraclitus",
          image: "./img/Heraclitus_0.jpg"
          
        },
        {
          text: "If evil be said of thee, and if it be true, correct thyself; if it be a lie, laugh at it.",
          author: "Friedrich Nietzsche",
          image: "./img/8471f8a69b5b3ea5b7dc91e7bf148933.jpg"
        },
        {
          text: "None are free who are not master of themselves.",
          author: "Marcus Aurelius",
          image: "./img/marcusaureliusdailystoic-scaled.jpg"
        },
        
      ];


const randomNumber = Math.floor(Math.random() * quote.length)
const quotes = quote[randomNumber]
const imageURL = `url(${quotes.image})`

document.getElementById('quote').innerHTML = quotes.text;
document.getElementById('author').innerHTML = `- ${quotes.author}`
document.getElementById('author_image').style.backgroundImage = imageURL

}



