<template>
  <div class="smlogin">
    <div class='lwq-to'>
      <img src="@/assets/images/login.png" alt="">
    </div>
    <van-form @submit="onSubmit">
      <div class='lwq-yan'>
        <van-field
          v-model="message.mobile"
          name="pattern"
          placeholder="请输入手机号"
          :rules="[{ pattern, message: '请输入正确的手机号' }]"
        />
        <div class='lwq-zheng'  @click="Confirmation" v-if='!timebool'>
          获取验证码
        </div>
        <div v-if='timebool' style='color:#ccc;'>
          获取验证码{{time}}
        </div>
      </div>
      <div class='lwq-ma'>
        <van-field
          v-model="message.smscode"
          name="pattern"
          placeholder="请输入获取的验证码"
        />
        <div class='lwq-wuzhu'>
          <p>*未注册的手机号将自动注册</p>
          <p @click="$router.go(-1)">使用密码登录</p>
        </div>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="onSubmit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Smlogin',
  data() { 
    return {
      message:{
        mobile: '',
        smscode:'',
        sms_type: "login"
      },
      timebool:false,
      time: 60,
      type:'',
      pattern: /^[1]([3-9])[0-9]{9}$/,
      cipher: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }
  },
  methods: {
    ...mapMutations(['token','user','getsmscode']),
    onSubmit(values) {
      this.$api.verify.verify({mobile:this.message.mobile,smscode:this.message.smscode,type:2}).then((res)=>{
        console.log(res);
        res=res.data.data
        this.user(res.id)
        this.getsmscode(res.message);
        this.token(res.remember_token)
        this.$router.push({path:'/password'})
      })
    },
    Confirmation(){
      this.$api.VerificationLogin.VerificationLogin(this.message).then(res => {
                console.log(res);
                this.timebool = true;
                this.time = 60;
                let _this = this;
                var timer = setInterval(function() {
                _this.time--;
                if (_this.time <= 0) {
                    _this.timebool = false;
                    clearInterval(timer);
                }
                }, 1000);
            });
    }
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
.lwq-to{
  width:70%;
  height:60px;
  // background: yellow;
  margin: 60px auto;
  img{
    width:100%;
  }
}
.lwq-zheng{
  font-size: 13px;
  color: #eb6100;
}
.lwq-yan{
  width:100%;
  // background: red;
  display: flex;
  font-size:15px;
  line-height: 50px;
}
.lwq-wuzhu{
  margin-top: 10px;
  display: flex;
  font-size: 13px;
  color:#b7b7b7;
  justify-content: space-around;
}
.lwq-ma{
  width:100%;
  
}
.van-cell{
  width:260px;
  margin-left: 20px;
  // background: red;
  border-bottom: 1px solid #f1f1f1;
}
.van-cell:hover{
  border-bottom: 1px solid red;
}
</style>