
var List = (function () {

  var articles;

  function get(url, sectionName) {
      articles = "";
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            if(url==="headlines") {
              articles = data.response.editorsPicks;
            } else {
              articles = data.response.results;
            }
          }
        };
      if(url==="headlines") {
      xhttp.open("GET", 'http://localhost:4567/' + url);
    } else {
      xhttp.open("GET", 'http://localhost:4567/' + url + '?section=' + sectionName);
    }
      xhttp.send();
    }

  return {

    headlines: function() {
        get("headlines");
      },

    section: function(sectionName) {
        get("section", sectionName);
        },

    printArticles: function() {
      return articles;
    }

  };

})();
