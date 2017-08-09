
function vuezu(){
// class="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-qp-tu"
Vue.component("theArticle",{
				data:function(){
					return{
						selectShow:false
					};
				},
				props:["biaoti","but","jianhtu",'youlan','ul'],
				template:`
					<div class="text-qp shadow">
						<ul v-bind:class="ul">
							<li v-bind:class="jianhtu"></li>	
						</ul>
						<ul class="col-lg-9 col-md-9 col-sm-9 col-xs-12 text-qp-wb">
							<li v-bind:class='biaoti'>标题</li>
							<span v-bind:class="youlan">
								
							</span>
							<dl v-bind:class="but"></dl> 
							<ul class="author col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<li><a href="#">2017-7-7</a></li>					
								<li><p><a href="#" class="author">博客作者:min </a><p></li>
								<i></i>
								<li><a href="#">评论( <b> 0 </b> )</a></li>
								<li><a href="#">游览 (<b> 0 </b>)</a></li>
							</ul>
						</ul>
					</div>
				`
			})
			new Vue({
				el:".app"
			});
}