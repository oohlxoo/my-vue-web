<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
        <a href="">
          <transition name="slide-trans">
             <img v-show="isShow" :src="slides[nowIndex].src">
          </transition>

          <transition name="slide-trans-old">
             <img v-show="!isShow" :src="slides[nowIndex].src">
          </transition>
        </a>
    </div> 
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(preIndex)">&lt;</li>
      <li v-for="(slides,index) in slides" @click="goto(index)">
          <a :class="{'on':index===nowIndex}">{{index+1}}</a>
      </li>
       <li @click="goto(nexIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default{
  props:{
    slides:{
      type:Array,
      default:[]
    }
  },
	data (){
    return {
     nowIndex:0,
     isShow:true
    }
  },
  computed:{
    preIndex:function(){
      if(this.nowIndex==0){
       return this.slides.length-1;
      }else{
       return this.nowIndex-1;
      }
    },
    nexIndex:function(){
      if(this.nowIndex==this.slides.length-1){
       return 0;
      }else{
        return this.nowIndex+1;
      }
    }
  },

  methods:{
    goto:function(index){
      this.isShow=false;
      this.$emit('onchange',index);      
      setTimeout(()=>{
            this.isShow=true;
            this.nowIndex=index;
       },80);
     },
    runInv(){
        this.invId=setInterval(()=>{// 相当于 this.invId=setInterval(function(){

          this.goto(this.nexIndex)
          },1000)
     },
    clearInv(){
         clearInterval(this.invId)
     }
  },
  mounted(){
    this.runInv();
  }
}
</script>


<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  height: 400px;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
  background-color: white;
  color: blue;
  padding:0 3px;
}
</style>