
 /////////////Animation

function startAd() {
//    
    var screen = document.getElementById('screen');
    
    //Set positions and attributes
        TweenLite.set(txt1, {opacity:0,left:320});
        TweenLite.set(txt2, {opacity:0});
        TweenLite.set(txt3, {opacity:0});
        TweenLite.set(txt4, {opacity:0});
        TweenLite.set(txt5, {opacity:0});
        TweenLite.set(txt6, {opacity:0,scale:0.2});

        TweenLite.set(legal1, {opacity:0});
        TweenLite.set(legal2, {opacity:0});
        TweenLite.set(legal3, {opacity:0});
    
        TweenLite.set(imgTV, {opacity:0, scale:0.2});
        TweenLite.set(imgTV2, {opacity:0});
        TweenLite.set(imgTV3, {opacity:0});

    
        TweenLite.set(arrow, {opacity:0,scale:0.2});

      //END Set positions and attributes
    
    var adContainer = document.getElementById("container");
    var ctaShimmer = document.getElementById("ctaShimmer");
    
    TweenMax.defaultOverwrite = "false";
    document.getElementById("banner").style.visibility = "visible";

    init();
    listeners();
    
    function listeners(){
        container.addEventListener('mouseenter', ctaOver, false);
        container.addEventListener('mouseleave', ctaOut, false);
    }
    
    function ctaOver(){
        TweenLite.to(shine, .35, {left:150, ease:Sine.easeIn});
        TweenLite.to(flag_shine, .5, {delay:.2, left:196, ease:Sine.easeIn});
    }
    
    function ctaOut(){
        TweenLite.to(shine, 0, {left:-37, ease:Sine.easeIn});
        TweenLite.to(flag_shine, 0, {left:-110, ease:Sine.easeIn});
    }
}



function init(){
    setTimeout (function(){animation1()}, 100);
};

function animation1(){
    TweenLite.to(txt1, .2, {delay:0.2, opacity:1, left:97, ease:Sine.easeIn,onComplete:animation2});  
    
};

function animation2(){
    TweenLite.to(txt1, .2, {delay:1.8, opacity:0, left:97, ease:Sine.easeIn});
    
    TweenMax.to(txt2, .2, {delay:2, opacity:1, ease:Sine.easeIn});
      TweenMax.to(legal1, .4, {delay:2, opacity:1, ease:Sine.easeIn});
    TweenMax.to(imgTV, .4, {delay:2, opacity:1, scaleX:1, scaleY:1, ease:Sine.easeIn, onComplete:animation3});

}

function animation3(){
    TweenLite.to(txt2, .2, {delay:2.3, opacity:0, ease:Sine.easeIn});
     TweenLite.to(imgTV2, .2, {delay:2.3, opacity:1, ease:Sine.easeIn});
    TweenMax.to(legal1, .2, {delay:2.3, opacity:0, ease:Sine.easeIn});
    TweenMax.to(legal2, .2, {delay:2.5, opacity:1, ease:Sine.easeIn});
    TweenMax.to(txt3, .2, {delay:2.5, opacity:1, ease:Sine.easeIn, onComplete:animation4});
    
}
function animation4(){
    
    TweenLite.to(txt3, .2, {delay:2.3, opacity:0, ease:Sine.easeIn});
    TweenMax.to(legal2, .2, {delay:2.3, opacity:0, ease:Sine.easeIn});
    TweenMax.to(legal3, .2, {delay:2.5, opacity:1, ease:Sine.easeIn});
    TweenLite.to(imgTV3, .2, {delay:2.5, opacity:1, ease:Sine.easeIn});
    TweenMax.to(txt4, .2, {delay:2.5, opacity:1, ease:Sine.easeIn, onComplete:animation5});
}

function animation5(){
    TweenLite.to(imgTV2, 0, {delay:0, opacity:0, ease:Sine.easeIn});
    TweenMax.to(txt4, .2, {delay:2.3, opacity:0, ease:Sine.easeIn});
    TweenMax.to(legal3, .2, {delay:2.3, opacity:0, ease:Sine.easeIn});
    TweenMax.to(imgTV, .2, {delay:2.3, opacity:0, scaleX:0.2, scaleY:0.2, ease:Sine.easeIn});
    TweenMax.to(imgTV3, .2, {delay:2.3, opacity:0, scaleX:0.2, scaleY:0.2, ease:Sine.easeIn});
    
    TweenMax.to(txt5, .2, {delay:2.5, opacity:1, x:0, ease:Sine.easeIn});
    TweenMax.to(txt6, .4, {delay:2.5, opacity:1, scaleX:1, scaleY:1, ease:Sine.easeIn});
    TweenLite.to(arrow, .4, {delay:2.5, opacity:1,scaleX:1, scaleY:1, ease:Sine.easeIn});
    
    TweenLite.to(shine, .35, {delay:4,left:150, ease:Sine.easeIn});
    TweenLite.to(flag_shine, .5, {delay:4.2, left:196, ease:Sine.easeIn});
    
}