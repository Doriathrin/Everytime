<template>
  <div class="course-detail">
    <div class="header">
      <header>
        <span class="back" @click="$router.go(-1)">
          <img src="@/assets/images/return.png" />
        </span>
        <div class="h-title">
          <h3 v-if="top < 30">课程详情</h3>
          <p v-else>
            <span :class="{'active':active=='tro'}" @click="scrollTo('tro')">课程介绍</span>
            <span :class="{'active':active=='list'}" @click="scrollTo('list')">课程大纲</span>
            <span :class="{'active':active=='com'}" @click="scrollTo('com')">课程评价</span>
          </p>
        </div>
        <p class="right-tabs">
          <span class="cao">
            <img src="../../assets/images/share.png" alt />
          </span>
        </p>
      </header>
    </div>
    <div class='lwq-nrong'>
      <div class="cd-info">
        <p class="info-title">{{detail.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courseDetail',
  data() { 
    return {
      id: "",
      top: 0,
      detail:[]
    }
  },
  methods: {
    getDetail(){
      this.$api.courseInfo.courseInfo({id:this.id}).then((res)=>{
        console.log(res);
        this.detail=res.data.data.info;
      })
    },
    handleScroll() {
      this.top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let a_h = window.$("#tro").offset().top - 45;
      let l_h = window.$("#list").offset().top - 45;
      let r_h = window.$("#com").offset().top - 45;
      if (this.top <= a_h) {
        this.active = "tro";
      } else if (this.top <= l_h) {
        this.active = "list";
      } else if (this.top >= r_h) {
        this.active = "com";
      }
    },
    scrollTo(name) {
      this.active = name;
      let h = window.$(`#${name}`).offset().top - 45;
      window.$("html,body").animate({ scrollTop: h }, 500);
    },
    
    init(){
      this.id=this.$route.query.id;
      this.getDetail();
    }
  },
  created () {
    this.init();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
 }
</script>

<style lang="scss" scoped>
.header{
  width:100%;
  height:50px;
  // background: red;
  header{
    display: flex;
    justify-content: space-around;
    .h-title{
      h3 {
        text-align: center;
        font-size: 20px;
        color: #595959;
      }
    }
    span{
      img{
        width:15px;
        height:18px;
      }
    }
  }
}
.lwq-nrong{
  background: #f0f2f5;
  height: 92vh;
  overflow: scroll;
}
</style>