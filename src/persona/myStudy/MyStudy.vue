<template>
  <div class="myStudy">
    <header>
      <ul>
        <li></li>
        <li>我的学习</li>
        <li></li>
      </ul>
    </header>
    <van-tabs @change="onTabChange">
      <van-tab v-for="(item,key) in tabs" :key='key' :title="`${item.name}(${item.num})`" />
    </van-tabs>
    <div class="vip" v-if="showVipTip">
        <span>课程中有会员课，会员课将于</span>
        <span class="date">{{vipTip}}</span>
        <span>过期。</span>
        <!-- <span class="btn" v-if="showRenewVip">去续费</span> -->
    </div>
    <div v-if="list.length">
        <MyStudyList :courses="list" :userInfo="userInfo" @onRefresh="onRefresh"></MyStudyList>
      </div>
      <div v-else class="no-login">
        <Empty :empty_type="{name: '还没有课程，快去选择课程学习吧'}"></Empty>
        <div class="info" @click="onChooseCourse">选择课程</div>
      </div>
  </div>
</template>

<script>
import MyStudyList from '../MyStudyList/MyStudyList'
export default {
  name: 'MyStudy',
  data() { 
    return {
      list:[],
      type:2,
      tabs: [],
      userInfo:{}
    }
  },
  components: {
    MyStudyList
  },
  created () {
    this.requestCourse()
    this.requestUserInfo()
  },
  computed: {
    showVipTip() {
      // 有会员课 & 用户是会员
      let hasVipCourse = false
      for (const i of this.list) {
        if (i.is_vip_course) {
          hasVipCourse = true
          break
        }
      }
      return hasVipCourse && this.userInfo.is_vip && this.userInfo.vip.vip_end_at
    },
  },
  methods: {
    onTabChange(index) {
      this.type = this.tabs[index].type
      this.requestCourse()
    },
    requestCourse(){
      this.$api.myStudy.myStudy({type:this.type}).then((res)=>{
        console.log(res);
        this.tabs = res.data.data.typeNum
        console.log(this.tabs);
        this.list = res.data.data.courseList
      })
    },
    requestUserInfo(){
      this.$api.userInfo.userInfo().then((res)=>{
        console.log(res);
        this.userInfo = res.data.data
      })
    },
    onChooseCourse() {
      this.$router.push({
        name: 'Course'
      })
    },
    onRefresh() {
      this.requestCourse()
    },
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>

</style>