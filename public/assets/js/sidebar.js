var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
let json;
let navBtn;
let sideBtn;
let cover = document.getElementById('cover');
let galleryBox = document.getElementById('recommendations-box');

function parseTopURL() {
  //parser del url dell'html di riferimento
  let query = window.location.search.substring(1);
  let args = query.split('&');
  for (let i = 0; i < args.length; i++) {
    let pair = args[i].split('=');
    if (pair[0] === 'isbn' || pair[0] === 'id_author' || pair[0] === 'id_event') {
      return pair;
    }
  }
  return undefined;
}

const userAction = async () => {
  let response = parseTopURL();

  if (response === undefined) {
    isbn = '0-330-49286-1';
    response = await fetch('../../v2/bookId/' + isbn);
    json = await response.json();
    loadDataBook(json);
  }
  else if(response[0]=== 'isbn'){
    response = await fetch('../../v2/bookId/' + response[1]);
    json = await response.json();
    loadDataBook(json);
  }
  else if(response[0]=== 'id_author'){
    response = await fetch('../../v2/authors/' + response[1]);
    json = await response.json();
    loadDataAuthor(json);
  }
  else if(response[0]=== 'id_event'){
      response = await fetch('../../v2/eventId/' + response[1]);
      json = await response.json();
      loadDataEvent(json);
  }
}

userAction();

async function loadDataEvent(json){

  navBtn = document.getElementById('nav-events');
  sideBtn = document.getElementById('side-events');
  navBtn.classList.add('my-navbar-active-btn');
  sideBtn.classList.add('active-sidebar-btn');

  let eventDiv = document.getElementById('event-details');
  let eventGallery = document.getElementById('recommendations-gallery');

  eventDiv.style.display = "block";
  eventGallery.id = 'event-gallery';
  galleryBox.innerHTML = "Event Gallery" + galleryBox.innerHTML;

  let eventName = document.getElementById('event-name');
  let eventBook = document.getElementById('event-book');
  let eventDate = document.getElementById('event-date');
  let eventDescr = document.getElementById('event-descr');

  eventName.innerHTML = json[0].name;
  eventBook.innerHTML = "Book: " + '<a href="../pages/sidebar.html?isbn='+ json[0].isbn + '">' + json[0].title +'</a>';
  eventDate.innerHTML = "Date: " + json[0].date;
  cover.src = "../assets/img/books/" + json[0].isbn + ".jpg";
  eventDescr.innerHTML = "Description: " + json[0].description;


  let galleryInd = document.getElementById('gallery-indicators');
  let galleryElems = document.getElementById('gallery-elems');
  let carouselIndHTML = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
  let carouselElemHTML = ' <div class="item active"><img class="image" src="../assets/img/events/' + json[0].id_event + '/0.jpg" id="event-img-carousel"><div class="carousel-caption"></div></div>';
  for (i = 1; i < 3; i++) {
    carouselIndHTML += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
    carouselElemHTML += ' <div class="item"><img class="image" src="../assets/img/events/' + json[0].id_event + '/'+ i +'.jpg" id="event-img-carousel"><div class="carousel-caption"></div></div>';
  }
  galleryInd.innerHTML += carouselIndHTML;
  galleryElems.innerHTML = carouselElemHTML + galleryElems.innerHTML;




}

async function loadDataAuthor(json){

  navBtn = document.getElementById('nav-authors');
  sideBtn = document.getElementById('side-authors');
  navBtn.classList.add('my-navbar-active-btn');
  sideBtn.classList.add('active-sidebar-btn');

  let authorDiv = document.getElementById('author-details');

  authorDiv.style.display = 'block';
  galleryBox.innerHTML = "Available books by " + json[0].name + galleryBox.innerHTML;

  let authorName = document.getElementById('author-name');
  let authorBio = document.getElementById('author-bio');

  authorName.innerHTML = json[0].name;
  cover.src = "../assets/img/authors/" + json[0].id_author + ".jpg";
  authorBio.innerHTML = "Biography: " + json[0].biography;

  response = await fetch('../../v2/booksByIdAuthor/' + json[0].id_author);
  content = await response.json();

  console.log(content)


  let galleryInd = document.getElementById('gallery-indicators');
  let galleryElems = document.getElementById('gallery-elems');

  let carouselIndHTML = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
  let carouselElemHTML = ' <div class="item active"><img class="image" src="../assets/img/books/' + content[0].isbn + '.jpg" id="img-carousel"><div class="carousel-caption"><a class="btn btn-default btn-sm showcase-btn" href="../pages/sidebar.html?isbn='+ content[0].isbn + '">Read More</a></div></div>';
  for (i = 1; i < content.length; i++) {
    carouselIndHTML += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
    carouselElemHTML += ' <div class="item"><img class="image" src="../assets/img/books/' + content[i].isbn + '.jpg" id="img-carousel"><div class="carousel-caption"><a class="btn btn-default btn-sm showcase-btn" href="../pages/sidebar.html?isbn='+ content[i].isbn + '">Read More</a></div></div>';
  }
  galleryInd.innerHTML += carouselIndHTML;
  galleryElems.innerHTML = carouselElemHTML + galleryElems.innerHTML;

}



async function loadDataBook(json) {

  navBtn = document.getElementById('nav-books');
  sideBtn = document.getElementById('side-books');
  navBtn.classList.add('my-navbar-active-btn');
  sideBtn.classList.add('active-sidebar-btn');

  let bookDiv = document.getElementById('book-details');

  let buyForm = document.getElementById('buy-form');
  let authors = document.getElementById('book-authors');
  let title = document.getElementById('book-title');
  let isbn = document.getElementById('isbn-code');
  let price = document.getElementById('book-price');
  let genres = document.getElementById('book-genres');
  let themes = document.getElementById('book-themes');
  let descr = document.getElementById('book-description');
  let date = document.getElementById('book-date');
  let events = document.getElementById('book-events')

  bookDiv.style.display = 'block';
  galleryBox.innerHTML = "Recommended Books" + galleryBox.innerHTML;

  let response = await fetch('../../v2/authorsByIsbn/' + json[0].isbn);
  author = await response.json();

  response = await fetch('../../v2/eventByIsbn/' + json[0].isbn);
  let event = await response.json();

  let authorsHTML;
  title.innerHTML = json[0].title;
  isbn.innerHTML = "ISBN: " + json[0].isbn;
  date.innerHTML = "Date published: " + json[0].date;
  var genreHTML = genres.innerHTML;
  genreHTML = genreHTML + "Literary Genres: " + '<a class="ref" href="../pages/filterable-list.html?genre=' + json[0].genre1 + '">' + json[0].genre1 + '</a>';
  if (json[0].genre2 !== "-")
    genreHTML = genreHTML + ", " + '<a class="ref" href="../pages/filterable-list.html?genre=' + json[0].genre2 + '">' + json[0].genre2 + '</a>';
  genres.innerHTML = genreHTML;
  var themeHTML = themes.innerHTML;
  themeHTML = themeHTML + "Themes: " +  '<a class="ref" href="../pages/filterable-list.html?theme=' + json[0].theme1 + '">' + json[0].theme1 + '</a>';
  if (json[0].theme2 !== "-")
    themeHTML = themeHTML + ", " + '<a class="ref" href="../pages/filterable-list.html?theme=' + json[0].theme2 + '">' + json[0].theme2 + '</a>';
  themes.innerHTML = themeHTML;
  price.innerHTML = "Price: " + json[0].price.toFixed(2) + "€";
  cover.src = "../assets/img/books/" + json[0].isbn + ".jpg";
  descr.innerHTML = "Preface: " + json[0].descr;

  if (author.length > 1) {
    authorsHTML = "Authors: " + '<a class="ref" href="../pages/sidebar.html?id_author=' + author[0].id_author + '">' + author[0].name + '</a>' + ", ";
    for (var j = 1; j < author.length - 1; j++) {
      authorsHTML += '<a class="ref" href="../pages/sidebar.html?id_author=' + author[j].id_author + '">' + author[j].name + '</a>' + ", ";
    }
    authorsHTML += '<a class="ref" href="../pages/sidebar.html?id_author=' + author[j].id_author + '">' + author[j].name + '</a>';
  }
  else {
    authorsHTML = "Author: " + '<a class="ref" href="../pages/sidebar.html?id_author=' + author[0].id_author + '">' + author[0].name + '</a>';
  }
  authors.innerHTML = authorsHTML;

  if(event.length > 0){

    let eventsHTML;
  
    if (event.length > 1) {
      eventsHTML = 'Events about this book: <a class="ref" href="../pages/sidebar.html?id_event='+ event[0].id_event + '">' + event[0].name + '</a>' + ", ";
      for (var j = 1; j < event.length - 1; j++) {
        eventsHTML += '<a class="ref" href="../pages/sidebar.html?id_event='+ event[j].id_event + '">' + event[j].name + '</a>' + ", ";
      }
      eventsHTML += '<a href="../pages/sidebar.html?event='+ event[j].id_event + '">' + event[j].name+'</a>';
    }
    else {
      eventsHTML = 'Event about this book: <a class="ref" href="../pages/sidebar.html?id_event='+ event[0].id_event + '">' + event[0].name + '</a>';
    }
    events.innerHTML = eventsHTML;
  }

  let similar = [];
  let content;

  for (var i = 0; i < authors.length; i++) {
    response = await fetch('../../v2/booksByIdAuthor/' + authors[i].id_author);
    content = await response.json();
    if (content !== undefined) {
      for (i = 0; i < content.length; i++) {
        similar.push(content[i]);

      }
    }
  }
  response = await fetch('../../v2/bookGenre/' + json[0].genre1);
  content = await response.json();
  if (content !== undefined) {
    for (i = 0; i < content.length; i++) {
      similar.push(content[i]);

    }
  }
  if (json[0].genre2 !== '-') {
    response = await fetch('../../v2/bookGenre/' + json[0].genre2);
    content = await response.json();
    if (content !== undefined) {
      for (i = 0; i < content.length; i++) {
        similar.push(content[i]);

      }
    }
  }
  response = await fetch('../../v2/bookTheme/' + json[0].theme1);
  content = await response.json();
  if (content !== undefined) {
    for (i = 0; i < content.length; i++) {
      similar.push(content[i]);

    }
  }
  if (json[0].theme2 !== '-') {
    response = await fetch('../../v2/bookTheme/' + json[0].theme2);
    content = await response.json();
    if (content !== undefined) {
      for (i = 0; i < content.length; i++) {
        similar.push(content[i]);
      }
    }
  }

  var unique = uniqueArray(similar);



  if (unique.length < 3) {
    response = await fetch('../../v2/books');
    content = await response.json();

    var j = unique.length;
    var len;
    len = content.length;
    len--;
    i = Math.floor(Math.random() * (len));
    var found;

    while (j < 3) {
      found = undefined;
      if (content[i].isbn !== json[0].isbn) {
        
        for (y = 0; y < unique.length; y++) {
          if (content[i].isbn === unique[y].isbn) {
            found = true;
            break;
          }
        }
        if (!found) {
          unique.push(content[i]);
          j++;
        }

      }
      i = Math.floor(Math.random() * (len));
    }
  }

  buyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let myQuantity = document.getElementById("quantity");
    let total = myQuantity.value * json[0].price;
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
    if (!answer.status)
      window.alert("No login");
    else
      location.replace("../pages/cart.html");
  
  });

  let galleryInd = document.getElementById('gallery-indicators');
  let galleryElems = document.getElementById('gallery-elems');

  let carouselIndHTML = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';

  let carouselElemHTML = ' <div class="item active"><img class="image" src="../assets/img/books/' + unique[0].isbn + '.jpg" id="img-carousel"><div class="carousel-caption"><a class="btn btn-default btn-sm showcase-btn" href="../pages/sidebar.html?isbn='+ unique[0].isbn + '">Read More</a></div></div>';
  for (i = 1; i < unique.length; i++) {
    carouselIndHTML += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
    carouselElemHTML += ' <div class="item"><img class="image" src="../assets/img/books/' + unique[i].isbn + '.jpg" id="img-carousel"><div class="carousel-caption"><a class="btn btn-default btn-sm showcase-btn" href="../pages/sidebar.html?isbn='+ unique[i].isbn + '">Read More</a></div></div>';
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