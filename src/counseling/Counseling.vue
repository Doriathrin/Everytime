<template>
  <div class="counseling">
    <header>
      <ul>
        <router-link tag="li" to="/records">
          <i class='iconfont'>&#xe63c;</i>
        </router-link>
        <li>一对一辅导</li>
        <li><i class="iconfont">&#xe637;</i></li>
      </ul>
    </header>
    <div class='lwq-nav'>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <van-cell >
          <dl v-for="(item,key) in list" :key="key" >
            <dt><img :src="item.avatar" alt=""></dt>
            <dd>
              <div>
                {{item.real_name}}
              </div>
              <div class='lwq-teach'>
                <p>{{list.sex == 1 ? '女':'男'}} {{list.teach_age}}年教龄</p>
              </div>
              <div class='lwq-nan'>
                <button @click="yuyue(item.teacher_id)">立即预约</button>
              </div>
            </dd>
          </dl>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counseling',
  data() { 
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    // arr(){
    //   this.$api.otoCourse.otoCourse().then((res)=>{
    //     console.log(res);
    //     this.list=res.data.data;
    //   })
    // },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.$api.otoCourse.otoCourse().then((res)=>{
        console.log(res);
        this.list=res.data.data;
      })

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 0) {
          this.finished = true;
        }
      }, 1000);
    },
    yuyue(id){
      this.$router.push({path:'/reservation',query:{'id':id}})
    }
  },
  mounted() {
    // this.arr();
  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:50px;
  ul{
    width:100%;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
  }
}
.lwq-nav{
  height: 93vh;
  overflow: scroll;
  img{
    width:50px;
    height:50px;
  }
  dl{
    width:350px;
    height:100px;
    margin-top: 10px;
    border-radius: 5px;
    background:whitesmoke;
    display: flex;
    dt{
      line-height: 140px;
      margin-left: 10px;
      img{
        width:50px;
        height:50px;
        border-radius: 50px;
      }
    }
    dd{
      margin-top: 15px;
      margin-left: 30px;
      div{
        display: flex;
      }
      .lwq-teach{
        font-size: 13px;
      }
      
    }
  }
}
</style>