$("a.nav-link").click(function () {
  navLinkClick = true;
  $('.navbar-collapse').collapse('hide');
  document.getElementById("navbar").style.top = "-50px";
});