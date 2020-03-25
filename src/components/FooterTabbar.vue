<template>
  <div class="footerTabbar">
    <footer>
      <ul>
        <li>
          <img src="../assets/images/home.png" alt="">
          <a href="#">首页</a>
        </li>
        <li>
          <img src="../assets/images/course.png" alt="">
          <a href="#">课程</a>
        </li>
        <li>
          <img src="../assets/images/study.png" alt="">
          <a href="#">约课记录</a>
        </li>
        <li>
          <img src="../assets/images/user.png" alt="">
          <a href="#">个人</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterTabbar',
  data() { 
    return {

    }
  },
  methods: {
    onLoad(id) {      
        this.$api.article.articleList().then(res=> {
          console.log(res);
        })    
    }
  },
  mounted() {
    this.onLoad();
  },
 }
</script>

<style lang="scss" scoped>
.footerTabbar{
  footer{
    width:100%;
    height:50px;
    background: white;
    position: fixed;
    bottom: 0;
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
      li{
        line-height: 50px;
        margin-top: 5px;
        img{
          width:22px;
          height:22px;
          display: block;
          margin: 0 auto; 
        }
        a{
          margin-top: -15px;
          display: block;
          text-align: center;
          color:#000000;
        }
      }
    }
  }
}
</style>