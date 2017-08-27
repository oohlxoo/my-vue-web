<template>
	<div>
	 <div class="chooser-component">
        <ul class="chooser-list">
          <li v-for="(item,index) in piblishdata" @click="chooseotions(index)"
			 :class="{active: checkActive(index)}">
        {{item.label}}
          </li>
        </ul>
      </div>
	</div>
</template>

<script>

	export default{
		props:{
			piblishdata:{
				type:Array,
				default:[{
					label:"qq",
					value:1
				}]
			}
		},
		data(){
			return{
				chooseData:[0],//已经选中的数组
				testArray:[]
				
			}
		},
		methods:{
			chooseotions(index){
				if(this.chooseData.indexOf(index)===-1){
						this.chooseData.push(index);
				}else{
					this.chooseData=_.remove(this.chooseData,function(inx){						
							 return inx !== index   
				})
				}

				 let nowObjArray = _.map(this.chooseData, (idx) => {
				        return this.piblishdata[idx]
				      })
				      this.$emit('onChange', nowObjArray)
			},
			 checkActive (index) {
		      return this.chooseData.indexOf(index) !== -1
		    }
		},
		mounted(){

		}

	}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
	
</style>