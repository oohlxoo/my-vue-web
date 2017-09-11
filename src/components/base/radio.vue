
<template>
  <div>
      <div class="chooser-component">
        <ul class="chooser-list">
          <li v-for="(item,index) in selections" :key="index" @click="choosemyself(index)" 
            :class="{active:(index===nowIndex)}">
          {{item.label}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default{
  props:{    //也可简写成props:['selections'],
    selections:{
      type:Array,
      default:[{
          label: '公主病',
          value: 0
      }]
    }  
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    choosemyself (index) {
      this.nowIndex=index;
      this.$emit("onChange",this.selections[index]); 
    }
  },
  watch:{},
  computed:{},
  mounted(){},
  components:{}
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