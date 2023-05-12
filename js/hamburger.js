$(document).ready(function () {
  $("#nav-button").on("click", function () {
    var menu = $(".sp-nav"), // スライドインするメニューを指定
      menuBtn = $("#nav-button"), // メニューボタンを指定
      menuWidth = menu.outerWidth();

    menuBtn.toggleClass("open");
    if (menuBtn.hasClass("open")) {
      $(".sp-nav").css("display", "block");
      menu.stop().animate({ left: 0 }, 300);
      $(".fa-times").css("display", "block");
      $(".fa-bars").css("display", "none");
    } else {
      menu.stop().animate({ left: +menuWidth }, 300, function () {
        $(".sp-nav").css("display", "none");
      });
      $(".fa-times").css("display", "none");
      $(".fa-bars").css("display", "block");
    }
  });
});
