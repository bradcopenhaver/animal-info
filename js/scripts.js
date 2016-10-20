$(document).ready(function() {
  $(".radio").change(function() {
    var animal = $("input:radio[name=animal]:checked").val();

    if (animal==="Ducks") {
      $(".output-ducks").show();
      $(".output-geese").hide();
      $(".output-panda").hide();
    }
    else if (animal==="Geese") {
      $(".output-geese").show();
      $(".output-panda").hide();
      $(".output-ducks").hide();
    }
    else {
      $(".output-panda").show();
      $(".output-ducks").hide();
      $(".output-geese").hide();
    }

  });
});
