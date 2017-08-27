<template>
    <div class="login-form">
	    <div class="g-form">
	      <div class="g-form-line">
	        <span class="g-form-label">用户名：</span>
	        <div class="g-form-input">
	          <input type="text" placeholder="请输入用户名"  v-model="userNameModel">
	        </div>
	        <span class="g-form-error">{{userErrors.userErrorsText}}</span>
	      </div>
	      <div class="g-form-line">
	        <span class="g-form-label">密码：</span>
	        <div class="g-form-input">
	          <input type="password"  placeholder="请输入密码"  v-model="userPasswordModel">
	        </div>
	        <span class="g-form-error">{{passwordErrors.passwordErrorsText}}</span>
	      </div>
	      <div class="g-form-line">
	        <div class="g-form-btn">
	          <a class="button" @click="clickLogin()">登录</a>
	        </div>
	      </div>
	      <p>{{errorText}}</p>
	    </div>
    </div>
</template>

<script>
	export default{
		data:function(){
			return {
				userNameModel:"",
				userPasswordModel:"",
				errorText:""
			}
		},
		computed:{
			userErrors(){
				let userStats,userErrorsText;
				if(!/@/g.test(this.userNameModel)){
					userStats=false;
					userErrorsText="不包含@符号"
				}else{
					userStats=true;
					userErrorsText=""
				}
				if(!this.userFlag){
					userErrorsText="";
					this.userFlag=true
				}
				return {
					userStats:userStats,
					userErrorsText:userErrorsText
				}
			},
			 passwordErrors(){
				let passwordStats,passwordErrorsText;
				if(!/^\w{1,6}$/g.test(this.userPasswordModel)){
					passwordStats=false;
					passwordErrorsText="密码不是1-6位"
				}else{
					passwordStats=true;
					passwordErrorsText=""
				}
				if(!this.passwordFlag){
					passwordErrorsText="";
					this.passwordFlag=true
				}
				return {
					passwordStats:passwordStats,
					passwordErrorsText:passwordErrorsText
				}
			}
		},
		methods:{
			clickLogin(){
				if(!this.userErrors.userStats || !this.passwordErrors.passwordStats){
						this.errorText='有些部分不合格';
				}else{
						this.errorText='';
						this.$http.get("api/login")
						.then((res)=>{
								//利用emit事件把数据传到父组件
								this.$emit('has-login',res.data);
							},//success
							function(error){
								console.log();
							}//error 两种写法一样
						);

				}
				
			}
		}
	}

</script>
<style type="text/css">
	
</style>