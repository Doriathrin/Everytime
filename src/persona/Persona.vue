<template>
  <div class="persona">
    <header>
      <div class='lwq-to' >
        <div class='lwq-info'>
          <section class='lwq-login'>
            <div class='lwq-avatar'>
              <img v-if='user_id' :src="userInfo.data.avatar || headerImg" alt="">
              <img class="hea" v-else src="~@/assets/images/avatar.png" />
                <img
                  class="vip-logo"
                  v-if="user_id&&userInfo.data.is_vip"
                  src="~@/assets/images/皇冠-2@2x.png"
                />
                <img
                  class="vip-logo"
                  v-if="user_id&&!userInfo.data.is_vip"
                  src="~@/assets/images/皇冠-2 拷贝@2x.png"
                />
            </div>
            <div class='lwq-name'>
              {{userInfo.data.nickname}}
            </div>
          </section>
        </div>
      </div>
    </header>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/FooterTabbar'
import {Mag} from '@/request/api'
export default {
  name: 'Persona',
  data() { 
    return {
      user_id: JSON.parse(localStorage.getItem("user_id")) || "",
      userInfo:{},
      headerImg: require("@/assets/images/user_Headportrait.png"),
    }
  },
  components:{
    Footer
  },
  created () {
    this.turnPage();
    this.requestMessage();
  },
  methods: {
     turnPage(name, query) {
      if (!this.user_id) {
        // 未登录 统一推到验证码登录页面
        this.$router.push({
          name: "Login"
        });
        return;
      }
      this.$router.push({
        name,
        query
      });
    },
    onLogin() {
      this.turnPage("Login");
    },
    login(){
      this.$api.userInfo.userInfo().then((res)=>{
        console.log(res);
        this.userInfo=res.data
        console.log(this.userInfo.data.id);
        // this.requestMessage();
        // this.requestCount();
      })
    },
    requestMessage(){
      this.$api.login.Mag().then((res)=>{
        console.log(res);
        // for (const i of data) {
        //   if (i.is_read == 0) {
        //     this.newMessage = true;
        //     break;
        //   }
        // }
      })
    },
    requestCount() {
      this.$api.login.Center().then(data => {
        console.log(data)
        // this.mineList[0].count = data.data.courses;
        // this.mineList[1].count = data.data.oto;
        // this.mineList[2].count = (data.data.integral / 100).toFixed(2);
      });
    },
  },
  mounted() {
    this.login();
  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:125px;
  background: url('../assets/images/user_bg.png');
  background-size:100%;
  position: relative;
  .lwq-to{
    width:350px;
    height:170px;
    background: white;
    box-shadow: 0 0 3.2vw 0 rgba(0,0,0,.05);
    border-radius: 5px;
    position: absolute;
    top:50px;
    left:13px;
    .lwq-info{
      overflow: hidden;
      .lwq-login{
        overflow: hidden;
        margin:15px 0 0 15px;
        // background: red;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .lwq-avatar{
          width:63px;
          height:64px;
          border-radius: 50%;
          position: relative;
          background: #bdcdf1;
          img{
            width:60px;
            height:60px;
            border-radius: 50%;
            margin-left: 2px;
            margin-top: 1.5px;
          }
          .vip-logo{
            position: absolute;
            // left:40px;
            // top:-12px;
            right: -10px;
            top: -2px;
            width:20px;
            height:20px;
          }
        }
        .lwq-name{
          font-size: 16px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>