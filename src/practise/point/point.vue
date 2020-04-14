<template>
  <div class="point">
    <header>题库选择</header>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="list[0].name" />
      <van-sidebar-item :title="list[1].name" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Point',
  data() { 
    return {
      list:[],
      value: '',
      activeKey: 0,
      subClassifyId:0,
      bankId:0,
    }
  },
  methods: {
    add(){
      this.$api.classify.classify({
        a:this.subClassifyId,
        b:this.bankId}).then((res)=>{
        console.log(res);
        this.list=res.data.data;
        console.log(this.list);
      })
    },
    arr(){
      this.$api.classify.quesBank().then((res)=>{
        console.log(res);
      })
    }
  },
  mounted() {
    this.add();
    this.arr();
  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:60px;
  line-height: 50px;
  text-align: center;
  font-size:20px;
  border-bottom:10px solid #f0f2f5;
}
section{
  ul{
    display: flex;
    font-size:15px;
  }
}
</style>