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
      xhttp.open("GET", 'http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=thumbnail,body&api-key=' + Guardian.key());
    } else {
      xhttp.open("GET", 'http://content.guardianapis.com/search?section=' + sectionName + '&show-fields=thumbnail,body&api-key=' + Guardian.key());
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
