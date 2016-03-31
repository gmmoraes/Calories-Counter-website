function calculate(){
  calculatorCounter = 0;
  answerCounter = 0;
  $('#calculaorbtn').click(function(){
    var height = parseFloat($('#calculatorHeight').val());
    var age = parseFloat($('#calculatorAge').val());
    var weight = parseFloat($('#calculatorWeight').val());
    var activity =   $("select").val();
    if (genderCounter == 5){
      var bmr = ((((9.99 * weight) + (6.25 * height)) - (4.92 * age))  + 5);
    } else {
      var bmr = ((((9.99 * weight) + (6.25 * height)) - (4.92 * age))  - 161);
    }

    if (calculatorCounter == 1) {
      var bmr = bmr * 0.86460;
       tdee = bmr * activity;
    } else {
       tdee = bmr * activity;
    }
    
    localStorage.setItem("exportTdee",tdee);


    $('#calculator').append('<div id="answer">' + "Your tdee is" + " " + tdee + '</div>');
    answerCounter = answerCounter + 1;

    if (answerCounter > 1){
      $('#answer').remove();
    }
  });
}

module.exports = calculate;
