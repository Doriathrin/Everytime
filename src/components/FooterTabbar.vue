<template>
  <div class="footerTabbar">
    <footer>
      <ul>
        <li v-for='(item,key) in list' :key='key' @click="add(item.name)">
          <p><img :src="fontname==item.name?item.img_hover:item.img" alt=""></p>
          {{item.title}}
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'FooterTabbar',
  data () {
    return {
      list: [
        {
          img: require("../assets/images/home.png"),
          img_hover: require("../assets/images/home-active.png"),
          title: "首页",
          status:false,
          name: "/",
        },
        {
          img: require("../assets/images/course.png"),
          img_hover: require("../assets/images/course-active.png"),
          title: "课程",
          status:false,
          name: "/course",
        },
        {
          img: require("../assets/images/study.png"),
          img_hover: require("../assets/images/study-active.png"),
          title: "约课记录",
          status:false,
          name: "/records",
        },
        {
          img: require("../assets/images/question.png"),
          img_hover: require("../assets/images/user-active.png"),
          title: "练习",
          status:false,
          name: "/practise",
        },
        {
          img: require("../assets/images/user.png"),
          img_hover: require("../assets/images/user-active.png"),
          title: "我的",
          status:false,
          name: "/persona",
        }
      ]
    }
  },
  
  methods: {
    ...mapMutations(['tiao']),
    add (str) {
      console.log(str);
      if(this.$router.push({name:'persona'})||localStorage.user_id){
        this.tiao(str);
        this.$router.push(str);
        console.log(str);
      }else{
        this.$router.push({name:'Login'})
      }
        
    },
  },
  computed: {
    ...mapState(['fontname', "config"])
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