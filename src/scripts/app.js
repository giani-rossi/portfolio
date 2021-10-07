//jQuery requirement

$(document).ready(function () {
  $("#open1").on("click", function () {
    $(".cardOpen").addClass("active");
    
    $('.active').css('position', 'fixed')
    $('.active').css('display', 'block')
    $('.active').css('z-index', '5')
    //$('.active').css('width', '$(window).width()')
    $('.active').css('top', '0')
    $('.active').css('bottom', '0')
    $('.active').css('left', '0')

   
    

    return false;
  });

  $("#close1").on("click", function () {
    $(".cardOpen").removeClass("active");

    $('.infoCard1').css('display' , 'none')
    $('.infoCard2').css('display' , 'none')
    $('.infoCard3').css('display' , 'none')   

    return false;
  });

  $("#open2").on("click", function () {
    $(".cardOpen").addClass("active");
    $(".cardOpen").addClass("active");
    $('.active').css('position', 'fixed')
    $('.active').css('display', 'block')
    $('.active').css('z-index', '3')
    //$('.active').css('width', '$(window).width()')
    $('.active').css('top', '0')
    $('.active').css('bottom', '0')
    $('.active').css('left', '0')

    return false;
  });

  $("#close2").on("click", function () {
    $(".cardOpen").removeClass("active");
    $('.infoCard1').css('display' , 'none')
    $('.infoCard2').css('display' , 'none')
    $('.infoCard3').css('display' , 'none')   


    return false;
  });

  $("#open3").on("click", function () {
    $(".cardOpen").addClass("active");
    $(".cardOpen").addClass("active");
    $('.active').css('position', 'fixed')
    $('.active').css('display', 'block')
    $('.active').css('z-index', '4')
    //$('.active').css('width', '$(window).width()')
    $('.active').css('top', '0')
    $('.active').css('bottom', '0')
    $('.active').css('left', '0')

    return false;
  });

  $("#close3").on("click", function () {
    $(".cardOpen").removeClass("active");
    $('.infoCard1').css('display' , 'none')
    $('.infoCard2').css('display' , 'none')
    $('.infoCard3').css('display' , 'none')   


    return false;
  });
});
