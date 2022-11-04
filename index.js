const quotes = [
    {
        quote: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        author: "Louis LAmour"
    },
    {
        quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        author: "William Faulkner"
    },
    {
        quote: "The first draft is just you telling yourself the story.",
        author: "Terry Pratchett"
    },
    {
        quote: `You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.`,
        author: "Octavia E. Butler"
    },
    {
        quote: "Start before you’re ready.",
        author: "Steven Pressfield"
    },
    {
        quote: "You can always edit a bad page. You can’t edit a blank page",
        author: "Jodi Picoult"
    }
];
function showQuote() {
    let id = parseInt(getRandomNumber(quotes.length));
    console.log(id);
    let quote = quotes[id].quote;
    let author = quotes[id].author;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}

function getRandomNumber(r){
    return getRandomArbitrary(0,r);
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
showQuote();
