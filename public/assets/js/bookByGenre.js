// Get input element
let filterInput = document.getElementById('filterInput');
let json;
let author;
// Add Event Listener
filterInput.addEventListener('keyup', filterBooks);

function filterBooks(){
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get books ul
    let ul = document.getElementById('books');

    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');
   /* let collectionHeaders = ul.querySelectorAll('h5.collection-header');

    for(let i = 0; i < collectionHeaders.length; i++){
        collectionHeaders[i].className = 'collection-header-hidden';
    } */

    // Look through collection-item lis
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
}

const userAction = async () => {
    let genre = parseTopURL();
    if (genre === undefined) {
      genre = 'Contemporary';
    }
    //funzione per prelevare tutti gli eventi dal database
    // per fare altri tipi di richieste al database vedere swagger editto con file yaml
    let response = await fetch('../../v2/bookGenre/' + genre);
  
    json = await response.json(); //extract JSON from the http response
    //funzione par lavorare il json
    loadData(json);
}



userAction();

async function loadData(json) {
    for(var i=0; i<json.length; i++) {

        let response = await fetch('../../v2/authorsByIsbn/' + json[i].isbn);
        author = await response.json();

        var collection;
        var collectionHeader;
        switch(json[i].title.charAt(0).toUpperCase()) {
            case 'A':
                collection = document.getElementById('a-collection-items');
                collectionHeader = document.getElementById('a-collection-header');
                break;
            case 'B':
                collection = document.getElementById('b-collection-items');
                collectionHeader = document.getElementById('b-collection-header');
                break;
            case 'C':
                collection = document.getElementById('c-collection-items');
                collectionHeader = document.getElementById('c-collection-header');
                break;
            case 'D':
                collection = document.getElementById('d-collection-items');
                collectionHeader = document.getElementById('d-collection-header');
                break;
            case 'E':
                collection = document.getElementById('e-collection-items');
                collectionHeader = document.getElementById('e-collection-header');
                break;
            case 'F':
                collection = document.getElementById('f-collection-items');
                collectionHeader = document.getElementById('f-collection-header');
                break;
            case 'G':
                collection = document.getElementById('g-collection-items');
                collectionHeader = document.getElementById('g-collection-header');
                break;
            case 'H':
                collection = document.getElementById('h-collection-items');
                collectionHeader = document.getElementById('h-collection-header');
                break;
            case 'I':
                collection = document.getElementById('i-collection-items');
                collectionHeader = document.getElementById('i-collection-header');
                break;
            case 'J':
                collection = document.getElementById('j-collection-items');
                collectionHeader = document.getElementById('j-collection-header');
                break;
            case 'K':
                collection = document.getElementById('k-collection-items');
                collectionHeader = document.getElementById('k-collection-header');
                break;
            case 'L':
                collection = document.getElementById('l-collection-items');
                collectionHeader = document.getElementById('l-collection-header');
                break;
            case 'M':
                collection = document.getElementById('m-collection-items');
                collectionHeader = document.getElementById('m-collection-header');
                break;
            case 'N':
                collection = document.getElementById('n-collection-items');
                collectionHeader = document.getElementById('n-collection-header');
                break;
            case 'O':
                collection = document.getElementById('o-collection-items');
                collectionHeader = document.getElementById('o-collection-header');
                break;
            case 'P':
                collection = document.getElementById('p-collection-items');
                collectionHeader = document.getElementById('p-collection-header');
                break;
            case 'Q':
                collection = document.getElementById('q-collection-items');
                collectionHeader = document.getElementById('q-collection-header');
                break;
            case 'R':
                collection = document.getElementById('r-collection-items');
                collectionHeader = document.getElementById('r-collection-header');
                break;
            case 'S':
                collection = document.getElementById('s-collection-items');
                collectionHeader = document.getElementById('s-collection-header');
                break;
            case 'T':
                collection = document.getElementById('t-collection-items');
                collectionHeader = document.getElementById('t-collection-header');
                break;
            case 'U':
                collection = document.getElementById('u-collection-items');
                collectionHeader = document.getElementById('u-collection-header');
                break;
            case 'V':
                collection = document.getElementById('v-collection-items');
                collectionHeader = document.getElementById('v-collection-header');
                break;
            case 'W':
                collection = document.getElementById('w-collection-items');
                collectionHeader = document.getElementById('w-collection-header');
                break;
            case 'X':
                collection = document.getElementById('x-collection-items');
                collectionHeader = document.getElementById('x-collection-header');
                break;
            case 'Y':
                collection = document.getElementById('y-collection-items');
                collectionHeader = document.getElementById('y-collection-header');
                break;
            case 'Z':
                collection = document.getElementById('z-collection-items');
                collectionHeader = document.getElementById('z-collection-header');
                break;
        }
        if (json[i].title.charAt(0).match(/[a-z]/i)) {
            if (collectionHeader.className === 'collection-header-hidden')
                collectionHeader.className = "collection-header";
            var innerHTML = collection.innerHTML;
            innerHTML = innerHTML + "<li class='collection-item'>" +
            "<a class='collection-item' , href='../pages/sidebar.html?isbn=" + json[i].isbn + "'>" + json[i].title + "<br><img src='" + "../assets/img/books/" + json[i].isbn + ".jpg' height='300' width='180'></a>" +
            "<h4>Price: " + json[i].price.toFixed(2) + '€' + "</h4>";
            if (author.length > 1) {
                innerHTML = innerHTML + "<h4>Authors: " + author[0].name + ", ";
                for(var j=1; j<author.length-1; j++) {
                    innerHTML = innerHTML  + author[j].name + ", ";
                }
                innerHTML = innerHTML + author[author.length-1].name + "</h4></li>";
            }
            else {
                innerHTML = innerHTML + "<h4>Author: " + author[0].name + "</h4></li>";
            }
            collection.innerHTML = innerHTML;
        }
    }

}


function parseTopURL() {
    //parser del url dell'html di riferimento
    let query = window.location.search.substring(1);
    let args = query.split('&');
    for (let i = 0; i < args.length; i++) {
      let pair = args[i].split('=');
      if (pair[0] === 'genre') {
        return pair[1];
      }
    }
    return undefined;
  }