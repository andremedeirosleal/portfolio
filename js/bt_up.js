var bt_up;
var prevScrollpos = window.pageYOffset;
var navLinkClick = false;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bt_up.style.display = "block";
  } else {
    bt_up.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && !navLinkClick) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  navLinkClick = false;
  scrollFunction()
}

function init_state_bt_up() {
  window.scrollTo(0, 0);
  bt_up = document.getElementById("bt-up");

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
}

