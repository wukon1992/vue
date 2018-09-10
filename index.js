window.onload = function(){
	//组件构建应用 个组件实质上是一个拥有预定义选项的一个 Vue 实例
	Vue.component('tudo-item',{ //组件定义需要在Vue实例化之前
		template:'<li>I Love You</li>'
	})

	//定义引入prop 使用 v-bind 将tudo 传入组件
	Vue.component('myitem', {
	  props: ['tudo'],
	  template: '<li>{{ tudo.text }}</li>'
	})

	var app = new Vue({
	  	el: '#app',
	  	data: { //变量申明
	    	message: 'Hello Vue!', //申明式渲染
	    	title: 'You loaded this page on ' + new Date(), //bind 绑定 z指令 表示v下提供的元素特殊属性
	    	show:true, //v-if='show' //显示或者展示
	    	hidden:false,
	    	datas:[ //v-for 循环
	    		{text:'first'},
	    		{text:'second'},
	    		{text:'third'}
	    	]
	  	}
	  	,methods: { //方法定义
	  		reverser:function(){
	  			// this.message = this.message.split('').reverse().join('');
	  			this.message = " I love You !"
	  		}
	  	}
	});
}