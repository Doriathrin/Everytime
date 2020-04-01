<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="pattern"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="cipher"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ cipher, message: '请输入正确密码' }]"
      />
      <van-field
        v-model="verification"
        name="verification"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
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
      username: '',
      password: '',
      verification:'',
      pattern: /^[1]([3-9])[0-9]{9}$/,
      cipher: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
.van-button--info{
 background: red;
 border:none;
}
</style>