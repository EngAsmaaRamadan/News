let lastCategory = "",
    lastSearch = "",
    lastPage = 0,
    $category = $('#Category'),
    $Search = $('#Search'),
    $dataContainer = $('#Data .row'),
    paginationArr = [],
    currentPageNum = 0,
    totalPagesNum = 10;

getData();

$("form").submit(function(e){
    e.preventDefault();
    let category = $category.val(),
		    search = $Search.val();
    if(lastCategory == category && lastSearch == search){
      return;
    }
	    getData(category,search,1);
});

$(document).keyup(function(e){
    paginationArr.forEach(function(paginator){
      if(paginator == e.key){
        paginate(paginator);
        return;
      }
    });
});

$(document).keyup(function(e){
      switch(e.key){
        case 'ArrowRight':
          if(currentPageNum >= totalPagesNum){
            currentPageNum = 0;
          }
          paginate(currentPageNum + 1);
          break;
        case 'ArrowLeft':
          if(currentPageNum == 1){
            currentPageNum = totalPagesNum + 1;
          }
          paginate(currentPageNum - 1);
          break;
      }
});

$('.loopButton').click(function(){
  for(let i = 0 ; i < 500 ; i++){
    lastCategory = "";
    getData();
  }
});