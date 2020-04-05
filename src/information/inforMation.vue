<template>
  <div class="information">
    <header>
      信息填写
    </header>
    <dl>
      <dd>昵称</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <dl>
      <dd>性别</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <dl>
      <dd>出生日期</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <dl>
      <dd>所在城市</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <dl>
      <dd>学科</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <div class='lwq-ti'>
      <span class='lwq-tijiao'>
        提交
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inforMation',
  data() { 
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:50px;
  // background: red;
  border-bottom:1px solid #777;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
dl{
  width:100%;
  height:50px;
  border-bottom:1px solid #f5f5f5;
  font-size:18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
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