// Get input element
let json;

function parseTopURL() {
    //parser del url dell'html di riferimento
    let query = window.location.search.substring(1);
    let args = query.split('&');
    for (let i = 0; i < args.length; i++) {
      let pair = args[i].split('=');
      if (pair[0] === 'page') {
        return pair[1];
      }
    }
    return undefined;
}


const userAction = async () => {
    let page = parseTopURL();
    let response;
    let flag;
    if (page === undefined || page !== 'themes') {
        response = await fetch('../../v2/allGenre');
        flag = "genre";
    } else {
        response = await fetch('../../v2/allTheme');
        flag = "theme";
    }
    json = await response.json();
    loadData(json, flag);
}



userAction();

async function loadData(json, flag) {
    let title = document.getElementById("page-title");
    let list = document.getElementById("my-list");
    let listElems = "";
    let pageTitle = document.getElementById('bookworm-title');
    let genreBtn = document.getElementById('my-navbar-genres');
    let genreSideBtn = document.getElementById('sidebar-genres');
    let themeBtn = document.getElementById('my-navbar-themes');
    let themeSideBtn = document.getElementById('sidebar-themes');
    switch (flag) {
        case "theme":
            title.innerHTML = "List of all available themes:";
            pageTitle.innerHTML = "BookWorm - Themes";
            themeBtn.classList.add('my-navbar-active-btn');
            //themeSideBtn.classList.add('active-sidebar-btn');
            for (var i=0; i<json.length; i++) {
                if (json[i].theme1 !== '-') {
                    listElems += "<li id='list-elem'><i class='far fa-bookmark' id='list-dec'></i><a href='../pages/filterable-list.html?" + flag + "=" + json[i].theme1 + 
                    "' id='my-elem'>" + json[i].theme1 + "</a></li>";
                }
            }
            break;
        default:
            pageTitle.innerHTML = "BookWorm - Genres";
            genreBtn.classList.add('my-navbar-active-btn');
           // genreSideBtn.classList.add('active-sidebar-btn');
            title.innerHTML = "List of all available genres:";
            for (var i=0; i<json.length; i++) {
                if (json[i].genre1 !== '-') {
                    listElems += "<li id='list-elem'><a href='../pages/filterable-list.html?" + flag + "=" + json[i].genre1 +
                    "' id='my-elem'><i class='far fa-bookmark' id='list-dec'></i>" + json[i].genre1 + "</a></li>";
                }
            }
            break;
    }
    list.innerHTML = listElems;
}