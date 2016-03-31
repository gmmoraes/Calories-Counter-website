function chartFatSecret(){
  var caloriesSpent = [];
  $('#fatsecretButton').click(function(){
    var caloriesValue = $('.fatsecret_calories_value').text();
    if (localStorage.length != 0) {
        totalTdee = localStorage.getItem('exportTdee');
      }

    var totalCaloriesSpent = 0;
    caloriesSpent.push(parseFloat(caloriesValue));
    $.each(caloriesSpent,function() {
    totalCaloriesSpent += this;
});

    var totalTdee = totalTdee - parseFloat(caloriesValue);
    var totalShow = totalTdee - totalCaloriesSpent;
    $('#answerLabel').remove();



    $('#chartCountainer').append('<div id="answerLabel">You still have' + " " + totalShow +  '</div>');
    $('#myChart').css({
   'width' : '100px',
   'height' : '100px',
});
    var ctx = $('#myChart').get(0).getContext('2d');

    var data = [
     {
      value: totalCaloriesSpent,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "eaten"
    },
    {

    value: totalTdee,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "total"
  },
  ];
  var piechart = new Chart(ctx).Pie(data);

});
}

module.exports = chartFatSecret;
