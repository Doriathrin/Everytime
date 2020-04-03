<template>
  <div class="password">
    <van-field
      v-model="password"
      type="password"
      name="密码"
      
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      placeholder="请再次输入密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
          提交
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Password',
  data() { 
    return {
      password: '',
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

</style>