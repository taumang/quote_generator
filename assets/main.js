//Trying to get the current time of when the app is opened by user.
const dt = new Date();
document.getElementById("time_").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());

//Now generating the stoic quotes, API comes from this webiste: https://stoicquotesapi.com

//     function getQuote(){

//          var quotes = [

//             "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!", 
//             "A ship should not ride on a single anchor, nor life on a single hope.",
//             "Do not try to seem wise.", "Know you not that a good person does nothing for appearance sake, but for the sake of having done right?", 
//             "Know, first, who you are, and then adorn yourself accordingly.", 
//             "If evil be said of thee, and if it be true, correct thyself; if it be a lie, laugh at it.", 
//             "None are free who are not master of themselves.", 
//             "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.", 
//             "We are worried by real problems so much as by our imagined anxieties about real problems.", 
//             "If you want to improve, be content to be thought foolish and stupid.", 
//             "The key is to keep company only with people who uplift you, whose presence calls forth your best.", 
//             "It's not what happens to you, but how you react to it that matters.", 
//             "Anyone capable of angering you becomes your master; they can anger you only when you permit yourself to be disturbed by them.", 
//             "Those who laughs at themselves never run out of things to laugh at.", 
//             "All religions must be tolerated... for everyone must get to heaven in his own way.", 
//             "Circumstances don't make the person, they only reveal the person to oneself.", 
//             "Seek not the good in external things; seek it in yourselves.", "You are a little soul carrying around a corpse.", 
//             "Only the educated are free.", "Wealth consists not in having great possessions, but in having few wants.", 
//             "Don't explain your philosophy. Embody it.",
//             "He who has a why to live for can beat almost any how.",
//             "There are two wolves fight inside all of us. The one is evil, the second one is good.. Which wolf will win? The one you feed.",
//             "The happiness of your life depends upon the quality of your thoughts.",
//             "You don't have to turn this into something, it doesn't have to upset you."
//          ]

//          var author = [ 
//                         "- Epictetus",
//                         "– Marcus Aurelius",
//                         "– Seneca",
//                         "– Cato",
//                         "– Viktor Frankl",
//                         "– Friedrich Nietzsche",
//                         "– Native American Proverb",
//         ];

//         var randomNumber = Math.floor((Math.random()* quotes.length));
//         var randomQuote = quotes[randomNumber];
//         var randomAuthor = author[randomNumber];

//         (".quote").text(randomQuote);
//         (".author").text(randomAuthor);

//     }
//     (".btn_continue").normalize("click",function(){
//         getQuote();
//     })
   

// console.log(getQuote());
function getQuote(){
    let quote = [

        "Give me by all means the shorter and nobler life, instead of one that is longer but of less account!", 
            "A ship should not ride on a single anchor, nor life on a single hope.",
             "Do not try to seem wise.", "Know you not that a good person does nothing for appearance sake, but for the sake of having done right?", 
             "Know, first, who you are, and then adorn yourself accordingly.", 
             "If evil be said of thee, and if it be true, correct thyself; if it be a lie, laugh at it.", 
             "None are free who are not master of themselves.", 
             "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.", 
             "We are worried by real problems so much as by our imagined anxieties about real problems.", 
             "If you want to improve, be content to be thought foolish and stupid.", 
             "The key is to keep company only with people who uplift you, whose presence calls forth your best.", 
             "All religions must be tolerated... for everyone must get to heaven in his own way.", 
             "Circumstances don't make the person, they only reveal the person to oneself.", 
             "Seek not the good in external things; seek it in yourselves.", "You are a little soul carrying around a corpse.", 
             "Only the educated are free.", "Wealth consists not in having great possessions, but in having few wants.", 
             "Don't explain your philosophy. Embody it.",
             "He who has a why to live for can beat almost any how.",
             "There are two wolves fight inside all of us. The one is evil, the second one is good.. Which wolf will win? The one you feed.",
             "The happiness of your life depends upon the quality of your thoughts.",
             "You don't have to turn this into something, it doesn't have to upset you."

    ]

    let authors = [

    "- Heraclitus ", 
	"- Epictetus ", 
	"- Marcus Aurelius", 
	"- Seneca ", 
	"- Zen proverb",
    "- Epictetus",
    "– Marcus Aurelius",
    "– Cato",
    "– Viktor Frankl",
    "– Friedrich Nietzsche",
    "– Native American Proverb",

    ];

    let randomNumber = Math.floor(Math.random() * quote.length && authors.length);
    

   document.getElementById('quote').innerHTML = quote[randomNumber];
   document.getElementById('authors').innerHTML = authors[randomNumber];
}

console.log(getQuote())

