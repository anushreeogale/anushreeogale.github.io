$(document).ready(function () {
  var lastId,
    topMenu = $("#mainNav"),
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top + 1;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      },
      1200
    );
    e.preventDefault();
  });
  $(window).scroll(function () {
    var fromTop = $(this).scrollTop();
    var cur = scrollItems.map(function () {
      if ($(this).offset().top <= fromTop) return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    }
  });
});
