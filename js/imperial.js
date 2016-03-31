function imperial(){
  $('#imperialTab').click(function(){
    $('#calculatorWeight').val('lb');
    $('#calculatorHeight').val('feet');
    calculatorCounter = 1;
  });
}

module.exports = imperial;
