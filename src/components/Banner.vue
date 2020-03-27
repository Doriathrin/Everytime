<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Lazyload } from 'vant';
export default {
  name: 'Banner',
  data() { 
    return {
      images: [
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg',
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg',
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg'
      ]
    }
  },
  methods: {
    banner(){
      this.$api.banner.apiBanner().then((res)=>{
        console.log(res);
      })
    }
  },
  mounted() {
    this.banner();
  },
 }
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.banner{
  width:100%;
  height:200px;
  .van-swipe__indicators{
    position: absolute;
    bottom:49.5px;
  }
  img{
    width:100%;
    height:100%;
  }
}
</style>