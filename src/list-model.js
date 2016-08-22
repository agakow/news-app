var List = (function () {

  var articles;

  function get(url, callback) {
      articles = "";
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(JSON.parse(xhttp.responseText));
          }
        };
      xhttp.open("GET", url);
      xhttp.send();
    }

  return {

    headlines: function(callback) {
        url = 'http://content.guardianapis.com/uk?show-editors-picks=true&show-fields=thumbnail,body&api-key=' + Guardian.key();
        get(url, function(data) {
          articles = data.response.editorsPicks;
          callback(articles);
        });
      },

    section: function(sectionName, callback) {
      url = 'http://content.guardianapis.com/search?section=' + sectionName + '&show-fields=thumbnail,body&api-key=' + Guardian.key();
        get(url, function(data) {
          articles = data.response.results;
          callback(articles);
        });
      },

    summarise: function(articleId, callback) {
      url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/' + articleId;
      get(url, function(data) {
        var summary = data.sentences.join(' ');
        callback(summary);
      });
    },

    printArticles: function(callback) {
       callback(articles);
    },
  };

})();
