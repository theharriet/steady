//randomness 
const quotes = [
    {
       quote: "Don’t promise when you are happy, don’t reply when you are angry, and don’t decide when you are sad.",
       author: ""
    },
    {
        quote: "The supreme happiness in life is the conviction that we are loved.",
        author: "Victor Hugo"
    },
    {
        quote: "You have not failed until you quit trying.",
        author: "Gorden B. Hinckely"
    },
    {
        quote: "First, think. Second, believe. Third, dream. And finally, dare.",
        author: "Walt Disney"
    },
    {
        quote: "When you're feeling a bit out of sorts, don't worry! You're probably just hungry",
        author: "Winnie the Pooh"
    },
    {
        quote: "You can't be happy every day but there are happy things every day.",
        author: "Winnie the Pooh"
    },
    {
        quote: "The only thing we know is things don't always go the way we plan.",
        author: "Lion King"
    },
    {
        quote: "I can't go back to yeserday Because I was a different person then.",
        author: "Walt Disney"
    },
    {
        quote: "Only dead fish go with the flow.",
        author: "Anonymous"
    },
    {
        quote: "It's risky to climb on the branch, but that's where all the fruit is.",
        author: "Rose Winn"
    },
    {
        quote: "Do not take life to serously; No one will get out of it alive",
        author: "Elbert Stevenson"
    },
    {
        quote: "The optimist invented the airplane, and the pessimist invented the parachute.",
        author: "Reader's Digest"
    },
    {
        quote: "Between tomorrow's dream and yesterday's regret is today's opportunity.",
        author: "Anonymous"
    },
    {
        quote: "Marriage is the triumph of imagination over intelligence. Second marriage is the triumph of hope over experience."
    },
    {
        quote: "Be brave. Even if you're not, pretend to be. No one can tell the difference."
    },
    {
        quote: "What ever is produced in haste goes hastily too waste.",
        author: "Sa'di"
    }
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[Math.floor(Math.random()*quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;