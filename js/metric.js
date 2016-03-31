function metric(){
  $('#metricTab').click(function(){
    $('#calculatorWeight').val('kg');
    $('#calculatorHeight').val('cm');
    calculatorCounter = 0;
  });
}

module.exports = metric;
