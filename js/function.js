async function getData(category = "business",search = "",page = 1,pageSize = 10){

	let parameters = new URLSearchParams({
		category:category,
		q:search,
		sortBy:"publishedAt",
		from:"2026-09-20",
		page:page,
		pageSize:pageSize,
		apiKey:"b1276186ee7747978e699868f813aeb1"
	});
	let response = await fetch(`https://newsapi.org/v2/top-headlines?${parameters.toString()}`);
	let data = await response.json();
	console.log(data);
	showData(data);
}

function showData(data){
	let numberOfPages = Math.ceil(data.totalResults / 10),
		news = data.articles,
		$dataContainer = $('#Data .row'),
		mainDataArr = [];
	$dataContainer.html('');
	
	if(news.length > 0){
		for(let item of news){
			mainDataArr = [];
			console.log(item.title,item.description,item.urlToImage,item.url);
			mainDataArr.push(item.title,item.description,item.urlToImage,item.url);
			for(let ele of mainDataArr){
				if(!checkMainDataNotNull(ele)){
					console.log(checkMainDataNotNull(ele));
					return;					
				}else{
					console.log("error");
				}	
			}
			$dataContainer.append(cardComponent(item));
			
			
		}
	}else{

	}
	console.log(numberOfPages);
}

function checkMainDataNotNull(item){
		if(item != null){
			return true
		}else{
			return false;
		}
}

function cardComponent(item){
	console.log(item);
	return `
		<div class="col-lg-4 mb-5">
			<div class="item">
				<div class="card">
				<div class="image">
					<img src="${item.urlToImage}" class="card-img-top" alt="...">
					</div>
					<div class="card-body">
						<h5 class="card-title">${item.title.slice(0,10)}</h5>
						<p class="card-text">${item.description.slice(0,150)}</p>
						<a href="${item.url}" target="_blank" class="btn btn-primary">See More</a>
					</div>
				</div>
			</div>
		</div>
	`;
}