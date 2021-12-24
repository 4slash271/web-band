$(".bars-wrapper").click(function(e){
    $(".mb-navi-wrapper").toggleClass("active");
})
$(".tour-wrapper .bt-buy").click(function(){
    $(".modal-wrapper").addClass("active");
    $(".modal-wrapper > .modal-wrap").css("transform");
    $(".modal-wrapper > .modal-wrap").css("transform","translateY(0)");
})
$(".modal-wrapper .bt-send, .modal-wrapper .bt-close").click(function(e){
    $(".modal-wrapper").removeClass("active");
    $(".modal-wrapper > .modal-wrap").css("transform","translateY(-100vh)");
})

var swiper = new Swiper(".main-wrapper .swiper-container", {
    loop:true,
    effect:"fade",
    speed: 1000,
    autoplay:{
        delay:5000, disableOnInteraction: false
    },
    navigation: {
		nextEl: ".main-wrapper .bt-next",
		prevEl: ".main-wrapper .bt-prev",
	},
})

