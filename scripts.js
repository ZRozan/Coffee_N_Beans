// Jquery

// Title Name Animation
{
  animCoffeeReturn = function () {
    $("#animated-coffee").animate({ left: "92px" }, 1500);
  };
  animCoffeeTextFades = function () {
    $(".anim-text")
      .animate({ opacity: "1.0" }, "slow")
      .delay(2000)
      .animate({ opacity: "0" }, "slow", animCoffeeReturn);
  };
  animCoffeeOpen = function () {
    $("#animated-coffee")
      .finish()
      .animate({ left: "6px" }, 1500, animCoffeeTextFades);
  };

  $(function () {
    $(".logo-title").click(animCoffeeOpen);
  });
}

// Hide Menus
{
  // brunch
  $(function () {
    $("#brunch-title").click(function () {
      $("#brunch-hide").toggle();
    });
  });

  // lunch
  $(function () {
    $("#lunch-title").click(function () {
      $("#lunch-hide").toggle();
    });
  });
}
