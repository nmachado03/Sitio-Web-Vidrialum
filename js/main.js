$(document).ready(function() {
  $("#menu_bar").click(function() {
    $("body").toggleClass("visible_menu");
  });
  $(window).scroll(function() {
    let sc = $(window).scrollTop();
    if (sc > 500) {
      $(".header").addClass("header_2");
      $(".btn-header").addClass("btn-header_2");
      $(".logo").addClass("logo_2");
      $(".menu_hamburger").addClass("menu_hamburger_2");
    } else {
      $(".header").removeClass("header_2");
      $(".btn-header").removeClass("btn-header_2");
      $(".logo").removeClass("logo_2");
      $(".menu_hamburger").removeClass("menu_hamburger_2");
    }
  });
});
