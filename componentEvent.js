window.onload=function(){
	Vue.component('mymodel',{
		model:{
			prop:'checked',
			event:'change'
		},
		props:{
			checked:Boolean	
		}

	});

	Vue.component('button-counter', {
	  template: '<button v-on:click="increment">{{ counter }}</button>',
	  data: function () {
	    return {
	      counter: 0
	    }
	  },
	  methods: {
	    increment: function () {
	      this.counter += 1
	      this.$emit('increment')
	    }
	  }
	});

	Vue.component('currency-input', {
	  template: '\
	    <span>\
	      $\
	      <input\
	        ref="input"\
	        v-bind:value="value"\
	        v-on:input="updateValue($event.target.value)"\
	      >\
	    </span>\
	  ',
	  props: ['value'],
	  methods: {
	    // Instead of updating the value directly, this
	    // method is used to format and place constraints
	    // on the input's value
	    updateValue: function (value) {
	      var formattedValue = value
	        // Remove whitespace on either side
	        .trim()
	        // Shorten to 2 decimal places
	        .slice(0, value.indexOf('.') + 3)
	      // If the value was not already normalized,
	      // manually override it to conform
	      if (formattedValue !== value) {
	        this.$refs.input.value = formattedValue
	      }
	      // Emit the number value through the input event
	      this.$emit('input', Number(formattedValue))
	    }
	  }
	})

	var bus = new Vue()
	// 触发组件 A 中的事件
	bus.$emit('id-selected', 1)
	// 在组件 B 创建的钩子中监听事件
	bus.$on('id-selected', function (id) {
	  // ...
	})



	var app = new Vue({
		el:'#app',
		data:{
			total:0
		}
		,methods:{
			incrementTotal: function () {
		      this.total += 1
		    }
		}
	});
}