document.addEventListener('DOMContentLoaded', function() {

    (function urlChange() {
      window.addEventListener("hashchange", showCurrentPageArticle);
    })();

    function getArticleFromUrl(location) {
       return location.hash.split('#')[1];
    }

    function showCurrentPageArticle() {
      var url = getArticleFromUrl(window.location);
      if (!isNaN(url)) {
         showArticle(url);
      } else {
         showArticleList(url);
      }
    }

    function showArticle(article) {
      List.printArticles(function(news) {
         View.showTitle(article, news);
         List.summarise(news[article].id, function(summary) {
            View.article(summary);
         });
      });
    }

   function showArticleList(articles) {
     if (isNaN(articles)) {
        List.section(articles, function(list) {
           View.newsList(list);
        });
     } else {
        List.headlines(articles, function(list) {
           View.newsList(list);
        });
     }
        View.renderArticleList();
   }

   List.headlines(function(list) {
      View.newsList(list);
   });
});
