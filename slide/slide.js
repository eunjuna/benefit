$(function(){

    $(".slide").slick({
      arrows: false, /* 좌우 버튼 없애려면 false*/ 
      dots: true, /* 하단 인디게이터 살리려면 true*/
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $(".slide2").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });

  });