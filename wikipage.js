https://source.unsplash.com/1600x900/?language

Important things learned:

array map takes one item and makes new array - "with map, the idea is that each item from the original array 
should directly map (get it!) to a single item in the resulting array. You run a function on each item in the 
original array and you return whatever you want to be added to the resulting array."

array filter "Basically, with filter, the idea is that you go through each item (technically, run a function 
on every item in the array) inside an array and either return true or false for each one. If you return true, 
it gets added to the resulting array, and if you return false, it doesn't."

map, filter, reduce - best array functions to know. 

***from Why_is_that, workaround for iterating***
if (something) for(int i; i < num; i++) array[i].doSomething();
if (something == 1) something = 2;

*** from FCC forum, this search query works but is nearly useless other than the page ID ***
'https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srsearch='+searchTerm;


***ACTUAL HEADERS FROM WIKI:RANDOM***
https://en.wikipedia.org/wiki/Special:Random
Host: en.wikipedia.org
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:56.0) Gecko/20100101 Firefox/56.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Cookie: CP=H2; WMF-Last-Access=13-Oct-2017; WMF-Last-Access-Global=13-Oct-2017; GeoIP=US:TX:Spring:30.04:-95.53:v4
DNT: 1
Connection: keep-alive
Upgrade-Insecure-Requests: 1

*/
Redirect from 'https://en.wikipedia.org/wiki/Special:Random' to 'https://en.wikipedia.org/wiki/Slaughter_on_Tenth_Avenue' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
Origin 'null' is therefore not allowed access.

Most Popular Languages In The World
English
US - 37.0902° N, 95.7129° W
Canada - 56.1304° N, 106.3468° W
alaska - 64.2008° N, 149.4937° W
Australia - 25.2744° S, 133.7751° E
United Kingdom - 55.3781° N, 3.4360° W
Ireland - 53.4129° N, 8.2439° W

Chinese
China (mainland) - 35° 00' N and 105° 00' E 
Taiwan - 23.6978° N, 120.9605° E
Singapore - 1.3521° N, 103.8198° E

Hindi हिंदी
India - 20.5937° N, 78.9629° E

Spanish
South America - 8.7832° S, 55.4915° W
Central America - 12.7690° N, 85.6024° W
Spain - 40.4637° N, 3.7492° W

Arabic
Algeria - 28.0339° N, 1.6596° E, 
Chad - 15.4542° N, 18.7322° E, 
Comoros - 11.6455° S, 43.3333° E, 
Djibouti - 11.8251° N, 42.5903° E, 
Egypt - 26.8206° N, 30.8025° E, 
Eritrea - 15.1794° N, 39.7823° E, 
Libya - 26.3351° N, 17.2283° E, 
Mauritania - 21.0079° N, 10.9408° W, 
Morocco - 31.7917° N, 7.0926° W, 
Sudan - 12.8628° N, 30.2176° E, 
Tunisia - 33.8869° N, 9.5375° E, 
Tanzania - 6.3690° S, 34.8888° E, 
Bahrain - 26.0667° N, 50.5577° E, 
Iraq - 33.2232° N, 43.6793° E, 
Jordan - 30.5852° N, 36.2384° E, 
Kuwait - 29.3117° N, 47.4818° E, 
Lebanon - 33.8547° N, 35.8623° E, 
Oman - 21.4735° N, 55.9754° E, 
Palestine - 31.9522° N, 35.2332° E, 
Qatar - 25.3548° N, 51.1839° E, 
Saudi Arabia - 23.8859° N, 45.0792° E, 
Syria - 34.8021° N, 38.9968° E, 
United Arab Emirates - 23.4241° N, 53.8478° E, 
Yemen - 15.5527° N, 48.5164° E

https://en.wikipedia.org/w/index.php?title=Ferengi&curid=177126&diff=304901009&oldid=304764764

https://en.wikipedia.org/w/index.php?curid=8846 //works!

https://en.wikipedia.org/w/index.php?curid=34224446

for (var i in f) {
  console.log(f[i].thumbnail.source) 
}

var keys = Object.keys(f);

for (var i = 0, len = keys.length; i < len; i++) {
  console.log(f[keys[i]]);
}

var g = Object.keys(f).map(function(key) {
	return [Number(key), f[key]];
});

console.log(g);
var h = Object.keys(g).map(function(key) {
		return [Number(key), g[key]];
});
console.log(h);
  Url = ('https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+searchTerm);
  
var g = Array (example)
index 0:
extract:"Agedashi dofu (揚げ出し豆腐, agedashidōfu, "Lightly deep-fried tofu") is a Japanese way to serve hot tofu."
index:5
ns:0
pageid:167075
pageimage:"Agedashi_dofu_by_fabichan.jpg"
thumbnail:{source: "https://upload.wikimedia.org/wikipedia/commons/thu…y_fabichan.jpg/50px-Agedashi_dofu_by_fabichan.jpg", width: 50, height: 38}
title:"Agedashi tofu"

 https://www.paypal.me/grayolson I owe a pizza