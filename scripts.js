// Jquery

// Title Name Animation
animCoffeeTitle = function () {
  openning = $("#animated-coffee").delay(5000).animate({ left: "6px" }, 1500);
  fadeIn = $(".anim-text").delay(6100).animate({ opacity: "1.0" }, "slow");
  fadeOut = $(".anim-text").delay(1700).animate({ opacity: "0" }, "slow");
  closing = $("#animated-coffee")
    .delay(2000)
    .animate({ left: "92px" }, 1500, animCoffeeTitle);
};

// Hide Toggles
hideMenus = function () {
  $(".section-title").click(function () {
    hide = "#" + $(this).attr("id") + "-hide";
    $(hide).toggle();
  });
};

hideSubMenus = function () {
  $(".sub-section-title-box").click(function () {
    hide = "#" + $(this).attr("id") + "-hide";
    $(hide).toggle();
    $(".sub-section-title-container").toggleClass("remove-flex");
  });
};


// Start Functions
$(function () {
  $(document).ready(animCoffeeTitle).ready(hideMenus).ready(hideSubMenus);
});
