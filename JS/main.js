var quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
  { text: "A room without books is like a body without a soul.", author: "Cicero" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" }
];

var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("author");
var btn = document.getElementById("btn");

var lastIndex = -1;

btn.addEventListener("click", function() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  quoteElement.textContent = `"${quotes[randomIndex].text}"`;
  authorElement.textContent = `-- ${quotes[randomIndex].author}`;
});
