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
              <div>
                {{item.teach_age}}年教龄
              </div>
              <div>
                <button>立即预约</button>
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
    arr(){
      this.$api.otoCourse.otoCourse().then((res)=>{
        console.log(res);
        this.list=res.data.data;
      })
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  },
  mounted() {
    this.arr();
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
    display: flex;
    dd{
      div{
        display: flex;
      }
    }
    
  }
}
</style>