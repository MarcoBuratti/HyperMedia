var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let bestSeller;
let bookRecommended;

const userAction = async () => {
    let response = await fetch('../../v2/bestSeller');
    bestSeller = await response.json();
    response = await fetch('../../v2/bookRecommended');
    bookRecommended = await response.json();
    loadData(bestSeller, bookRecommended);
}

userAction();


function loadData(bestSeller, bookRecommended) {
    let cardImgs = document.querySelectorAll(".card-img");
    let cardLinks = document.querySelectorAll(".card-link");
    let cardTitles = document.querySelectorAll(".card-title");
    for (var i=0; i < bestSeller.length && i < cardImgs.length ; i++) {
            cardImgs[i].src = "../assets/img/books/" + bestSeller[i].isbn + ".jpg";
            cardLinks[i].href = "../pages/sidebar.html?isbn=" + bestSeller[i].isbn;
            cardTitles[i].innerHTML = bestSeller[i].title;

    }

    let len = bookRecommended.length - 1;
    for (var j=Math.floor(Math.random() * (len)); i < cardImgs.length && j < bookRecommended.length ; i++) {
        cardImgs[i].src = "../assets/img/books/" + bookRecommended[j].isbn + ".jpg";
        cardLinks[i].href = "../pages/sidebar.html?isbn=" + bookRecommended[j].isbn;
        cardTitles[i].innerHTML = bookRecommended[j].title;
        bookRecommended.splice(j, 1);
        len = bookRecommended.length - 1;
        console.log(bookRecommended);
        console.log(len);
        j=Math.floor(Math.random() * (len));
    }
}