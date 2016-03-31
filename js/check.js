function check(){
  genderCounter = 5;
  $('#maleCheck').click(function(){
    genderCounter = 5;
  });
  $('#femaleCheck').click(function(){
    genderCounter = 0;
  });
}

module.exports = check;
