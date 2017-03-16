(function ($) {
  var text = "";
  var dispText = "";
  var currentIndex = 0;
  var $talkBubbleEle = null;
  var aniFrame = 50;
  $.fn.talkBubble = function (newText) {
    $talkBubbleEle = this;
    text = newText;
    currentIndex = 0;
    dispText = "";
  };
  setInterval(function () {
    if (($talkBubbleEle === null) || (text.length === dispText.length)) {
      return;
    }
    dispText += text[currentIndex];
    currentIndex++;
    $talkBubbleEle.text(dispText);
    return this;
  }, aniFrame);
})(jQuery);