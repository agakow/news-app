
var img = '<img src="http://orig01.deviantart.net/38df/f/2008/340/6/4/kiwi___the_bird_by_emotikonz.gif">';
var img2 = '<img src="http://www.clipartkid.com/images/361/crying-smiley-faces-cliparts-co-zclwyZ-clipart.png" style="width:30px;height:30px;">';
var kiwi = (function () {
  var list = document.getElementById('test');
  list.innerHTML = '';

return{
  explore: function (context, testFunction) {
    list.innerHTML += '<b><li>' + context + '</li></b>';
    testFunction();
  },

  test: function (details, testFunction) {
    list.innerHTML += '<em><dt>' + details + '</dt></em>';
    testFunction(details);
  },

  isEqual: function (expectation) {
    if (expectation) {
      msg = img + "Pass: " + expectation;
    } else {
      msg = img2 + "Fail: " + expectation;
    }
    list.innerHTML += '<dd>' + msg + '</dd>';
  },

  isNotEqual: function (expectation) {
    if (expectation) {
      msg = "Pass: " + expectation;
    } else {
      msg = "Fail: " + expectation;
    }
    list.innerHTML += '<dd>' + msg + '</dd>';
  }

};
})();
