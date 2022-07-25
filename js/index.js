window.onload = function(){
  //includes
  $("#menu").load("fragments/index/menu.html");
  $("#profile").load("fragments/index/profile.html");
  $("#about").load("fragments/index/about.html");
  $("#experience").load("fragments/index/experience.html");
  $("#skills").load("fragments/index/skills.html");
  $("#projects").load("fragments/index/projects.html");

  init_state_bt_up();
}
