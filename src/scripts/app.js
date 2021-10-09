//jQuery requirement
$(document).ready(function () {
  class Project {
    constructor(title, description, link) {
      this.title = title;
      this.description = description;
      this.link = link;
    }

    callProject1() {
      document.querySelector("#title1").innerText = project1.title;
      document.querySelector("#description1").innerText = project1.description;
    }
    callProject2() {
      console.log(project2.title);
      document.querySelector("#title2").innerHTML = project2.title;
      document.querySelector("#description2").innerText = project2.description;
    }
    callProject3() {
      document.querySelector("#title3").innerText = project3.title;
      document.querySelector("#description3").innerText = project3.description;
    }
  }

  const project1 = new Project(
    "AMADOR WEBSITE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Sed saepe cumque similique\
debitis assumenda aspernatur consequatur asperiores eum dignissimos officiis",
    "www.amador.com"
  );

  const project2 = new Project(
    "ALQUILERES TEMPORALES WEBSITE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Sed saepe cumque similique\
debitis assumenda aspernatur consequatur asperiores eum dignissimos officiis",
    "www.alquileres-temporales.com"
  );

  const project3 = new Project(
    "MAKEUP ARTIST WEBSITE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Sed saepe cumque similique\
debitis assumenda aspernatur consequatur asperiores eum dignissimos officiis",
    "www.makeup-artist.com"
  );

  $("#open1").on("click", function () {

    $(".infoCard1").addClass("active");
    $(".active").css("position", "fixed");
    $(".active").css("display", "block");
     $(".active").css("z-index", "5");
    //$('.active').css('width', '$(window).width()')
    $(".active").css("top", "0");
    $(".active").css("bottom", "0");
    $(".active").css("left", "0");
    project1.callProject1();
    return false;
  });

  $("#close1").on("click", function () {
    $(".infoCard1").removeClass("active");
    $(".infoCard1").css("display", "none");
    $(".infoCard2").css("display", "none");
    $(".infoCard3").css("display", "none");

    return false;
  });

  $("#open2").on("click", function () {
    $(".infoCard2").addClass("active");
    $(".active").css("position", "fixed");
    $(".active").css("display", "block");
     $(".active").css("z-index", "5");
    //$('.active').css('width', '$(window).width()')
    $(".active").css("top", "0");
    $(".active").css("bottom", "0");
    $(".active").css("left", "0");
    project2.callProject2();
    return false;
  });

  $("#close2").on("click", function () {
    $(".infoCard2").removeClass("active");
    $(".infoCard1").css("display", "none");
    $(".infoCard2").css("display", "none");
    $(".infoCard3").css("display", "none");

    return false;
  });

  $("#open3").on("click", function () {
    $(".infoCard3").addClass("active");

    $(".active").css("position", "fixed");
    $(".active").css("display", "block");
     $(".active").css("z-index", "5");
    //$('.active').css('width', '$(window).width()')
    $(".active").css("top", "0");
    $(".active").css("bottom", "0");
    $(".active").css("left", "0");
    project3.callProject3();
    return false;
  });

  $("#close3").on("click", function () {
    $(".infoCard3").removeClass("active");
    $(".infoCard1").css("display", "none");
    $(".infoCard2").css("display", "none");
    $(".infoCard3").css("display", "none");

    return false;
  });
});
