$(".bars-wrapper").click(function(){
    $(".mb-navi-wrapper").toggleClass("active");
})
$(".tour-wrapper .bt-buy").click(function(){
    $(".modal-wrapper").toggleClass("active");
    $(".modal-wrapper > .modal-wrap").css("transform","translateY(0)");
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

