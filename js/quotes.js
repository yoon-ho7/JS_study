const quotes = [
    {
        quote: "There is a chance today in the regrets of the past and hopes for the future.",
        author: "Ronaldo",
    },
    {
        quote: "As long as there is life.",
        author: "Cicere",
    },
    {
        quote: "If you walk 3 hours a day, you can circle the Earth in 7 years.",
        author: "Samuel Johnson",
    },
    {
        quote: "If you can't avoid it, enjoy it.",
        author: "Robert Elliot",
    },
    {
        quote: "Live simple How complicated are modern people's lives because of unnecessary procedures and work.",
        author: "Idris Shach",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;