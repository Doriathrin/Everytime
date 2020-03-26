<template>
  <div class="specialBar">
    <h5 class='lwq-zhuanTi'>
      <i class='iconfont'>&#xe600;</i>
      专题
    </h5>
    <div class='lwq-yasi'>
      <div class='lwq-zuo'>
        <h5>雅思语法专题</h5>
        <img src="../assets/images/B_06.jpg" alt="">
      </div>
      <div class='lwq-yo'>
        <div class="lwq-yo-shang">
          <img src="../assets/images/B_09.jpg" alt="">
          <h5>雅思语法专题</h5>
        </div>
        <div class="lwq-yo-xia">
          <img src="../assets/images/B_03.jpg" alt="">
          <h5>雅思写作专题</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specialbar',
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
.specialBar{
  width:100%;
  height:200px;
  .lwq-zhuanTi{
    width:100%;
    height:50px;
    background: #fafafa;
    line-height: 50px;
    font-size: 20px;
  }
  .lwq-yasi{
    width:100%;
    height:300px;
    display: flex;
    .lwq-zuo{
      width:175px;
      height:150px;
      border-right:1px solid #fafafa;
      line-height: 50px;
      padding-left: 30px;
      img{
        width:100px;
        height:100px;
      }
    }
    .lwq-yo{
      width:175px;
      height:150px;
      .lwq-yo-shang{
        display: flex;
        align-items: center;
        width:200px;
        height:80px;
        border-bottom:1px solid #fafafa;
      }
      .lwq-yo-xia{
        width:200px;
        height:80px;
        display: flex;
        align-items: center;
      }
      img{
        width:50px;
        height:50px;
      }
    }
  }
}
</style>