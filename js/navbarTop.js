function navbarTop() {
  $("#tdeeTab a").on("click", function(){
   $("#navbarTop").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
  $("#caloriesTopTab a").on("click", function(){
    $("#navbarTop").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
}


module.exports = navbarTop;
