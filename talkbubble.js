(function ($) {
  $.fn.talkBubble = function (newText, aniFrame) {
    if (aniFrame === undefined) {
      aniFrame = 50;
    }
    var text = "";
    var dispText = "";
    var currentIndex = 0;
    var $talkBubbleEle = null;
    $talkBubbleEle = this;
    text = newText;
    currentIndex = 0;
    dispText = "";
    setInterval(function () {
      if (($talkBubbleEle === null) || (text.length === dispText.length)) {
        return;
      }
      dispText += text[currentIndex];
      currentIndex++;
      $talkBubbleEle.text(dispText);
      return this;
    }, aniFrame);
  };
})(jQuery);