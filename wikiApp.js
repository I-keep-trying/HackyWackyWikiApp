 function wikiSearch(id) {
  let searchTerm = document.getElementById('search').value;
    var Url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+searchTerm;
    console.log(Url);
	var e = new XMLHttpRequest();
	if(e) {
		return e.open("GET", Url, true),
		e.send(null),
		e.onreadystatechange = function () {
			if (e.readyState === 4 && (e.status === 200)) {
				var d = JSON.parse(e.responseText);
				f = d.query.pages;
				console.log(f);
				var g = Object.values(f);
				console.log(g);
				var h = g.filter(function(record) {
					return record.thumbnail;
				});
				console.log(h);
								
				for (var i = 0; i < h.length; ) {
				var html = '';
html += '<a href="https://en.wikipedia.org/w/index.php?curid='+h[i].pageid+'" target="_blank"><div class="search-item">'+h[i].title+'<br><img src='+h[i].thumbnail.source+' style="width:100%;max-width:300px"><br>'+h[i].extract+'</div></a>';	
		document.getElementById('wiki').innerHTML += html;
		i++;
				}
			}
		}
	}
 }
function wikiReset(id) {
	document.getElementById('search').placeholder = '<Search Wikipedia>';
	var inputArray = document.querySelectorAll('span');
    inputArray.forEach(function (span){
        span.value = "";
 });
}	 


			
 
/* function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('wiki').innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('w').innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById('w').innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('w').innerHTML = "An unknown error occurred."
            break;
    }
}


 */
 
 
	  