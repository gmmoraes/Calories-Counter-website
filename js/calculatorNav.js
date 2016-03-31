function calculatorNav() {
  $("#metricTab a").on("click", function(){
   $("#navbarCalculator").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
  $("#imperialTab a").on("click", function(){
    $("#navbarCalculator").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
}

module.exports = calculatorNav;
