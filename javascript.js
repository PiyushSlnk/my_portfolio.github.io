$(document).ready(function(){
    $(Window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrolltop:0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarousel({

    }); 
}) ;