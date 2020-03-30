<template>
  <div class="footerTabbar">
    <footer>
      <ul>
        <!-- <router-link tag="li"
                     to="/">
          <img src="../assets/images/home.png"
               alt="">
          <a href="#">首页</a>
        </router-link>
        <router-link tag="li"
                     to="/course">
          <img src="../assets/images/course.png"
               alt="">
          <a href="#">课程</a>
        </router-link>
        <router-link tag="li"
                     to="/records">
          <img src="../assets/images/study.png"
               alt="">
          <a href="#">约课记录</a>
        </router-link>
        <router-link tag="li"
                     to="/persona">
          <img src="../assets/images/user.png"
               alt="">
          <a href="#">个人</a>
        </router-link> -->
        <li v-for='(item,key) in list' :key='key' @click="add(item.name)">
          <p><img :src="fontname==item.name?item.img_hover:item.img" alt=""></p>
          {{item.title}}
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterTabbar',
  data () {
    return {
      fontname:"/",
      list: [
        {
          img: require("../assets/images/home.png"),
          img_hover: require("../assets/images/home-active.png"),
          title: "首页",
          name: "/",
        },
        {
          img: require("../assets/images/course.png"),
          img_hover: require("../assets/images/course-active.png"),
          title: "课程",
          name: "/course",
        },
        {
          img: require("../assets/images/study.png"),
          img_hover: require("../assets/images/study-active.png"),
          title: "约课记录",
          name: "/records",
        },
        {
          img: require("../assets/images/question.png"),
          img_hover: require("../assets/images/user-active.png"),
          title: "联习",
          name: "/practise",
        },
        {
          img: require("../assets/images/user.png"),
          img_hover: require("../assets/images/user-active.png"),
          title: "我的",
          name: "/persona",
        }
      ]
    }
  },
  methods: {
    add (str) {
      this.fontname = str
      this.$router.push(this.fontname)
    }
  },
  mounted () {

  },
}
</script>

<style lang="scss" scoped>
.footerTabbar {
  footer {
    width: 100%;
    height: 50px;
    background: white;
    position: fixed;
    bottom: 0;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
      li {
        line-height: 20px;
        margin-top: 5px;
        img {
          width: 22px;
          height: 22px;
          display: block;
          margin: 0 auto;
        }
        a {
          margin-top: -15px;
          display: block;
          text-align: center;
          color: #000000;
        }
      }
    }
  }
}
</style>