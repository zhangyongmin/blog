$(function(){
//公共部分
	pudlic();
//banner
    var mySwipers = new Swiper ('#banner', {
	 	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
	  		loop:true, //是否循环。环路
	 		pagination : '.swiper-pagination',
	 		effect : 'fade',
	 		autoplay : 4000,  //播放
	 		speed:2000,//速度
	 		nextButton: '.swiper-button-next',
	    	prevButton: '.swiper-button-prev',
	    	paginationClickable :true,
	 		autoplayDisableOnInteraction : false,  //操作后是否继续播放
 		 onSlideChangeEnd: function(swiper){ 
	    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  	} 
    })
//.works-nz网页制作
    var mySwiper2 = new Swiper ('.works-nz', {
    // direction: 'vertical',
		loop: true,
		autoplay : 3000,
		speed:2000,
		effect : 'cube',
		autoplayDisableOnInteraction : false,
    }) 
//  //图片欣赏
 var mySwiper1 = new Swiper ('.show-zs', {
	  // onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	  //   swiperAnimateCache(swiper); //隐藏动画元素 
	  //   swiperAnimate(swiper); //初始化完成开始动画
	  // }, 
	  loop: true,
	  autoplay : 3000,
	  speed:1000,
	  autoplayDisableOnInteraction : false,
	  // onSlideChangeEnd: function(swiper){ 
	  //   swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  // } 
  }) 

	
})
