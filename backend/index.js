const express = require('express');
const app = express();

const quotes = [
  "Give me by all means the shorter and nobler life, instead of one that is longer but of less account! </br></br> - Epictetus",
  "A ship should not ride on a single anchor, nor life on a single hope. </br></br> - Viktor Frankl",
  "Do not try to seem wise. </br></br> - Friedrich Nietzsche",
  "Know you not that a good person does nothing for appearance sake, but for the sake of having done right? </br></br> - Heraclitus",
  "Know, first, who you are, and then adorn yourself accordingly. </br></br> - Heraclitus",
  "If evil be said of thee, and if it be true, correct thyself; if it be a lie, laugh at it. </br></br> - Friedrich Nietzsche",
  "None are free who are not master of themselves. </br></br> - Marcus Aurelius",
  "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will. </br></br> - Viktor Frankl",
  "We are worried by real problems so much as by our imagined anxieties about real problems. </br></br> - Epictetus",
  "If you want to improve, be content to be thought foolish and stupid. </br></br> - Heraclitus",
  "The key is to keep company only with people who uplift you, whose presence calls forth your best. </br></br> - Cato",
  "Circumstances don't make the person, they only reveal the person to oneself. </br></br> - Seneca",
  "Seek not the good in external things; seek it in yourselves. </br></br> - Native American Proverb",
  "You are a little soul carrying around a corpse. </br></br> - Epictetus",
  "Only the educated are free. </br></br> - Viktor Frankl",
  "Wealth consists not in having great possessions, but in having few wants. </br></br> - Zen proverb",
  "Don't explain your philosophy. Embody it. </br></br> - Epictetus",
  "He who has a why to live for can beat almost any how. </br></br> - Marcus Aurelius",
  "There are two wolves fight inside all of us. The one is evil, the second one is good.. Which wolf will win? The one you feed. </br></br> - Native American Proverb",
  "The happiness of your life depends upon the quality of your thoughts. </br></br> - Epictetus",
  "You don't have to turn this into something, it doesn't have to upset you. </br></br> - Friedrich Nietzsche"
];

app.get('/quotes', (req, res) => {
  const randomQuotes = getRandomQuotes();
  res.send(randomQuotes);
});

const getRandomQuotes =()=> {
  const quotesCount = quotes.length;
  const randomIndex1 = Math.floor(Math.random() * quotesCount);
  let randomIndex2 = Math.floor(Math.random() * quotesCount);
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * quotesCount);
  }
  return [quotes[randomIndex1], quotes[randomIndex2]];
}


app.listen(3500,()=>{
    console.log('Server is live on port 3500');
})