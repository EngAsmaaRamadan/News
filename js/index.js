let lastCategory = "",
    lastSearch = "",
    lastPage = 0;
getData();

$("form").submit(function(e){
    e.preventDefault();
    let category = $('#Category').val(),
		    search = $('#Search').val();
    if(lastCategory == category && lastSearch == search){
      return;
    }
	    getData(category,search,1);
});