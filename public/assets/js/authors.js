let json;

const userAction = async () => {

    let response = await fetch('../../v2/allAuthors');
    json = await response.json();
    loadData(json);
}


userAction();

async function loadData(json) {

    let collection = document.getElementById('body');

    for(var i=0; i<json.length; i++) {
        
        if (json[i].name.charAt(0).match(/[a-z]/i)) {

            var innerHTML = collection.innerHTML;
            innerHTML += '<div class="author-div" id="rowx"><div class="card"><div class="copper"><a class="collection-item", href="../pages/sidebar.html?id_author=' + json[i].id_author + '"><img class="img-responsive card-img" src="../assets/img/authors/' + json[i].id_author + '.jpg" class="author-photo"><div class="card-body">' +
            '<h4 class="card-title">' + json[i].name + '</h4></a></div></div></div></div>';

            collection.innerHTML = innerHTML;
        }
    }


}
