const quoteText = document.querySelector(".quote"),
	quoteBtn = document.querySelector("button"),
	authorName = document.querySelector(".name"),
	speechBtn = document.querySelector(".speech"),
	copyBtn = document.querySelector(".copy"),
	twitterBtn = document.querySelector(".twitter"),
	synth = speechSynthesis;

function randomQuote() {
	quoteBtn.classList.add("loading");
	quoteBtn.innerText = "Loading...";
	fetch("https://free-quotes-api.herokuapp.com/").then(response => response.json()).then(result => {
		quoteText.innerText = result.author || "Linus Torvalds";
		authorName.innerText = result.blank || "";
		quoteBtn.classList.remove("loading");
		quoteBtn.innerText = "New Quote";
	});
}

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(quoteText.innerText);
});



