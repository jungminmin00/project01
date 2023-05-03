// 내비게이션
function nav(){
  $('#header a').on('click', function(){
    let href = $(this).attr('href');
    let idHeight = $(href).offset().top;
    $('html,body').animate({scrollTop: idHeight}, 500);
    console.log(href, idHeight);
    return false;
  });
  $('aside>p').on('click', function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
}
// 모바일, 타블릿 
function tNav(){
  let navWidth = $('nav').width();
  $('header #navMenu').on('click', function(){
    $(this).css('color', '#fff');
    $('nav').animate({marginLeft:'0'},500);
  });
  $('nav ul a').on('click', function(){
    const navA = $(this).attr('href');
    const posY = $(navA).offset().top;
    const headerT = $('header').innerHeight();
    $('nav').css('left', '-'+'navWidth'+'px')
    $('html, body').animate({scrollTop: posY - headerT});
    $('header #navMenu').css('color', '#000');
    $('nav').css('left', '-'+navWidth+'px');
    return false;
  });
  $('nav p').on('click', function(){
    $('nav').css('left', '-'+navWidth+'px');
    $('header #navMenu').css('color', '#000');
  });
}
function mNav(){
  let navWidth = $('nav').width();
  $('header #navMenu').on('click', function(){
    $(this).css('color', '#fff');
    $('nav').animate({left:'0'},500);
  });
  $('nav ul a').on('click', function(){
    const navA = $(this).attr('href');
    const posY = $(navA).offset().top;
    const headerT = $('header').innerHeight();
    $('nav').css('left', '-'+'navWidth'+'px')
    $('html, body').animate({scrollTop: posY - headerT});
    $('header #navMenu').css('color', '#000');
    $('nav').css('left', '-'+navWidth+'px');
    return false;
  });
  $('nav p').on('click', function(){
    $('nav').css('left', '-'+navWidth+'px');
    $('header #navMenu').css('color', '#000');
  });
}