<template>
	<div class="selection-component">
		<div class="selection-show"  @click="showSelection">
			<span>{{vseleDataProp[nowIndex].label}}</span>
			<div class="arrow"></div>
		</div>
		<div class="selection-list" v-show="toggleSel">
			<ul>
				<li v-for="(obj,index) in vseleDataProp"   @click="changeNum(index)">{{obj.label}}</li>	
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
    props:
    {
      vseleDataProp:{
        type:Array,
        default:[
          {
            label:"123",
            value:0
          }
        ]
      },
      defaultValue:{
        type:Number,
        default:0
      }
    },
    data(){
      return {
         toggleSel:false,
         nowIndex:this.defaultValue
      }    
    },
    methods:{
      showSelection(){
          this.toggleSel=!this.toggleSel;
      },
      changeNum(index){
          this.showSelection();
          this.nowIndex=index;
          this.$emit('onTypedata',this.vseleDataProp[index]);
      }
    },
   mounted(){
   //  console.log(this.vseleDataProp)
  }

    
	}
</script>

<style type="text/css">
	
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
  width: 60px
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>