<template>
  <div class="naviGation">
    <ul>
      <li>
        <img src="../assets/images/index-kinds-course.png" alt="">
        <a href="#">特色课</a>
      </li>
      <li>
        <img src="../assets/images/index-kinds-one.png" alt="">
        <a href="#">一对一辅导</a>
      </li>
      <li>
        <img src="../assets/images/index-kinds-study.png" alt="">
        <a href="#">学习日历</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
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
.naviGation{
  width:100%;
  height:100px;
  background: #FAFAFA;
  display: block;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    li{
      position: relative;
      top:-15px;
      width:100px;
      height:100px;
      background: white;
      border-radius: 5px;
      line-height: 50px;
      font-size:16px;
      img{
        width:20px;
        height:20px;
        display: block;
        margin: 0 auto;
        margin-top: 25px;
      }
      a{
        font-size: 13px;
        margin-top: -5px;
        display: block;
        text-align: center;
        color:#8c8c8c;
      }
    }
  }
}
</style>