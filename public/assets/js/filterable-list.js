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
        let a = li[i].getElementsByClassName('book-title-ref')[0];
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
    let response;

    let pair = parseTopURL();
    if (pair === undefined) {
        response = await fetch('../../v2/books');
    }
    else if (pair[0] === 'genre') {
        response = await fetch('../../v2/bookGenre/' + pair[1]);
    }
    else if (pair[0] === 'theme') {
        response = await fetch('../../v2/bookTheme/' + pair[1]);
    }
    else {
        response = await fetch('../../v2/books');
    };
    //funzione per prelevare tutti gli eventi dal database
    // per fare altri tipi di richieste al database vedere swagger editto con file yaml
    json = await response.json(); //extract JSON from the http response
    //funzione par lavorare il json
    loadData(json);
}


function parseTopURL() {
    //parser del url dell'html di riferimento
    let query = window.location.search.substring(1);
    let args = query.split('&');
    for (let i = 0; i < args.length; i++) {
      let pair = args[i].split('=');
      if (pair[0] === 'genre' || pair[0] === 'theme') {
        return pair;
      }
    }
    return undefined;
}



userAction();

async function loadData(json) {
    for(var i=0; i<json.length; i++) {


        let response = await fetch('../../v2/authorsByIsbn/' + json[i].isbn);
        author = await response.json();



        /*console.log("STAMPAMI AUTHORQUERY" + authorQuery(json[i].isbn));*/
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
            innerHTML = innerHTML + "<li class='collection-item'>" + "<div class='my-row'><div class='column' id='img-column'>" +
            "<a class='collection-item' , href='../pages/sidebar.html?isbn=" + json[i].isbn + "'><img src='" + "../assets/img/books/" + json[i].isbn + ".jpg' class='book-img'></a></div>" +
            "<div class='column' id='other-column'><a class='collection-item book-title-ref', href='../pages/sidebar.html?isbn=" + json[i].isbn + "'>" + json[i].title + "</a><h4 class='book-details'>Price: " + json[i].price.toFixed(2) + '€' + "</h4>";

            if (author.length > 1) {
                innerHTML = innerHTML + "<h4 class='book-details'>Authors: " + "<a class='author-ref' href='../pages/sidebar.html?id_author=" + author[0].id_author + "'>" + author[0].name + "</a>, ";
                for(var j=1; j<author.length-1; j++) {
                    innerHTML = innerHTML  + "<a class='author-ref' href='../pages/sidebar.html?id_author=" + author[j].id_author + "'>" + author[j].name + "</a>, ";
                }
                innerHTML = innerHTML + "<a class='author-ref' href='../pages/sidebar.html?id_author=" + author[j].id_author + "'>" + author[j].name + "</a>" + "</h4>";
            }
            else {
                innerHTML = innerHTML + "<h4 class='book-details'>Author: " + "<a class='author-ref' href='../pages/sidebar.html?id_author=" + author[0].id_author + "'>" + author[0].name + "</a></h4>";
            }

            innerHTML += "<h4 class='book-details' id='book-descr'>Preface: " + json[i].descr.substring(0, 480) + " [...]</h4></div></div></li>"
            collection.innerHTML = innerHTML;
        }
    }

}
  /*
// Events
$('.dropdown-container-searchfilter')
	.on('click', '.dropdown-button-searchfilter', function() {
        $(this).siblings('.dropdown-list-searchfilter').toggle();
	})
	.on('input', '.dropdown-search', function() {
    	var target = $(this);
        var dropdownList = target.closest('.dropdown-list-searchfilter');
    	var search = target.val().toLowerCase();
    
    	if (!search) {
            dropdownList.find('li').show();
            return false;
        }
    
    	dropdownList.find('li').each(function() {
            var text = $(this).text().toLowerCase();
            var match = text.indexOf(search) > -1;
            $(this).toggle(match);
        });
	})
	.on('change', '[type="checkbox"]', function() {
        var container = $(this).closest('.dropdown-container-searchfilter');
        var numChecked = container. find('[type="checkbox"]:checked').length;
    	container.find('.quantity').text(numChecked || 'Any');
	});

// JSON of States for demo purposes
var usStates = [
    { name: 'Fantasy Novel', abbreviation: 'FN'},
    { name: 'Crime Novel', abbreviation: 'CN'},
    { name: 'Historical Fiction', abbreviation: 'HF'}
];

// <li> template
var stateTemplate = _.template(
    '<li>' +
    	'<input name="<%= abbreviation %>" type="checkbox">' +
    	'<label class= "label-searchfilter", for="<%= abbreviation %>"><%= capName %></label>' +
    '</li>'
);

// Populate list with states
_.each(usStates, function(s) {
    s.capName = _.startCase(s.name.toLowerCase());
    $('.ul-searchfilter').append(stateTemplate(s));
});*/