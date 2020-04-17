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
            <span :class="{'active':active=='lwq-tro'}" @click="scrollTo('tro')">课程介绍</span>
            <span :class="{'active':active=='lwq-list'}" @click="scrollTo('list')">课程大纲</span>
            <span :class="{'active':active=='lwq-com'}" @click="scrollTo('com')">课程评价</span>
          </p>
        </div>
        <p class="right-tabs">
          <span class="cao">
            <img src="../../assets/images/share.png" alt />
          </span>
        </p>
      </header>
    </div>
    <div class='lwq-nrong' v-show="detail.title" @scroll.passive="getScroll($event)">
      <div class="cd-info">
        <p class="info-title">{{detail.title}}</p>
        <i class="info-collect" :class="{'ic-active':detail.is_collect}" @click="collect"></i>
        <!-- 非面授 -->
        <p class="info-price" v-if="!detail.is_free">
          <img class="price-ico" :src="$store.state.config.price_ico" />
          <font>{{detail.price | toFixPrice}}</font>
          <img
            v-if="detail.underlined_price"
            class="price-ico"
            :src="$store.state.config.price_ico"
          />
          <font
            v-if="detail.underlined_price"
            class="underline"
          >{{detail.underlined_price | toFixPrice}}</font>
        </p>
        <p class="info-price cd-free" v-else>免费</p>
        <div v-if="detail.course_type != 7">
          <p class="info-com">共{{detail.total_periods}}课时 | {{detail.sales_num}}人已报名</p>
          <p
            class="info-com"
          >开课时间：{{detail.start_play_date | fomartTime('yyyy.MM.dd hh:mm')}} - {{detail.end_play_date | fomartTime('yyyy.MM.dd hh:mm')}}</p>
        </div>  
        <!-- 面授 -->
        <div style="padding-top: 10px;" v-else>
          <p
            class="info-com"
            v-if="detail.store_num"
          >报名上限：{{detail.store_num}}人 | 剩余名额：{{detail.stock}}</p>
          <p class="info-com">报名截止时间：{{detail.enter_end_date | fomartTime('yyyy.MM.dd hh:mm')}}</p>
          <p
            class="info-com"
          >开课时间：{{detail.start_play_date | fomartTime('yyyy.MM.dd hh:mm')}} - {{detail.end_play_date | fomartTime('yyyy.MM.dd hh:mm')}}</p>
          <p class="info-com">开课地点：{{detail.province_name + detail.district_name +detail.address}}</p>
        </div>
      </div>
      <div class="cd-actives" v-if="couponList.length || detail.is_vip_course">
        <p>活动：</p>
        <section>
          <div class="actives-item" v-if="couponList.length" @click="getCoupon">
            <span>优惠</span>
            <span>
              <em>领取优惠券最多可减</em>
              <img class="price-ico" :src="$store.state.config.price_ico" />
              <i>{{max_price | toFixPrice(0)}}</i>
            </span>
            <font>领取</font>
          </div>
          <div class="actives-item" v-if="detail.is_vip_course" @click="goVip">
            <span>VIP</span>
            <span
              v-if="detail.is_vip_user"
            >您的会员到期日为：{{detail.vip_user_end | fomartTime('yyyy.MM.dd')}}</span>
            <span v-else>免费观看</span>
            <font>{{detail.is_vip_user?'续费':'开通'}}</font>
          </div>
        </section>
      </div>
      <div class="cd-teachers com-style" v-if="teachers.length">
        <p class="cd-title">教学团队</p>
        <ul>
          <li @click="goTeacher(item.teacher_id)" v-for="(item,index) in teachers" :key="index">
            <img :src="item.teacher_avatar" />
            <span>{{item.teacher_name}}</span>
          </li>
        </ul>
      </div>
      <div id="tro" class="cd-tro com-style">
        <p class="cd-title">课程介绍</p>
        <div class="cd-details" v-html="detail.course_details"></div>
      </div>
      <div id="list" class="cd-list com-style">
        <p class="cd-title">课程大纲</p>
        <charpter v-if="detail.course_type != 9" :charpters="list" :detail="detail"></charpter>
        <course-item :course="courses" :itemStyle="true" v-if="detail.course_type == 9"></course-item>
      </div>
      <div id="com" class="cd-comment com-style">
        <p class="cd-title">课程评论</p>
        <commentItem></commentItem>
      </div>
    </div>
  </div>
</template>

<script>
import charpter from '../charpter/Charpter'
import commentItem from '../commentItem/commentItem'
export default {
  name: 'courseDetail',
  data() { 
    return {
      id: "",
      top: 0,
      detail:{},
      couponList:[],
      teachers: [],
      list:[],
    }
  },
  components: {
    commentItem,
    charpter
  },
  methods: {
    getDetail(){
      this.$api.courseInfo.courseInfo({id:this.id}).then((res)=>{
        console.log(res);
        this.detail=res.data.data.info;
        this.teachers=res.data.data.teachers
      })
    },
    collect() {
      if (!this.detail.is_collect) {
        this.$api.collect.collect({
            course_basis_id: this.id,
            type: 1
          })
          .then((res) => {
            console.log(res);
            this.$toast({
              message: "收藏成功",
              type: "success",
              duration: 800,
              onClose: () => {
                this.getDetail();
              }
            });
          });
      } else {
        this.$api.collect.cancel(this.detail.collect_id)
          .then((res) => {
            console.log(res);
            this.$toast({
              message: "取消收藏",
              duration: 800,
              onClose: () => {
                this.getDetail();
              }
            });
          });
      }
    },
    goTeacher(id) {
      this.$router.push({
        name: "Teacher",
        query: {
          id: id
        }
      });
    },
    getCharpter() {
      this.$api.course.courseChapter({
          id: this.id
        })
        .then(res => {
          console.log(res);
          this.list = res.data.data;
          console.log(this.list);
        });
    },
    // handleScroll() {
    //   this.top =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   let a_h = window.$(".lwq-tro").offset().top - 45;
    //   let l_h = window.$(".lwq-list").offset().top - 45;
    //   let r_h = window.$(".lwq-com").offset().top - 45;
    //   if (this.top <= a_h) {
    //     this.active = "tro";
    //   } else if (this.top <= l_h) {
    //     this.active = "list";
    //   } else if (this.top >= r_h) {
    //     this.active = "com";
    //   }
    // },
    scrollTo(name) {
      this.active = name;
      // let h = window.$(`#${name}`).offset().top - 45;
      // window.$("html,body").animate({ scrollTop: h }, 500);
    },
    getScroll(event) {                            //下拉加载
            // 滚动条距离头部的距离scrollBottom
            let scrollBottom =event.target.scrollTop ;
            this.top=scrollBottom;
            // console.log(scrollBottom);
        },
    init(){
      this.id=this.$route.query.id;
      this.getDetail();
      this.getCharpter();
    }
  },
  created () {
    this.init();
  },
  watch: {
    $route(val, old) {
      console.log(val);
      if (val.query.id != old.query.id) {
        this.init();
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll());
    console.log(this.handleScroll());
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll());
  },
 }
</script>

<style lang="scss" scoped>
@import '../../css/_vw_func.scss';
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
  .cd-info {
    padding: 10px;
    background: #fff;
    position: relative;
    .info-collect {
      position: absolute;
      right: 20px;
      top: 10px;
      width: 20px;
      height: 20px;
      background: url("../../assets/images/collections_grey.png") no-repeat center
        center;
      background-size: 20px 20px;
    }
    .ic-active {
      background: url("../../assets/images/icon-star.png") no-repeat center
        center;
      background-size: 20px 20px;
    }
    .info-title {
      font-size: 15px;
      font-family: PingFangSC-Medium;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      padding-right: 80px;
      line-height: 46px;
    }
    .info-price {
      font-size: 34px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(238, 31, 31, 1);
      // line-height: 64px;
      span {
        font-size: 20px;
      }
      .price-ico {
        width: 16px;
        margin: 0 8px;
      }
      .underline {
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
      }
    }
    .cd-free {
      color: $theme_color;
    }
    .info-com {
      font-size: 15px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 30px;
      font {
        &:nth-child(2) {
          padding-left: 12px;
        }
      }
    }
    .info-price {
      font-size: 15px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(238, 31, 31, 1);
      line-height: 20px;
      span {
        font-size: 20px;
      }
      .price-ico {
        width: 16px;
        margin: 0 8px;
      }
      .underline {
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
      }
    }
  }
  .cd-title {
    font-size: 15px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(38, 38, 38, 1);
    // padding-top: 20px;
  }
  .com-style {
    margin-top: 20px;
    background: #fff;
    padding: 10px 20px;
  }
  .cd-teachers {
    ul {
      display: flex;
      flex-wrap: wrap;
      // padding: 20px 0;
      li {
        padding: 20px 0;
        width: 20%;
        height: 120px;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        span {
          padding: 16px 6px 0;
          padding-top: 16px;
          font-size: 15px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(89, 89, 89, 1);
        }
      }
    }
  }
}
</style>