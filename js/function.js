async function getData(){
	let response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-09-20&sortBy=publishedAt&apiKey=5cd417febc1d46d997979d6e03d6db49");
	let data = await response.json();
	console.log(data);
}
