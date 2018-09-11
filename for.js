window.onload=function(){

	//组件构建应用 个组件实质上是一个拥有预定义选项的一个 Vue 实例
	Vue.component('tudo-item',{ //组件定义需要在Vue实例化之前
		props:['item','index'],
		template:'<li>{{item}}------{{index}}</li>'
	});

	var app = new Vue({
		el:'#app',		
		data:{
			message:'你好，多多指教',
			//for 基础用法 属性定义
			items:[
				{msg:'linux'},
				{msg:'ios'},
				{msg:'windows'},
				{msg:'android'}
			],
			//for 对象迭代用法
			itemsObj: {
				name:'秦小安',
				oldName:'秦小龙',
			},
		}
	});
}