<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>流量分析</h2>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
       <div class="sales-board-form">
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              购买数量：
          </div>
          <div class="sales-board-line-right">  
              <vcounter :minnum="10" :maxnum="14"  @onChange="getParams('buyNum',$event)" ></vcounter>
          </div>
      </div>
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              产品类型：
          </div>
          <div class="sales-board-line-right">
           <vselection :vseleDataProp="vseleData" :defaultValue="2"  @onTypedata="getParams('buyType',$event)"></vselection>
          </div>
      </div>
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              有效时间：
          </div>
          <div class="sales-board-line-right">
             <vradio :selections="checkdataparent" @onChange="getParams('yxTime',$event)"></vradio>
          </div>
      </div>
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              产品版本：
          </div>
          <div class="sales-board-line-right">
              <vcheckbox  :piblishdata="piblishdataparent" :defaultValue="1" @onChange="getParams('publish',$event)"></vcheckbox>
          </div>
      </div>
      <div class="sales-board-line">
          <div class="sales-board-line-left">
              总价：
          </div>
          <div class="sales-board-line-right">
             {{price}}元
          </div>
      </div>
        <div class="sales-board-line">
          <div class="sales-board-line-left">&nbsp;</div>
          <div class="sales-board-line-right">
              <div class="button" @click="showPayDialog">
                立即购买
              </div>
          </div>
      </div>
  </div> 
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

        <h3>用户行为指标</h3>
        <ul>
          <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
          <li>用户在网站的停留时间；</li>
          <li>用户来源网站（也叫“引导网站”）；</li>
          <li>用户所使用的搜索引擎及其关键词；</li>
          <li>在不同时段的用户访问量情况等。</li>
        </ul>

        <h3>浏览网站方式</h3>
        <ul>
          <li>用户上网设备类型</li>
          <li>用户浏览器的名称和版本</li>
          <li>访问者电脑分辨率显示模式</li>
          <li>用户所使用的操作系统名称和版本</li>
          <li>用户所在地理区域分布状况等</li>
        </ul>
      </div>
      <vDialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
          <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>有效时间</th>
            <th>产品版本</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buyNum }}</td>
            <td>{{ buyType.label }}</td>
            <td>{{ yxTime.label }}</td>
            <td>
              <span v-for="item in publish">{{ item.label }},</span>
            </td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
       <v-chooseBank @on-change="onChangeBanks"></v-chooseBank>
        <div class="button buy-dialog-btn" @click="confirmBuy">
          确认购买
        </div>
      </vDialog>
    <!--   <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{ buyNum }}</td>
          <td>{{ buyType.label }}</td>
          <td>{{ period.label }}</td>
          <td>
            <span v-for="item in versions">{{ item.label }}</span>
          </td>
          <td>{{ price }}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <bank-chooser @on-change="onChangeBanks"></bank-chooser>
      <div class="button buy-dialog-btn" @click="confirmBuy">
        确认购买
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
      支付失败！
    </my-dialog>
    <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order> -->
  </div>
</template>

<script>
import vselection from '../base/selection'
import vradio from '../base/radio'
import vcheckbox from '../base/checkbox'
import vcounter from '../base/counter'
import vDialog from '../dialog'
import vChooseBank from './chooseBank'
//或者是  import vChooseBank from '@/components/details/chooseBank'

export default{
    components:{
      vselection,
      vradio,
      vcheckbox,
      vcounter,
      vDialog,
      vChooseBank
    },
    data(){
      return {
        buyNum:0,
        buyType:{
          label:"客户端",
          value:0
        },
        yxTime:{
          label:'半年',
          value:0
        },
        publish:{
          label:"终极版",
          value:1

        }
        ,
        bankId:0,
        testJson:[
          {id:1,name:"水晶蓝"},
          {id:2,name:"棉花糖"}
        ],
        price:10,
        chooseBank:"",
        vseleData:[
          {
            label: '客户版',
            value: 0
          },
          {
            label: '代理商版',
            value: 1
          },
          {
            label: '专家版',
            value: 2
          }
        ],
         checkdataparent:[
           {
            label: '半年',
            value: 0
          },
          {
            label: '一年',
            value: 1
          },
          {
            label: '三年',
            value: 2
          }
        ],
        piblishdataparent:[
          {
            label: '入门版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          }
        ],
        isShowPayDialog:false
      }
     },
    mounted(){
      //console.log(JSON.stringify(this.vseleData))

    },
    methods:{
      getTypeData(data){
        console.log(data);
      },
      getVseleData(data){
       console.log(data);
      },
      getCheckData(data){
        console.log(data);
      },
      getCount(data){
        //console.log("父级获取到的数据"+data);
      },
      getParams(attr,value){
          this[attr]=value;
          console.log(this[attr])
          this.getprice()
      },
      getprice(){
        var newPub= this.publish.map(function (item) { //ES6 的数组操作方法 map
              return item.value
            });

        newPub=newPub.join(',');
        let obj={
          buyNum:this.buyNum,
          buyType:this.buyType.value,
          yxTime:this.yxTime.value,
          publish:newPub
        }
       console.log(obj);
       this.$http.get('/api/getPrice',obj).then(
         (res)=>{
          this.price=res.data.amount;
          console.log(res)
       },(error)=>{
          console.log(error)

       });
      },
      showPayDialog(){
        this.isShowPayDialog=true;
      },
      hidePayDialog(){
        this.isShowPayDialog=false;
      },
     onChangeBanks(data){
         this.chooseBank=data;
      },
      confirmBuy(){
        var newPub= this.publish.map(function (item) { //ES6 的数组操作方法 map
              return item.value
        });
        let params={
            buyNum:this.buyNum,
            buyType:this.buyType.value,
            yxTime:this.yxTime.value,
            publish:newPub,
            bankId:this.chooseBank.id,
         }
         console.log(params);
        this.$http.post("/api/createOrder",params).then((res)=>{
            console.log(res.data.orderId);
            
        },(err)=>{

        });
      }
    },
    mounted(){
      this.buyNum = 1;
      this.buyType = [this.piblishdataparent[0]];
      this.yxTime = [this.checkdataparent[0]];
    
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
