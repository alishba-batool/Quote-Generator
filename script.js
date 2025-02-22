let quotes=[
    { text:"Do what you can, with what you have, where you are.", author:"— Theodore Roosevelt"},
    { text:"Act as if what you do makes a difference. It does.", author:"— William James"},
    { text:"It is not that we have a short time to live, but that we waste a lot of it.", author:"— Seneca"},
    { text:"The quieter you become, the more you can hear.", author:"— Ram Dass"},
    { text:"To live is the rarest thing in the world. Most people exist, that is all.", author:"— Oscar Wilde"},
    { text:"The best way to predict the future is to create it.", author:"— Peter Drucker"},
    { text:"We live in an age when unnecessary things are our only necessities.", author:"— Oscar Wilde"},
    { text:"The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it", author:"— Michelangelo"},
    { text:"Common sense is like deodorant. The people who need it most never use it.", author:" — Bill Murray"},
    { text:"People say nothing is impossible, but I do nothing every day.", author:"— A.A. Milne (Winnie the Pooh)"},
];

function generateQuote(){
    let randomIndex=Math.floor(Math.random()* quotes.length);
    let quote=quotes[randomIndex];

    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = quote.author;
   
}
document.getElementById("new-quote-generator").addEventListener("click",generateQuote);
generateQuote();