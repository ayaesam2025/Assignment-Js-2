var cartona = [
    {
        quoteOutput: " your self, everyone else is already ",
        authorOutput: "― Oscar Wilde",
    },
{
    quoteOutput: "You know you're in love when you  asleep because. ",
    authorOutput: "― Dr. Seuss",

},
{
    quoteOutput:"Be the change that you wish to see in the world.",
    authorOutput:"― Mahatma Gandhi",
},
{
    quoteOutput: "only live once, but if you do it right.",
    authorOutput:"― Mae West",
},
    
];






function generateQuote(){
    var cartonaQuote = Math.floor(Math.random() * cartona.length);






    document.getElementById('quoteOutput').innerHTML = cartona[cartonaQuote].quoteOutput;
    document.getElementById('authorOutput').innerHTML = cartona[cartonaQuote].authorOutput;
}