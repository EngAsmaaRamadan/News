async function getData(category = "business", search = "", page = 1, pageSize = 10) {
let date = new Date( new Date().setMonth((new Date().getMonth())-1)).toISOString().split('T')[0];//to put date dynamic
console.log(date);

	let parameters = new URLSearchParams({
		category: category,
		q: search,
		sortBy: "publishedAt",
		from: date,
		page: page,
		pageSize: pageSize,
		apiKey: "9dd40dacbcd544b2aa321d8b7b45bc24"
	});
	let response = await fetch(`https://newsapi.org/v2/top-headlines?${parameters.toString()}`);
	let data = await response.json();
	showData(data, page);
	lastCategory = $('#Category').val();
	lastSearch = $('#Search').val();
	lastPage = page;
	++numOfRequests;
}

function showData(data, currentPage) {
	let numberOfPages = Math.ceil(data.totalResults / 10),
		news = data.articles,
		$dataContainer = $('#Data .row');
	$dataContainer.html('');

	if (news.length > 0) {
		for (let item of news) {
			console.log(item.title, item.description, item.url);
			$dataContainer.append(cardComponent(item));
			$('nav .pagination').html(preparePagination(currentPage, numberOfPages));

		}
	} else {
		$dataContainer.html(`<div class="alert alert-warning text-center" role="alert">No Data is matched related with these Category and Search</div>`);
		$('nav .pagination').html(preparePagination(currentPage, numberOfPages));
	}
	console.log(numberOfPages);
}

function preparePagination(currentPage, totalPages) {
	let lis = `<li class="page-item"><a class="page-link ${(currentPage == 1) ? 'disabled' : ''}" onclick="paginate(${(currentPage > 1) ? currentPage - 1 : 1})">Previous</a></li>`;
	for (let i = 1; i <= totalPages; i++) {
		lis += `
			<li class="page-item"><a class="page-link ${(currentPage == i) ? 'active' : ''}" onclick="paginate(${i});">${i}</a></li>
		`;
	}

	lis += `<li class="page-item"><a class="page-link ${(currentPage == totalPages || totalPages == 0) ? 'disabled' : ''}" onclick="paginate(${(currentPage < totalPages) ? currentPage + 1 : totalPages})">Next</a></li>`;
	return lis;
}

function paginate(currentPage) {
	console.log('hi');
	let category = $('#Category').val(),
		search = $('#Search').val();
	if(lastPage != currentPage){
      getData(category, search, currentPage);
    }
}

function cardComponent(item) {
	console.log(item);
	return `
		<div class="col-lg-4 col-sm-6 mb-5 part">
			<div class="item">
				<div class="card m-auto">
				<div class="image">
					<img src="${item.urlToImage ?? 'images/default.jpg'}" onerror="this.src='images/default.jpg'" class="card-img-top" alt="...">
					</div>
					<div class="card-body">
						<h5 class="card-title">${item.title?.slice(0, 10)}...</h5>
						<p class="card-text">${(item.description === null || item.description === undefined ) ? "click on button to more description" : item.description.slice(0, 200)}...</p>
						<a href="${item.url}" target="_blank" class="see text-decoration-none"><span>See More</span></a>
					</div>
				</div>
			</div>
		</div>
	`;
}