let lastCategory = "",
    lastSearch = "",
    lastPage = 0,
    $category = $('#Category'),
    $Search = $('#Search');

getData();

$("form").submit(function(e){
    e.preventDefault();
    let category = $category.val().val(),
		    search = $Search.val();
    if(lastCategory == category && lastSearch == search){
      return;
    }
	    getData(category,search,1);
});

/*for(let i=0 ; i<100 ;i++){
  getData();
}*/