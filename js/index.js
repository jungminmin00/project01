function nav(){     // top포함
    $('nav ul a').on('click', function(){
        let href = $(this).attr('href');
        console.log(href);
        // 누른것 높이 알아서 내려가게 하기
        let idHeight = $(href).offset().top;
        $('html,body').animate{scrollTop(idHeight), 300};
        return false;   // a 막아주기
    })
    
}