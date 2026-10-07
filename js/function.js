async function getData(category = "business",search = "",page = 1,pageSize = 10){

	let parameters = new URLSearchParams({
		category:category,
		q:category,
		sortBy:"publishedAt",
		from:"2026-09-20",
		page:page,
		pageSize:pageSize,
		apiKey:"5cd417febc1d46d997979d6e03d6db49"
	});
	let response = await fetch(`https://newsapi.org/v2/top-headlines?${parameters.toString()}`
		/*{headers:{
			"X-Api-Key":"apiKey=5cd417febc1d46d997979d6e03d6db49"
}}*/
	);
	let data = await response.json();
	console.log(data);
}
