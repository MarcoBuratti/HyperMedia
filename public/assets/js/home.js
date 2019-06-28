var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let json;

const userAction = async () => {
    let response = await fetch('../../v2/bestSeller');
    json = await response.json();
    loadData(json);
}

userAction();


function loadData(json) {
    let cardImgs = document.querySelectorAll(".card-img");
    let cardTexts = document.querySelectorAll(".card-text");
    let cardLinks = document.querySelectorAll(".card-link");
    let cardTitles = document.querySelectorAll(".card-title");
    console.log(json);
    console.log(cardImgs);
    if(cardImgs.length === json.length) {
        for (var i=0; i<cardImgs.length; i++) {
            cardImgs[i].src = "../assets/img/books/" + json[i].isbn + ".jpg";
            cardTexts[i].innerHTML = json[i].descr;
            cardLinks[i].href = "../pages/sidebar.html?isbn=" + json[i].isbn;
            cardTitles[i].innerHTML = json[i].title;
        }
    }
}