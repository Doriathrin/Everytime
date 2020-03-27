<template>
  <div class="specialBar"  >
    <div v-for='(item,index) in listData'>
      <h5 class='lwq-zhuanTi'>
        <i class='iconfont'>&#xe600;</i>
        {{item.channel_info.name}}
      </h5>
      <div class='lwq-yasi' v-for="(v,i) in item.list">
        <div class='lwq-zuo'>
          {{v.title}}
          {{v.teacher_name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specialbar',
  data() { 
    return {
      listData:[],
    }
  },
  methods: {
    onLoad(id) {      
      this.$api.article.articleList().then(res=> {
        console.log(res);
        this.listData=res.data.data;
        console.log(res.data.data);
      })    
    }
  },
  mounted() {
    this.onLoad();
  },
 }
</script>

<style lang="scss" scoped>
.specialBar{
  width:100%;
  height:200px;
  .lwq-zhuanTi{
    width:100%;
    height:50px;
    background: #fafafa;
    line-height: 50px;
    font-size: 20px;
  }
  .lwq-yasi{
    width:100%;
    height:300px;
    display: flex;
    .lwq-zuo{
      width:175px;
      height:150px;
      border-right:1px solid #fafafa;
      line-height: 50px;
      padding-left: 30px;
      img{
        width:100px;
        height:100px;
      }
    }
    .lwq-yo{
      width:175px;
      height:150px;
      .lwq-yo-shang{
        display: flex;
        align-items: center;
        width:200px;
        height:80px;
        border-bottom:1px solid #fafafa;
      }
      .lwq-yo-xia{
        width:200px;
        height:80px;
        display: flex;
        align-items: center;
      }
      img{
        width:50px;
        height:50px;
      }
    }
  }
}
</style>