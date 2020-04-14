<template>
  <div class="oto">
    <header>
      <ul>
        <li class='iconfont' @click="geren">
          &#xe63c;
        </li>
        <li>
          一对一辅导
        </li>
        <li class='iconfont'>
          &#xe637;
        </li>
      </ul>
    </header>
    <section @scroll.passive="getScroll($event)">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item,key) in  listMapp" :key="key">
          <img :src="item.avatar" alt="">
          {{item.real_name}}
        </van-cell>
      </van-list>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Oto',
  data() { 
    return {
      listMapp: [],
      otoCourse:[],
      loading: false,
      finished: false,
      str:1,
      form:{
        page:1,
      }
    }
  },
  methods: {
    getScroll(event,form){
      let scrollBottom =
          event.target.scrollHeight -
          event.target.scrollTop -
          event.target.clientHeight;
          console.log(event.target.clientHeight);
        // if(this.str==1&&scrollBottom<5){
        //   // this.form.page+=1;
        //   this.onLoad();
        // }
    },
    geren(){
      this.$router.push({name:'Persona'})
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
        var str=[]
              this.$api.otoCourse.otoCourse().then((res)=>{
                console.log(res);
                str=res.data.data;
                this.listMapp=this.listMapp.concat(str);
              })
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.listMapp.length >= 0) {
          this.finished = true;
        }
      // }, 1000);
    }
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:50px;
  background: cadetblue;
  ul{
    width:100%;
    height:50px;
    font-size:20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
section{
  height: 90vh;
  overflow: scroll;
  img{
    width:50px;
    height:50px;
  }
}
</style>