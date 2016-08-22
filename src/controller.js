document.addEventListener('DOMContentLoaded', function() {

    (function urlChange() {
      window.addEventListener("hashchange", showCurrentPageArticle);
    })();

    function showCurrentPageArticle() {
      var url = getArticleFromUrl(window.location);
      if (url === "") {
        showArticleList(url);
      } else if(isNaN(url)) {
       showSectionList(url);
     } else {
        showArticle(url);
     }
    }

    function getArticleFromUrl(location) {
      return location.hash.split('#')[1];
    }

    function showArticle(article) {
      var list = List.printArticles();
      document
        .getElementById('content')
        .innerHTML = list[article].fields.body;
      document
        .getElementById('title')
        .innerHTML = list[article].webTitle;
      document
        .getElementById('listSection')
        .setAttribute('hidden', true);
    }

    function showArticleList(article) {
      View.noteList();
      document
        .getElementById('listSection')
        .removeAttribute('hidden');
      document
        .getElementById('content')
        .innerHTML = "";
      document
        .getElementById('title')
        .innerHTML = "";
      }

      function showSectionList(articles) {
        List.section(articles);
        View.noteList();
        document
          .getElementById('listSection')
          .removeAttribute('hidden');
        document
          .getElementById('content')
          .innerHTML = "";
        document
          .getElementById('title')
          .innerHTML = "";
        }

      List.headlines();
      View.noteList();


});
