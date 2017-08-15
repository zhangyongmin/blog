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
	function getParam(id,_url){
		 var url =_url||window.document.location.href;
		 var url=url.toString();
		 var u = url.split("?");
		 var get = {};
			 if (typeof(u[1]) == "string") {
			   u = u[1].split("&");
			   for (var i in u) {
			     var j = u[i].split("=");
			     get[j[0]] = j[1];
			      
			   }
				 } else {
				   return;
				 }
				 return get[id];
	}
		var tid = getParam('tid');
			if (!tid) {
				tid=1
			}

			//内容标题简介
	$.ajax({
		url:'http://jsonp.smallfox.cc/module/article/type.php',
		type:'get',
		data:{
			pt:'jsonp',
			ajax:'yes',
			tid:4,
			page:1,
		},
		callback:'callback',
		dataType:'jsonp',
		success:function(data){
			var paihang =$('.home ul>li>a').length;
			for (var i = 0; i < paihang; i++) {
			$('.home ul>li>a').eq(i).append("<a href='neirong.html?aid="+data.data[i].j_cid+'&tid='+data.data[i].j_tid+"'>"+data.data[i].j_name+"</a>");
			}
		}
	})
}
			

		

