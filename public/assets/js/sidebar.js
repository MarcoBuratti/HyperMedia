var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
let json;


let buyForm = document.getElementById('buy-form');
let authors = document.getElementById('book-authors');
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
  
async function loadData(json) {

    let response = await fetch('../../v2/authorsByIsbn/' + json[0].isbn);
    author = await response.json();
    let authorsHTML;
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
    descr.innerHTML = "Preface: " + json[0].descr;

    if (author.length > 1) {
      authorsHTML =  "Authors: " + author[0].name + ", ";
      for(var j=1; j<author.length-1; j++) {
          authorsHTML += author[j].name + ", ";
      }
      authorsHTML += author[author.length-1].name;
    }
    else {
        authorsHTML = "Author: " + author[0].name;
    }
    authors.innerHTML = authorsHTML;


    let similar = [];
    let content;

    for( var i = 0 ; i<authors.length; i++) {
      response = await fetch('../../v2/booksByIdAuthor/' + authors[i].id_author);
      content = await response.json();
      if (content !== undefined) {
        for (i = 0; i<content.length; i++) {
          similar.push(content[i]);

        }
      }
    }
    response = await fetch('../../v2/bookGenre/' + json[0].genre1);
    content = await response.json();
    if (content !== undefined) {
      for (i = 0; i<content.length; i++) {
        similar.push(content[i]);

      }
    }
    if (json[0].genre2 !== '-') {
      response = await fetch('../../v2/bookGenre/' + json[0].genre2);
      content = await response.json();
      if (content !== undefined) {
        for (i = 0; i<content.length; i++) {
          similar.push(content[i]);

        }
      }
    }
    response = await fetch('../../v2/bookTheme/' + json[0].theme1);
    content = await response.json();
    if (content !== undefined) {
      for (i = 0; i<content.length; i++) {
        similar.push(content[i]);

      }
    }
    if (json[0].theme2 !== '-'){
      response = await fetch('../../v2/bookTheme/' + json[0].theme2);
      content = await response.json();
      if (content !== undefined) {
        for (i = 0; i<content.length; i++) {
          similar.push(content[i]);
        }
      }
    }

    var unique = uniqueArray(similar);



  if (unique.length === 0) {
    response = await fetch('../../v2/books');
    content = await response.json();

/*
    for (var i = content.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = content[i];
      content[i] = content[j];
      content[j] = temp;
    }*/

    var len = content.length;
    len--;
    var j = 0;
    i = Math.floor(Math.random() * (len));
    console.log(i);
    while (j < 3) {
      if ( content[i].isbn !== json[0].isbn ) {
        unique.push(content[i]);
        j++;
      }
      i = Math.floor(Math.random() * (len));
    }
    console.log(unique);
  }

  let galleryInd = document.getElementById('gallery-indicators');
  let galleryElems = document.getElementById('gallery-elems');
  
  let carouselIndHTML = '<li data-target="#myCarousel" data-slide-to="0"></li>';
  let carouselElemHTML = ' <div class="item active"><img class="image" src="../assets/img/books/' + unique[0].isbn + '.jpg" id="img-carousel"><div class="carousel-caption"><h3 id="title-carousel">' + unique[0].title +'</h3><a class="btn btn-default btn-sm showcase-btn" href="">Read More</a></div></div>';
  for (i=1; i<unique.length; i++) {
    carouselIndHTML += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
    carouselElemHTML += ' <div class="item"><img class="image" src="../assets/img/books/' + unique[i].isbn + '.jpg" id="img-carousel"><div class="carousel-caption"><h3 id="title-carousel">' + unique[i].title +'</h3><a class="btn btn-default btn-sm showcase-btn" href="">Read More</a></div></div>';
  }
  galleryInd.innerHTML += carouselIndHTML;
  galleryElems.innerHTML = carouselElemHTML + galleryElems.innerHTML;

}

  function uniqueArray(similar) {
    var newArr = [],
        origLen = similar.length,
        found, x, y;
    for (x = 0; x < origLen; x++) {
        found = undefined;
        if (similar[x].isbn !== json[0].isbn) {
          for (y = 0; y < newArr.length; y++) {
              if (similar[x].isbn === newArr[y].isbn) {
                  found = true;
                  break;
              }
          }
          if (!found) {
              newArr.push(similar[x]);
          }
        }
    }
    return newArr;
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
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