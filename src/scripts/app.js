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
    $(".active").fadeIn("slow");
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
    $(".active").fadeOut("slow");

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
    $(".active").fadeIn("slow");
    project2.callProject2();
    return false;
  });

  $("#close2").on("click", function () {
    $(".infoCard2").removeClass("active");
    $(".infoCard1").css("display", "none");
    $(".infoCard2").css("display", "none");
    $(".infoCard3").css("display", "none");
    $(".active").fadeOut("slow");

    return false;
  });

  $("#open3").click(function () {
    $(".infoCard3").addClass("active");
    $(".active").css("position", "fixed");
    $(".active").css("display", "block");
    $(".active").css("z-index", "5");
    //$('.active').css('width', '$(window).width()')
    $(".active").css("top", "0");
    $(".active").css("bottom", "0");
    $(".active").css("left", "0");

    $("#open").fadeIn(5000);

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

  $(".navBar-home").on("click", function () {
    $(".navBar-home").animate(
      {
        width: "100px",
      },
      500
    );
  });
  $(".navBar-document").on("click", function () {
    $(".navBar-document").animate(
      {
        width: "100px",
      },
      500
    );
  });
  $(".navBar-contact").on("click", function () {
    $(".navBar-contact").animate(
      {
        width: "100px",
      },
      500
    );
  });
/*
  let $buttonForm = document.getElementById("buttonForm");
  $buttonForm.addEventListener("click", function () {
    const $nameForm = document.getElementById("name");
    localStorage.setItem("nombre", $nameForm.value);
    const $messageForm = document.getElementById("message");
    localStorage.setItem("mensaje", $messageForm.value);
    alert("Gracias por tu mensaje 😊🌈 ");
  });

  const $infoRetrieve = {
    nombre: "gianina ",
    mensaje: "hola",
  };

  let $storedName = localStorage.getItem("nombre");
  $infoRetrieve.nombre = $storedName;
  let $storedMessage = localStorage.getItem("mensaje");
  $infoRetrieve.mensaje = $storedMessage;
  console.log($infoRetrieve);
*/
/*
  $(function () {
    $("#buttonForm").click(function () {
      const parametros = {
        nombre: "gianina ",
        mensaje: "hola",
      };  
      $.ajax ({
        data: parametros,
        url: 'server.php',
        method:'POST',
        beforeSend: function(){
          $('#beforeSend').text('Se está enviando tu info')
        }
      
      })

    });
  });


*/



});



