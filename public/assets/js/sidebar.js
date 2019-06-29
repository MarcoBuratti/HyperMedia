var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
let json;


let buyForm = document.getElementById('buy-form');
let title = document.getElementById('book-title');
let isbn = document.getElementById('isbn-code');
let cover = document.getElementById('book-cover');
let price = document.getElementById('book-price');
let genres = document.getElementById('book-genres');
let themes = document.getElementById('book-themes');
let descr = document.getElementById('book-description');

const userAction = async () => {
    let isbn = parseTopURL();
    if (isbn === undefined) {
      isbn = '0-330-49286-1';
    }
    //funzione per prelevare tutti gli eventi dal database
    // per fare altri tipi di richieste al database vedere swagger editto con file yaml
    let response = await fetch('../../v2/bookId/' + isbn);
  
    json = await response.json(); //extract JSON from the http response
    //funzione par lavorare il json
    loadData(json);
  }
  
  userAction();
  
  function loadData(json) {
      title.innerHTML = json[0].title;
      isbn.innerHTML = "ISBN: " + json[0].isbn;
      var genreHTML = genres.innerHTML;
      genreHTML = genreHTML + "Literary Genres: " + json[0].genre1;
      if (json[0].genre2 !== "-")
          genreHTML = genreHTML + ", " + json[0].genre2;
      genres.innerHTML = genreHTML;
      var themeHTML = themes.innerHTML;
      themeHTML = themeHTML + "Themes: " + json[0].theme1;
      if (json[0].theme2 !== "-")
          themeHTML = themeHTML + ", " + json[0].theme2;  
      themes.innerHTML = themeHTML;
      price.innerHTML = "Price: " + json[0].price.toFixed(2) + "€";
      cover.src = "../assets/img/books/" + json[0].isbn + ".jpg";
      descr.innerHTML = json[0].descr;
  }
  
  
  //No error checking as now. Parse the url
  function parseTopURL() {
    //parser del url dell'html di riferimento
    let query = window.location.search.substring(1);
    let args = query.split('&');
    for (let i = 0; i < args.length; i++) {
      let pair = args[i].split('=');
      if (pair[0] === 'isbn') {
        return pair[1];
      }
    }
    return undefined;
  }

  buyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("dentro form")
    let myQuantity = document.getElementById("quantity");
    let total = myQuantity.value*json[0].price;
    let details = {
        'total': total,
        'quantity': myQuantity.value,
        'isbn': json[0].isbn
    };

    let body = [];
    for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        body.push(encodedKey + "=" + encodedValue);
    }
    body = body.join("&");


    let answer = await fetch("../../v2/cartInsert", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })

    answer = await answer.json()
    console.log(answer.status);
    if(!answer.status)
        window.alert("No login");
    else
        location.replace("../pages/cart.html");

});