<template>
	<div class="counter-component">
      <div class="counter-btn" @click="minus"> - </div>
      <div class="counter-show">
        <input type="text" v-model="number"  @keyup="fixNumber">
      </div>
      <div class="counter-btn" @click="add"> + </div>
    </div>
</template>

<script>
	export default{
		data(){
			return {
				number:this.minnum,
				/*minnum:2,
				maxnum:6*/
			}
		},

		props:{
			minnum: {
		      type: Number,
		      default: 0
		    },
		    maxnum: {
		      type: Number,
		      default: 10
    		}
		},//子组件接受父组件的属性
		computed:{},//计算属性
		watch:{
			number(){
				console.log(this.number)
				if(this.number < this.minnum  || this.number > this.maxnum){
					this.number=this.minnum;
				}
				this.$emit("onChange",this.number)
			}
		},//监听
		methods:{
			minus:function(){
				if(this.number<=this.minnum){
					return;
				}else{
					this.number--;
				}				
			},
			add(){
				if(this.number>=this.maxnum){
					return;
				}else{
					this.number++;
				}
				
			},
			fixNumber(){
				let newnumber;
				//console.log(typeof this.number);
				if(typeof this.number ==="string"){
					newnumber=Number(this.number.replace(/\D/g,''))

				}else{
					newnumber=this.number;
				}
				if(this.number>this.maxnum || this.number<this.minnum){
						newnumber=this.minnum;
				}
				this.number=newnumber;
			}


		},//方法
		filters:{},//过滤器
		directives:{},//指令
		mouneted(){},//
		created(){},
		http:{},
		components:{}//组件								
	}
</script>

<style scoped>
	
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
  text-align: center;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>