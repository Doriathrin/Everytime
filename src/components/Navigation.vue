<template>
  <div class="naviGation">
    <ul>
      <li>
        <img src="../assets/images/icon-msg-course.png" alt="">
        <a href="#">名师</a>
      </li>
      <li>
        <img src="../assets/images/icon-msg-exam.png" alt="">
        <a href="#">课表</a>
      </li>
      <li>
        <img src="../assets/images/icon-msg-order.png" alt="">
        <a href="#">约课</a>
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
  // background: red;
  display: block;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    li{
      margin-top: 10px;
      line-height: 50px;
      font-size:16px;
      img{
        width:50px;
        height:50px;
        display: block;
        margin: 0 auto;
      }
      a{
        margin-top: -5px;
        display: block;
        text-align: center;
        color:#000000;
      }
    }
  }
}
</style>