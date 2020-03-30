<template>
  <div class="course">
    <header>
      <ul>
        <router-link tag="li" to="/">
          <i class='iconfont'>&#xe63c;</i>
        </router-link>
        <li>特色课</li>
        <li><i class="iconfont">&#xe637;</i></li>
      </ul>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </header> 
    <div class='lwq-nrong'>
      
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import FooterTabbar from '@/components/FooterTabbar'
export default {
  name: 'Course',
  data() { 
    return {
      list: [],
      listMenu:[],
      loading: false,
      finished: false,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
    }
  },
  components: {
    FooterTabbar
  },
  methods: {
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
    },
    add(){
      this.$api.course.courseClassify().then((res)=>{
        console.log(res);
        this.listMenu=res.data.data;
        console.log(res.data.data);
      })
    }
  },
  mounted() {
    this.add();
  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:100px;
  ul{
    width:100%;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
  }
}
.lwq-nrong{
  height: 75vh;
  overflow: scroll;
}
</style>