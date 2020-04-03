<template>
  <div class="login">
    <div class='lwq-to'>
      <img src="@/assets/images/login.png" alt="">
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="pattern"
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="password"
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
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
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
      username: '',
      password: '',
      verification:'',
      pattern: /^[1]([3-9])[0-9]{9}$/,
      cipher: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }
  },
  methods: {
    onSubmit(values) {
      // 本地存储数据 模拟的
      
    },
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
</style>