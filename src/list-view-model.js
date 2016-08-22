
    var View = (function() {

      function removeList() {
        var divList = document.getElementById('list');
        while (divList.hasChildNodes())
          divList.removeChild(divList.firstChild);
        }

      function printArticleLinks() {
        var list;
        setTimeout(function() {
          list = List.printArticles();
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
        },500);
      }

  return {
    noteList: function() {
      removeList();
      printArticleLinks();
    }
  };

})();
   
