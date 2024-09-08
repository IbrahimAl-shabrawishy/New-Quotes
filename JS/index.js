



var newQuotes=[

{"quote":"It's not what happens to you, but how you react to it that matters.",
    "author": "--Epictetus"
},

{"quote":"The best revenge is massive success.",
    "author": "--Frank Sinatra"
},

{"quote":"Do not take life too seriously. You will not get out alive.",
    "author": "--Elbert Hubbard"
},



]




function getQuotes()
{


var x=Math.floor(Math.random()*newQuotes.length) ;
document.getElementById("quote").innerHTML=newQuotes[x].quote;
document.getElementById("authorQuote").innerHTML=newQuotes[x].author;


}