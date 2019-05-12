$.ajax({
    url: '../../other/events.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.events).each(function (index, value) {
        // document.getElementById("h1").innerHTML = value.title;
        //document.getElementById("demo1").innerHTML = value.image;
        var record = "<tr><td><div> <img src=" + value.image + " alt= ' ' id='img_event'> <div class'container' id='all_text' ><h1 class='book-title'>" + value.title + " </h1><h2 class='book-details'>" +
          value.date + "</h2><p class='book-description'>" + value.description + "</p></div></div></td></tr>";
        $("table").append(record);
      });
    }
  });