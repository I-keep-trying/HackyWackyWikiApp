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
				console.log('thumb/' + h);
				var hh = [];
				for (var i = 0; i < h.length;)	{								
				hh.push(h[i].thumbnail.source.replace(/\/thumb/, ''));
				console.log('pass/fail ' + hh);
				i++
				}
			
			var hhh = [];
			for (var i = 0; i < hh.length; i++) {
			const regex = /(\.jpg)(\/.*)/gi;
			let str = hh[i]
			const subst = `$1`;
			hhh.push(str.replace(regex, subst));			
			console.log('Substitution result: ', hhh[i]);
			}
			var jj = [];
			for (var i = 0; i < hh.length; i++) {
				const regex2 = /(\.svg)(\/.*)/gi;
				let str = hhh[i]
				const subst = `$1`;
				jj.push(str.replace(regex2, subst));
				console.log('Substitution result2: ', jj[i]);
			}
			var kk = [];
			for (var i = 0; i < hh.length; i++) {
				const regex3 = /(\.png)(\/.*)/gi;
				let str = jj[i]
				const subst = `$1`;
				kk.push(str.replace(regex3, subst));
				console.log('Substitution result3: ', kk[i]);
			}			
			console.log('Substitution results: ', hhh[0], jj[0], kk[0]);
			
			function print() {
				var html = '<ul class="feature-boxes">';			
			
				for (var i = 0; i < h.length; ) {
				html += '<li class="feature-box"><a href="https://en.wikipedia.org/w/index.php?curid='+h[i].pageid+'" target="_blank"><div class="feature-title">'+h[i].title+'</div><img src='+kk[i]+' style="width:100%;max-width:300px"><p>'+h[i].extract+'</p></li></a>';	
				//document.getElementById('wiki').innerHTML += html;
				i++;
				}
			html += '</ul>';
			document.getElementById('wiki').innerHTML += html;
			}
			print();
			}
		}
	}
 }
	 
	 
window.addEventListener("keydown", function () {
if (event.defaultPrevented) {
return;
}
switch (event.key) {
case "Escape":

break;
case "Enter":
document.getElementById('search-btn').onclick = wikiSearch(this.id);
break;
default:
return;
}
event.preventDefault();
}, true);





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
 
 
	  