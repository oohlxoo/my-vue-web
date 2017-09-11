<template>
	<div class="index-wrap">
	   	<div class="index-left">
			<div class="index-left-block">
				<h2><router-link to="/details">全部产品</router-link></h2>
				<template v-for="product in prodictList">
					<h3>{{product.title}}</h3>
					<ul >
						<li v-for="pro in product.list"><a :href="pro.url">{{pro.title}}</a>
						<sup class="hot" v-if="pro.hot">hot</sup>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>	
					
				<h2>最新消息</h2>
				<template>
					<ul>
						<li v-for="item in menuList">
							<a :href="item.url">{{item.title}}</a>
						</li>
					</ul>
				</template>		
			</div>
		</div>
		<div class="index-right">
			<slideShow :slides="slides" @onchange="doSomething"></slideShow>
			<div class="index-board-list">
				<div class="index-board-item" v-for='(board,index) in boardList' :class="[{'line-last' : index%2!==0},'index-board-'+board.id]">
					<div class="index-board-item-inner">
					<h2>{{board.title}}</h2>
					<p>{{board.description}}</p>
					<div class="index-board-button">
						<a href="" class="button">立即购买</a>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import slideShow from '../components/slideShow'
	export default{
		components:{
			slideShow
		},
			data(){
			return {
				prodictList:{
					pc:{
						title:"PC产品",
						list:[
							{
								title:"数据分析",
								url:"http://www.baidu.com",
								hot:true
						 	},
						 	{
								title:"数据预购",
								url:"http://www.baidu.com"
						 	},
						 	{
								title:"流量分析",
								url:"http://www.baidu.com",
								hot:true
						 	},
						 	{
								title:"广告发布",
								url:"http://www.baidu.com"
						 	}
						]
					},
					app:{
						title:'应用类',
						last:true,
						list:[
							{
								title:'91助手',
								url:'http://www.taobao.com'
							},
							{
								title:'产品助手',
								url:'http://www.taobao.com',
								hot:true
							},
							{
								title:'智能地图',
								url:'http://www.taobao.com'
							},
							{
								title:'团队语音',
								url:'http://www.taobao.com'
							}
						]
					}
				},
				boardList: [
			        {
			          title: '开放产品',
			          description: '开放产品是一款开放产品',
			          id: 'car',
			          toKey: 'analysis',
			          saleout: false
			        },
			        {
			          title: '品牌营销',
			          description: '品牌营销帮助你的产品更好地找到定位',
			          id: 'earth',
			          toKey: 'count',
			          saleout: false
			        },
			        {
			          title: '使命必达',
			          description: '使命必达快速迭代永远保持最前端的速度',
			          id: 'loud',
			          toKey: 'forecast',
			          saleout: true
			        },
			        {
			          title: '勇攀高峰',
			          description: '帮你勇闯高峰，到达事业的顶峰',
			          id: 'hill',
			          toKey: 'publish',
			          saleout: false
			        }
			     ],
			      slides: [
			        {
			          src: require('../assets/slideShow/pic1.jpg'),
			          title: 'xxx1',
			          href: 'detail/analysis'
			        },
			        {
			          src: require('../assets/slideShow/pic2.jpg'),
			          title: 'xxx2',
			          href: 'detail/count'
			        },
			        {
			          src: require('../assets/slideShow/pic3.jpg'),
			          title: 'xxx3',
			          href: 'http://xxx.xxx.com'
			        },
			        {
			          src: require('../assets/slideShow/pic4.jpg'),
			          title: 'xxx4',
			          href: 'detail/forecast'
			        }
			     ]
			}
		},
		computed:{
			menuList(){
				return this.$store.state.menuList
			}
		},
		mounted(){
			this.$store.dispatch('fetchMenuList');
		},
		created:function(){},
		methods:{
			doSomething(){
				//console.log("触发了父组件的事件");
			}
		}
	}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  background:#ccc;

}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-left-block li .hot {
  display: inline-block;
  background-color: red;
  color: #fff;
  padding: 2px 3px;

}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
   margin-top: 20px;
	background: #4fc08d;
	padding: 10px;
	width: 80px;
	color: #fff;
	text-align: center;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

