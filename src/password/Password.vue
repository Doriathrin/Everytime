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
      v-model="password2"
      type="password"
      name="密码"
      placeholder="请再次输入密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    
    <div class='lwq-ti'>
      <span class='lwq-tijiao' @click="onSubmit">
        提交
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Password',
  data() { 
    return {
      password: '',
      password2:''
    }
  },
  methods: {
    onSubmit() {
      console.log(1111);
      if(this.password==''||this.password2==''){
        return this.$toast("请输入密码");
      }
      if(this.password==this.password2){
        this.$api.password.password().then((res)=>{
          console.log(res);
          this.$toast("设置成功");
          this.$router.push({path:'/information'})
        })
      }else{
        return this.$toast("两次输入的密码不一致");
      }
    },
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
.lwq-ti{
  margin-left: 35px;
  background:url('../assets/images/login-btn.png');
  width:80%;
  height:40px;
  background-size: 100% 100%;
  text-align: center;
  .lwq-tijiao{
    font-size:15px;     
    color:white;
  }
}
</style>