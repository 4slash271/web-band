$(".bars-wrapper").click(function(e){
    $(".mb-navi-wrapper").toggleClass("active");
})
$(".tour-wrapper .bt-buy").click(function(){
    $(".modal-wrapper").addClass("active");
    $(".modal-wrapper > .modal-wrap").css("transform");
    $(".modal-wrapper > .modal-wrap").css("transform","translateY(0)");
})

$('.modal-wrapper, .modal-wrapper .bt-close').click(function(e) {
	$('.modal-wrapper').removeClass('active')
	$('.modal-wrapper > .modal-wrap').css('transform', 'translateY(-100vh)')
})

$('.modal-wrapper .modal-wrap').click(function(e) {
	e.stopPropagation()
})

$('.header-wrapper .mb-navi').click(function(){
    $(".mb-navi-wrapper").removeClass("active")
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

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var center = new kakao.maps.LatLng(37.555496, 126.936840); //지도의 중심좌표.
var options = { //지도를 생성할 때 필요한 기본 옵션
        center :center,
        level: 2 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
map.setZoomable(false);


window.addEventListener("resize",function(){
    map.setCenter(center);

})
