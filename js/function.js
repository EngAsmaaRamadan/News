async function getData(category = "business", search = "", page = 1, pageSize = 10) {
	let date = new Date( new Date().setMonth((new Date().getMonth())-1)).toISOString().split('T')[0];//to put date dynamic
	let parameters = new URLSearchParams({
		category: category,
		q: search,
		sortBy: "publishedAt",
		from: date,
		page: page,
		pageSize: pageSize,
		apiKey: "f562bf7c7ce940f19680c0af34a623b9"
	});
	let response = await fetch(`https://newsapi.org/v2/top-headlines?${parameters.toString()}`);
	
	if(response.status == 429){
		$dataContainer.html('<div class="alert alert-danger rounded-5 text-center" role="alert"><i class="fa-solid fa-circle-exclamation"></i> Sorry you finished the limited number of available requests , come again tomorrow please!</div>');
		$('nav .pagination').html("");
		return;
	}
	
	let data = await response.json();
	showData(data, page);
	lastCategory = $('#Category').val();
	lastSearch = $('#Search').val();
	lastPage = page;
}

function showData(data, currentPage) {
	let numberOfPages = Math.ceil(data.totalResults / 10),
		news = data.articles;
	$dataContainer.html('');

	if (news.length > 0) {
		paginationArr = [];
		let i = 1;
		for (let item of news) {
			$dataContainer.append(cardComponent(item));
			$('nav .pagination').html(preparePagination(currentPage, numberOfPages));
			paginationArr.push(i++);
		}
		
	} else {
		$dataContainer.html(`<div class="alert alert-warning rounded-5 text-center" role="alert">No Data is matched related with these Category and Search</div>`);
		$('nav .pagination').html("");
	}
}

function preparePagination(currentPage, totalPages) {
	currentPageNum = currentPage;
	totalPagesNum = totalPages;
	
	let lis = `<li class="page-item"><a class="page-link ${(currentPage == 1) ? 'disabled' : ''}" onclick="paginate(${(currentPage > 1) ? currentPage - 1 : 1})">Previous</a></li>`;
	for (let i = 1; i <= totalPages; i++) {
		lis += `
			<li class="page-item"><a class="page-link link ${(currentPage == i) ? 'active' : ''}" onclick="paginate(${i});">${i}</a></li>
		`;
	}

	lis += `<li class="page-item"><a class="page-link ${(currentPage == totalPages || totalPages == 0) ? 'disabled' : ''}" onclick="paginate(${(currentPage < totalPages) ? currentPage + 1 : totalPages})">Next</a></li>`;
	return lis;
}

function paginate(currentPage) {
	let category = $category.val(),
		search = $Search.val();
	if(lastPage != currentPage){
      getData(category, search, currentPage);
    }
}

function cardComponent(item) {	
	return `
		<div class="col-lg-4 col-sm-6 mb-5 part">
			<div class="item">
				<div class="card m-auto">
				<div class="image">
					<img src="${item.urlToImage ?? 'images/default.jpg'}" onerror="this.src='images/default.jpg'" class="card-img-top" alt="img from ${$category.val()}">
					</div>
					<div class="card-body">
						<h5 class="card-title">${item.title?.slice(0, 10) + "..." ?? "Unknown"}</h5>
						<p class="card-text">${ item.description?.slice(0, 200) ?? "click on button to more description"}${(item.description == null) ? '':'...'}</p>
						<a href="${item.url}" target="_blank" class="see text-decoration-none"><span>See More</span></a>
					</div>
				</div>
			</div>
		</div>
	`;
}
