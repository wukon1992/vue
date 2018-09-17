window.onload=function(){
	// 全局组件注册
	Vue.component('myct',{
		template:"<div>Hi My name Is a Component!</div>"
	});

	Vue.component('test',{
		template:"<button v-on:click='count+=1'>{{count}}</button>",
		data:function(){
			return {count:0}
		}
	});

	Vue.component('enheng',{
		props:['message'],
		template:'<h3>{{message}}</h3>'
	});

	Vue.component('hell',{
		props:['myMessage'],
		template:'<h2>{{ myMessage }}</h2>',
	})

	Vue.component('single',{
		props:['singleStream'],
		template:'<button v-on:click="count += 1">{{ count }}</button>',
		data:function(){
			return {count:this.singleStream} 
		}
	});

	Vue.component('singlet',{
		props:['singleTwo'],
		template:'<button v-on:click="other">{{other}}</button>',
		computed:{
			other:function(){
				return this.singleTwo.trim().toLowerCase();
			}
		}
	})


	var Child = {
		template:"<h3>我是标题，标题阿三</h3>",
	}


	var app = new Vue({
		el:'#app',

		data:{
			message:'',
			a:'BBBBB'
		},
		methods:{

		},
		// 局部组件注册
		components:{
			'myh' : Child
		}
	});
}