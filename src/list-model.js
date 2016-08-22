var List = (function () {

  var articles;

  function get(type, url) {
      articles = "";
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            if(type==="headlines") {
              articles = data.response.editorsPicks;
            } else {
              articles = data.response.results;
            }
          }
        };

      xhttp.open("GET", url + Guardian.key());
      xhttp.send();
    }

  return {

    headlines: function() {
        url = 'http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=thumbnail,body&api-key=';
        get("headlines", url);
      },

    section: function(sectionName) {
      url = 'http://content.guardianapis.com/search?section=' + sectionName + '&show-fields=thumbnail,body&api-key=';
        get("section", url);
      },

    printArticles: function() {
      return articles;
    }

  };

})();
