<template>
  <div class="practise">
    <header>
      练习
    </header>
    <section>
      <nav>
        <ul>
          <li >
            <div>
              <img src="../assets/images/exam-point.png" alt="">
            </div>
            <p>考点专练</p>
          </li>
          <li>
            <div>
              <img src="../assets/images/paper-package.png" alt="">
            </div>
            <p>套卷练习</p>
          </li>
          <li>
            <div>
              <img src="../assets/images/exam.png" alt="">
            </div>
            <p>仿真模考</p>
          </li>
          <li>
            <div>
              <img src="../assets/images/wrong-test.png" alt="">
            </div>
            <p>错题练习</p>
          </li>
          <li>
            <div>
              <img src="../assets/images/assess.png" alt="">
            </div>
            <p>测评记录</p>
          </li>
          <li>
            <div>
              <img src="../assets/images/question-collocet.png" alt="">
            </div>
            <p>习题收藏</p>
          </li>
        </ul>
      </nav>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/FooterTabbar'
export default {
  name: 'Practise',
  data() { 
    return {

    }
  },
  components: {
    Footer
  },
  methods: {

  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
.practise{
  min-height: 100vh;
    background: #f0f2f5;
    box-sizing: border-box;
}
header{
  width:100%;
  height:50px;
  font-size:20px;
  text-align: center;
  line-height: 50px;
  background: white;
}
section{
  width:100%;
  nav{
    width:350px;
    height:180px;
    background: #fff;
    margin: 0 auto;
    border-radius: 10px;
    ul{
      display: flex;
      // justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 10px;
      li{
        width:25%;
        font-size:12px;
        margin-top: 15px;
        div{
          width:40px;
          height:40px;
          // background: chartreuse;
          border-radius: 50px;
          box-shadow: 0 0 3.2vw 0 rgba(10,0,24,.07);
          margin: 0 auto;
          img{
            width:17px;
            margin-top: 11.5px;
            margin-left: 12px;
          }
        }
        p{
          display: block;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>