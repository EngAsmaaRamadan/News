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
	showData(data,page);
}

function showData(data,currentPage){
	let numberOfPages = Math.ceil(data.totalResults / 10),
		news = data.articles,
		$dataContainer = $('#Data .row'),
		mainDataArr = [];
	$dataContainer.html('');
	
	if(news.length > 0){
		for(let item of news){
	//		mainDataArr = [];
			console.log(item.title,item.description,item.url);
			/*mainDataArr.push(item.title,item.description,item.url);
			for(let ele of mainDataArr){
				if(!checkMainDataNotNull(ele)){
					console.log(checkMainDataNotNull(ele));
					console.log("error");
					return;					
				}
					console.log(checkMainDataNotNull(ele));
			}*/
			$dataContainer.append(cardComponent(item));
			$('nav .pagination').html(preparePagination(currentPage,numberOfPages));
			
		}
	}else{

	}
	console.log(numberOfPages);
}

function preparePagination(currentPage,totalPages){
	let lis = `<li class="page-item"><a class="page-link ${(currentPage == 1) ? 'disabled' : '' }" onclick="paginate(${(currentPage > 1) ? currentPage - 1 : 1 })">Previous</a></li>`;
	for(let i = 1 ; i <= totalPages ; i++){
		lis += `
			<li class="page-item"><a class="page-link ${(currentPage == i) ? 'active': ''}" onclick="paginate(${i});">${i}</a></li>
		`;
	}

	lis += `<li class="page-item"><a class="page-link ${(currentPage == totalPages) ? 'disabled' : '' }" onclick="paginate(${(currentPage < totalPages) ? currentPage + 1 : totalPages })">Next</a></li>`;
	return lis;
}

function paginate(currentPage){
	console.log('hi');
	let category = $('#Category').val(),
		search = $('#Search').val();
	getData(category,search,currentPage);
}

//using it for prevent show null data
// function checkMainDataNotNull(item){
// 		if(item != null){
// 			return true
// 		}else{
// 			return false;
// 		}
// }

function cardComponent(item){
	console.log(item);
	return `
		<div class="col-lg-4 col-md-6 mb-5 part">
			<div class="item">
				<div class="card m-auto">
				<div class="image">
					<img src="${item.urlToImage ?? 'images/default.jpg'}" onerror="this.src='images/default.jpg'" class="card-img-top" alt="...">
					</div>
					<div class="card-body">
						<h5 class="card-title">${item.title?.slice(0,10)}...</h5>
						<p class="card-text">${item.description?.slice(0,200)}...</p>
						<a href="${item.url}" target="_blank" class="see text-decoration-none"><span>See More</span></a>
					</div>
				</div>
			</div>
		</div>
	`;
}