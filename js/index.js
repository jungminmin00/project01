$(function(){
  let windowW = $(window).width();
  console.log(windowW);
  banner();
  if(windowW >= 1170){
    nav();
  }else if(windowW < 1169 && windowW >= 980){
    nav();
  }else if(windowW < 979 && windowW >= 580){  /* 타블릿 */
    tmNav();
  }else if(windowW < 579){  /* 모바일 */
    tmNav();
  }

})

// 내비게이션
function nav(){
  // $('body').css('background-color', 'pink')
  $('nav ul a').on('click', function(){
    let href = $(this).attr('href');
    let idHeight = $(href).offset().top;
    $('html,body').animate({scrollTop: idHeight}, 500);
    return false;
  });
  $('aside>p').on('click', function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
}


// 모바일, 타블릿 
function tmNav(){
  let navWidth = $('nav').width();
  $('header #navMenu').on('click', function(){
    $('header #navMenu').animate({opacity: '0'});
    $('nav').animate({marginLeft:'0'},500);
  });
  $('nav p').on('click', function(){
    $('nav').animate({marginLeft:"-" + navWidth}, 500);
    $('header #navMenu').animate({opacity: '1'});
  });
  $('nav ul a').on('click', function(){
    let href = $(this).attr('href');
    let idHeight = $(href).offset().top;
    $('nav').animate({marginLeft:"-" + navWidth}, 500);
    $('header #navMenu').animate({opacity: '1'});
    $('html,body').animate({scrollTop: idHeight}, 500);
    return false;
  });
}

function banner(){
    let fullWidth = $('#box01 .all>li').width();
    let str;

    $('#box01 .all>li:last').prependTo('#box01 .all');
    $('#box01 .all').css('margin-left', '-'+fullWidth+'px');
    // 함수명
    timer();

    $('#box01 .all>li').each(function(){
        $(this).on('mouseenter', function(){
        stop();
        });
    });
    $('#box01 .all>li').each(function(){
        $(this).on('mouseleave', function(){
        timer();
        });
    });
    // 타이머 함수
    function timer(){
        str = setInterval(ani, 2500);
    }
    function stop(){
        clearInterval(str);
    }
    // subMenu
    $('.subMenu li').on('mouseenter', function(){
        $(this).css('width', '60px');
    }).on('mouseleave', function(){
        $(this).css('width', '30px');
    });
}

function ani(){
  let fullWidth = $('#box01 .all>li').width();
  $('#box01 .all').stop().animate({marginLeft: '-='+fullWidth+'px'}, function(e){
    $('#box01 .all>li:first').appendTo('#box01 .all');
    $('#box01 .all').css('margin-left', '-'+fullWidth+'px')
  });
}