let titleEl = document.getElementById("TITLE");
let priceEl = document.getElementById("PRICE");
let idEl = document.getElementById("ID");
let json;



const userAction = async () => {
  let id = parseTopURL();
  if (id === undefined) {
    console.log('undefined book id, showing book number 1');
    id = '1';
  }
  let response = await fetch('../../v2/books/' + id + '');
  console.log("eskere");
  console.log(response);
  console.log('address: "../../v2/books/' + id + '');

  /*, {
    
    method: 'GET',
    body: myBody, // string or object
    headers:{
      'Content-Type': 'application/json'
    }
  }*/
  json = await response.json(); //extract JSON from the http response
  // do something with myJson
  loadData(json);
}

userAction();

function loadData(json) {
  console.log(json);
  titleEl.innerText = json[0].title;
  priceEl.innerText = json[0].price;
  idEl.innerText = json[0].isbn;
}


//No error checking as now. Parse the url
function parseTopURL() {
  let query = window.location.search.substring(1);
  console.log("window.location.search.substring(1) = '" + query + "'");
  let args = query.split('&');
  for (let i = 0; i < args.length; i++) {
    let pair = args[i].split('=');
    if (pair[0] === 'id') {
      return pair[1]
    }
  }
  return undefined;
}


//Will's URL function, but doesn't work apparently
/*/Function needed to get the variable contained in the URL
var URL = function () {

  var query_string = {};
  let query = window.location.search.substring(1);
  console.log("window.location.search.substring(1) = '" + query + "'");
  let vars = query.split("&");
  for (let i=0;i<vars.length;i++) {
    let pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();

//*/
