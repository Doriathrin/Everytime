<template>
  <div class="persona">
    <header>
      <div class='lwq-to' >
        <div class='lwq-info'>
          <section class='lwq-login' @click="geRen">
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
            <div class='lwq-extra'>
              <p class='lwq-name' >
                <span>{{userInfo.data.nickname}}</span>
              </p>
              <p class='iconfont edit'>&#xe603;</p>
            </div>
          </section>
        </div>
        <div class='lwq-mine'>
           <ul>
             <li v-for='(item,key) in mineList' :key='key' :class="item.style" @click="onMineItem(item)">
               <p class='lwq-count'>{{item.count}}</p>
               <p class='lwq-nameMing'>{{item.name}}</p>
               <p class='lwq-note'>{{item.note}}</p>
             </li>
           </ul> 
        </div>
        <div class="to-set" @click="yueke">
          <span>去约课</span>
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
      mineList: [
        {
          count: 0,
          name: "我的特色课",
          note: "已购特色课程的学习",
          style: "my-study",
          url: "MyStudy"
        },
        {
          count: 0,
          name: "一对一辅导",
          note: "我的一对一老师辅导",
          style: "my-plan",
          url: "yue"
        },
        {
          count: 0,
          name: "剩余学习币",
          note: "查看剩余学习币",
          style: "my-period",
          url: "MyCurrency"
        }
      ],
    }
  },
  components:{
    Footer
  },
  created () {
    this.turnPage();
    this.requestMessage();
  },
  yueke(){
    this.$router.push({name:'Oto'})
  },
  methods: {
    onMineItem(item) {
      if (!item.url) return;
      this.turnPage(item.url);
    },
    yueke(){
      this.$router.push({name:'Oto'})
    },
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
    geRen(){
      this.$router.push({name:'inforMation'})
    },
    oto(){
      this.$router.push({name:'Oto'})
    },
    login(){
      this.$api.userInfo.userInfo().then((res)=>{
        console.log(res);
        this.userInfo=res.data
        // console.log(this.userInfo.data.id);
        // this.requestMessage();
        this.requestCount();
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
      this.$api.login.Center().then(res => {
        console.log(res)
        this.mineList[0].count = res.data.data.courses;
        this.mineList[1].count = res.data.data.oto;
        this.mineList[2].count = (res.data.data.integral / 100).toFixed(2);
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
        .lwq-extra{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 16px;
          margin-left: 10px;
          .edit{
            margin-left: 10px;
            color: red;
          }
        }
      }
    }
  }
  .lwq-mine{
    width:100%;
    height:90px;
    // background: red;
    ul{
      display: flex;
      li{
        width:150px;
        height:70px;
        // background: chartreuse;
        text-align: center;
        position: relative;
        margin-top: 10px;
        .lwq-count{
          color:#eb6100;
          font-size:25px;
        }
        .lwq-nameMing{
          font-size:15px;
        }
        .lwq-note{
          font-size: 12px;
          color:#b7b7b7;
        }
        &::after{
          content: "";
          display: block;
          width:1px;
          height:70px;
          background-color: #f5f5f5;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }
    }
  }
  .to-set{
    position: absolute;
    top: 8.8vw;
    right: 0;
    width: 55px;
    height: 26px;
    line-height: 50%;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 10px;
    background-color: #eb6100;
    text-align: center;
    vertical-align: middle;
    span{
      font-size:12px;
      color:white;
      line-height: 24px;
    }
  }
}
</style>