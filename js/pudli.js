function pudlic(){

	console.log((Math.random()*20))
	var cOlor = ['#36dbd9','#fe4365','#eb6841','#fe4365','#fc9d9a','#edc951','#c8c8a9','#c8c8a9'
	,'#83af9b','#eb6841','#8a9b0f','#3fb8af','#fe4365','#fc9d8a','#3299bb'];
	var cOlors = {
		data:['个人博客','Ui设计','前端设计','Html','CSS3','网页设计','百度','javascript','jQuery','Web开发','Html','CSS3','Html+CSS3','百度']	};
	var oUl = document.getElementById('bq-label');
	console.log(oUl);
	var oLis = oUl.getElementsByTagName('li');
	for (var i = 0; i < 14; i++) {
		var oLi = document.createElement('li');
		oUl.appendChild(oLi);
		parseInt(Math.random(cOlor));
		oLis[i].onmousemove = function(){
			for (var i = 0; i < oLis.length; i++) {
				oLis[i].index=i;
				oLis[i].style.background='';
				var cOl = this.index;
				this.style.background=cOlor[cOl];
			}
		}
		oLis[i].onmouseout = function(){
			for (var i = 0; i < oLis.length; i++) {
				oLis[i].style.background='';
			}
		}
		oLis[i].innerHTML=cOlors.data[i];
	}
	//点击排行
	var oMyTab = document.getElementById('myTab');
	var oA = oMyTab.getElementsByTagName('a');
		oA[0].style.background ='#39bffd';
		oA[0].style.color ='#fff';
		for (var i = 0; i < oA.length; i++) {
			oA[i].onclick = function(){
				for (var i = 0; i < oA.length; i++) {
					oA[i].style.background = '';
					oA[i].style.color = '';
				}
				this.style.background ='#39bffd';
				this.style.color ='#fff';
				this.style.textDecoration ='none';  
			}	
		}
	//全局渐现
	var aWrap = document.getElementsByClassName('fade-in');
	var aP= document.body.scrollTop;
	var oaa= document.body.scrollTop+document.documentElement.clientHeight;
		for (var i = 0; i < aWrap.length; i++) {
			if(aWrap[i].offsetTop<=oaa){
				aWrap[i].style.opacity='1';	
				aWrap[i].style.marginTop=0+'px';
			}
		}
	window.onscroll =function(){
	var aP= document.body.scrollTop;
	var oaa= document.body.scrollTop+document.documentElement.clientHeight;
		for (var i = 0; i < aWrap.length; i++) {
			if(aWrap[i].offsetTop<=oaa){
				aWrap[i].style.opacity='1';
				aWrap[i].style.marginTop=0+'px';
			}
		}
	}
 // var mySwiper = new Swiper ('.show-zs', {
	//   onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	//     swiperAnimateCache(swiper); //隐藏动画元素 
	//     swiperAnimate(swiper); //初始化完成开始动画
	//   }, 
	//   loop: true,
	//   autoplay : 3000,
	//   speed:1000,
	//   autoplayDisableOnInteraction : false,
	//   onSlideChangeEnd: function(swiper){ 
	//     swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	//   } 
 //  }) 


}