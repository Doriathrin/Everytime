<template>
  <div class="login">
    <div class='lwq-to'>
      <img src="@/assets/images/login.png" alt="">
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="pattern"
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="user_pass"
        type="password"
        name="cipher"
        
        placeholder="请输入密码"
        :rules="[{ cipher, message: '请输入正确密码' }]"
      />
      <!-- <van-field
        v-model="verification"
        name="verification"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      /> -->
      <!-- <router-link tag="p" to="/Smlogin">
         注册
      </router-link> -->
      <ul>
        <li>找回密码</li>
        <router-link tag="li" to="/Smlogin" class='lwq-right'>
          注册/验证码登录
        </router-link>
      </ul>
      <div style="margin: 16px;">
        <van-button round block type="info" @click="goLogin">
          提交
        </van-button>
      </div>
      <div class='lwq-disan'>
        <p>第三方登录</p>
        <ul>
          <li @click="qqLogin(1)">
            <img src="../assets/images/pay-wx.png" alt="微信登录" class='lwq-wx'>
            <span>微信登录</span>
          </li>
          <li @click="qqLogin(2)">
            <img src="../assets/images/QQ.png" alt="QQ登录" class='lwq-qq'>
            <span>QQ登录</span>
          </li>
        </ul>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() { 
    return {
      list:[],
      mobile: "",
      user_pass: '',
      verification:'',
      pattern: /^[1]([3-9])[0-9]{9}$/,
      cipher: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }
  },
  methods: {
    onSubmit(values) {
      // 本地存储数据 模拟的
      
    },
    qqLogin(type){
      if(type==1){
        // this.$pub.thirdpartLogin('wx');
        // alert('微信')
        const url=location.protocol+'//'+location.host;

        console.log(url);
      }else{
        // alert('QQ')
        // this.$pub.thirdpartLogin('qq');
      }
    },
    goLogin() {
      this.$api.login.login({
        mobile: this.mobile,
        password: this.user_pass,
        type: 1})
        .then(res => {
          console.log(res);
          localStorage.setItem("adminToken", res.data.data.remember_token);
          localStorage.setItem("user_id", res.data.data.id);
            // if(this.$pub.isWeiXin()){
            //   window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b809012f597f205&redirect_uri=https://wap.365msmk.com/person&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect"
            //   return false;
            // }
            this.$router.push({
              name: "Persona"
            });
        });
    },
  },
  mounted() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("user_id");
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
.van-button--info{
 background: red;
 border:none;
}
ul{
  display: flex;
  justify-content: space-around;
  li{
    margin-top: 10px;
    font-size:13px;
    color:#999;
  }
}
.van-cell{
  width:300px;
  // background: red;
  margin: 0 auto;
  border-bottom: 1px solid #f1f1f1;
}
.van-cell:hover{
  border-bottom: 1px solid red;
}
.lwq-disan{
  width:100%;
  height:100px;
  // background: red;
  font-size: 15px;
  p{
    text-align: center;
  }
  ul{
    display: flex;
    li{
      color: #000000;
      display: flex;
      span{
        margin-left: 5px;
      }
      .lwq-wx{
        width:22px;
        height:18px;
      }
      .lwq-qq{
        width:20px;
        height: 20px;
      }
    }
  }
}
</style>