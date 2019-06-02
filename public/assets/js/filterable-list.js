// Get input element
let filterInput = document.getElementById('filterInput');
let json;
// Add Event Listener
filterInput.addEventListener('keyup', filterBooks);

function filterBooks(){
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get books ul
    let ul = document.getElementById('books');

    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

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