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
      <van-tab v-for="(item,key) in tabs" :title="`${item.name}(${item.num})`">
        
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'MyStudy',
  data() { 
    return {
      list:[],
      type:2,
      tabs: [],
    }
  },
  created () {
    this.id=this.$route.query.id
    console.log(this.id);
  },
  methods: {
    onTabChange(index) {
      this.type = this.tabs[index].type
      this.requestCourse()
    },
    add(){
      this.$api.myStudy.myStudy(this.type).then((res)=>{
        console.log(res);
        this.tabs = res.data.data.typeNum
        console.log(this.tabs);
        this.list = res.data.data.courseList
      })
    }
  },
  mounted() {
    this.add();
  },
 }
</script>

<style lang="scss" scoped>

</style>