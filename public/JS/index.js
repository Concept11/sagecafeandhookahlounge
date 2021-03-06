var $hamburger = $(".hamburger")
$hamburger.on("click", function(e) {
$hamburger.toggleClass("is-active")
var active = $(".hamburger").hasClass("is-active")
if($(window).width() <= 576 & active){
    $(".nav-link").animate({opacity: 1},{duration: 1000})
    $(".navbar").css("backgroundColor", "#0E1717")
    $(".navbar").animate({height: "100vh"}, {duration: 300})
    $(".left-hookah").css("display", "none")
    $(".socialLink").animate({opacity: 1},{duration: 1000})
    $(".nav-link").css("z-index", "1")
    $(".mobile-menu-head-txt").css("z-index", "0")
    $(".nav-link, .social-link").css("visibility", "visible")
}
else{
    $(".nav-link, .social-link").css("visibility", "hidden")
    $(".nav-link").css("z-index", "2")
    $(".socialLink").animate({opacity: 0},{duration: 200})
    $(".left-hookah").css("display","block")
    $(".navbar").css("backgroundColor", "transparent")
    $(".nav-link").animate({opacity: 0},{duration: 200})
    $(".navbar").animate({height: "10vh"}, {duration: 300})
    $(".nav-link").css("z-index","-1")
}

})
        $("#menu").on("click", function(){
            var menuTop = $("#menuId").offset().top
                $(window).scrollTop(menuTop - $(window).height()/10)
                $(".navbar").css("backgroundColor", "transparent")
                $(".navbar").animate({height: "10vh"},{duration: 200})
                $(".hamburger").removeClass("is-active")
                if($(window).width() <= 576){
                    $(".nav-link").animate({opacity: 0}, {duration: 200})
                    $(".socialLink").animate({opacity: 0},{diration: 200})
                    $(".left-hookah").css("display", "block")
                }
            })
        $("#calendar").on("click", function(){
            var eventTop = $("#eventId").offset().top
                $(window).scrollTop(eventTop - $(window).height()/10)
                $(".navbar").css("backgroundColor", "transparent")
                $(".navbar").animate({height: "10vh"},{duration: 200})
                $(".hamburger").removeClass("is-active")
                if($(window).width() <= 576){
                    $(".nav-link").animate({opacity: 0}, {duration: 200})
                    $(".socialLink").animate({opacity: 0},{diration: 200})
                    $(".left-hookah").css("display", "block")
                }
        })      
        $("#gallery").on("click", function(){
            var galleryTop = $("#galleryId").offset().top
                $(window).scrollTop(galleryTop - $(window).height()/10)
                $(".navbar").css("backgroundColor", "transparent")
                $(".navbar").animate({height: "10vh"},{duration: 200})
                $(".hamburger").removeClass("is-active")
                if($(window).width() <= 576){
                    $(".nav-link").animate({opacity: 0}, {duration: 200})
                    $(".socialLink").animate({opacity: 0},{diration: 200})
                    $(".left-hookah").css("display", "block")
                }
        })
        $("#info").on("click", function(){
            var infoTop = $("#infoId").offset().top
                $(window).scrollTop(infoTop - $(window).height()/10)
                $(".navbar").css("backgroundColor", "transparent")
                $(".navbar").animate({height: "10vh"},{duration: 200})
                $(".hamburger").removeClass("is-active")
                if($(window).width() <= 576){
                    $(".nav-link").animate({opacity: 0}, {duration: 200})
                    $(".socialLink").animate({opacity: 0},{diration: 200})
                    $(".left-hookah").css("display", "block")
                }
        })

        /*on resize set opacity to one*/
            document.getElementById("hookahbtn").addEventListener("click",function(){
                document.getElementById("hookah").style.display = "flex";
                document.getElementById("drink").style.display = "none";
                document.getElementById("food").style.display = "none";
            })
            document.getElementById("drinkbtn").addEventListener("click",function(){
                document.getElementById("hookah").style.display = "none";
                document.getElementById("drink").style.display = "flex";
                document.getElementById("food").style.display = "none";
            })
            document.getElementById("foodbtn").addEventListener("click",function(){
                document.getElementById("hookah").style.display = "none";
                document.getElementById("drink").style.display = "none";
                document.getElementById("food").style.display = "flex";
            })
             
            /*on resize set opacity to one mobile*/
             document.getElementById("mobileHookah").addEventListener("click",function(){
                document.getElementById("hookah").style.display = "flex";
                document.getElementById("drink").style.display = "none";
                document.getElementById("food").style.display = "none";
            })
            document.getElementById("mobileDrink").addEventListener("click",function(){
                document.getElementById("hookah").style.display = "none";
                document.getElementById("drink").style.display = "flex";
                document.getElementById("food").style.display = "none";
            })
            document.getElementById("mobileFood").addEventListener("click",function(){
                document.getElementById("hookah").style.display = "none";
                document.getElementById("drink").style.display = "none";
                document.getElementById("food").style.display = "flex";
            })
 
        // Initialize and add the map
        function initMap() {
        // The location of Uluru
        var sage = {lat: 28.0367802, lng: -82.7383719};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: sage});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: sage, map: map});
        }
    
        AOS.init();

        /*set width of tab container to full width of body container */
        var bodyWidth = $(".menu-body-container").width()
        $(".tab-container").css("width", bodyWidth)

        /*menu active*/
        $(".menu-head-txt").on("click", function(){
            $(".menu-head-txt").removeClass("active1")
            $(this).addClass("active1")
        })


        /*mobile menu active*/
        $(".mobile-menu-head-txt").on("click", function(){
            $(".mobile-menu-head-txt").removeClass("active")
            $(this).addClass("active")
        })

        $(document).on("scroll", function(){
            var height = $(window).height()
            var scroll = $(window).scrollTop() + height / 9

            if(scroll > height){
                $(".mobile-menu-head-txt").css("z-index", "0")
                $(".navbar").css({"background-color": "#0E1717"})
                $(".navbar").css({"border-bottom":"1px solid var(--gold)"})
            }
            else{
                $(".mobil-menu-head-txt").css("z-index", "1")
                $(".navbar").css({"background-color": "transparent"})
                $(".navbar").css({"border-bottom":"none"})
            }
        })
