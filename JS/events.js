$.ajax({
    url: '../events.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.events).each(function (index, value) {
        // document.getElementById("h1").innerHTML = value.title;
        //document.getElementById("demo1").innerHTML = value.image;
        var record = "<tr><td><div> <img src=" + value.image + " alt= ' ' id='img_event'> <div class'container' id='all_text' ><h1>" + value.title + " </h1><h2>" +
          value.date + "</h2><p>" + value.description + "</p></div></div></td></tr>";
        $("table").append(record);
      });
    }
  });