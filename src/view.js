
var View = (function() {

   function removeList() {
      var divList = document.getElementById('list');
      while (divList.hasChildNodes())
         divList.removeChild(divList.firstChild);
      }

   function printArticleLinks(list) {
      for (var i = 0; i < list.length; i++) {
         var listDiv = document.createElement('div');
         var listLink = document.createElement('a');
         var listText = document.createTextNode(list[i].webTitle);
         var listImg = document.createElement('img');
         listImg.setAttribute('src', list[i].fields.thumbnail);
         listLink.setAttribute('href', '#' + i );
         listLink.appendChild(listDiv);
         listDiv.appendChild(listText);
         listLink.appendChild(listImg);
         document.getElementById('list').appendChild(listLink);
      }
  }

  return {
    newsList: function(list) {
      removeList();
      printArticleLinks(list);
    },

    renderArticleList: function() {
      document.getElementById('listSection').removeAttribute('hidden');
      document.getElementById('content').innerHTML = "";
      document.getElementById('title').innerHTML = "";
    },

    showTitle: function(article, news) {
      document.getElementById('listSection').setAttribute('hidden', true);
      document.getElementById('title').innerHTML = news[article].webTitle;
    },

    article: function(summary) {
      document.getElementById('content').innerHTML = summary;
    }
  };

})();
   
