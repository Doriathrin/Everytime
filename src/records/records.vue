<template>
  <div class="records">
    <header>
      约课记录
    </header>
    <div class='lwq-nav'>
      <van-tabs v-model="active">
        <van-tab title="待上课">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
             <button @click="yue">立即预约</button>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="已上课">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
             <button @click="yue">立即预约</button>
          </van-pull-refresh>
        </van-tab>
        <van-tab title="已取消">
          
        </van-tab>
      </van-tabs> 
      
    </div>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import FooterTabbar from '@/components/FooterTabbar'
export default {
  name: 'Records',
  components: {
    FooterTabbar
  },
  data() { 
    return {
      active: 0,
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        // Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    yue(){
      this.$router.push({path:'/counseling'})
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
  text-align: center;
  line-height: 50px;
  font-size:20px;
}
.van-pull-refresh{
  height:570px;
  // background: red;
}
</style>