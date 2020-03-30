<template>
  <div class="specialBar"  > 
    <div class='lwq-tuijian'>
      <h5 class='lwq-zhuanTi'>
        <i class='iconfont'>&#xe600;</i>
        {{listData[0].channel_info.name}}
      </h5> 
      <dl v-for='(item,index) in listData[0].list' :key='index' class='lwq-laoshi'>
        <dt><img :src="item.teachers_list[0].teacher_avatar" alt=""></dt>
        <dd>
          {{item.teachers_list[0].teacher_name}}
          <p>黄老师，特级讲师</p>
        </dd>
      </dl>
    </div>
    <div class='lwq-tuijian'>
      <h5 class='lwq-zhuanTi'>
        <i class='iconfont'>&#xe600;</i>
        {{listData[1].channel_info.name}}
      </h5> 
      <dl v-for='(item,index) in listData[1].list' :key='index' class='lwq-laoshi'>
        <dt><img :src="item.teachers_list.teacher_avatar" alt=""></dt>
        <dd>
          {{item.title}}
          {{item.teachers_list.teacher_name}}
        </dd>
      </dl>
    </div>
    <div class='lwq-tuijian-tjian'>
      <h5 class='lwq-zhuanTi'>
        <i class='iconfont'>&#xe600;</i>
        {{listData[2].channel_info.name}}
      </h5> 
      <dl v-for='(item,index) in listData[2].list' :key='index' class='lwq-laoshi'>
        <dt><img :src="item.teacher_avatar" alt=""></dt>
        <dd>
          {{item.teacher_name}}
        </dd>
      </dl>
    </div>
    <div class='lwq-tuijian'>
      <h5 class='lwq-zhuanTi'>
        <i class='iconfont'>&#xe600;</i>
        {{listData[3].channel_info.name}}
      </h5> 
      <dl v-for='(item,index) in listData[3].list' :key='index' class='lwq-laoshi'>
        <dt><img :src="item.teacher_avatar" alt=""></dt>
        <dd>
          {{item.teacher_name}}
        </dd>
      </dl>
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
  .lwq-tuijian-tjian{
    width:100%;
    height:500px;
    background: #fafafa;
    line-height: 50px;
    font-size: 20px;
    .lwq-laoshi{
      font-size:15px;
      margin: 0 auto;
      margin-top: 10px;
      width:350px;
      height:100px;
      background: white;
      display: flex;
      img{
        margin-top: 25px;
        width:50px;
        height:50px;
        border-radius: 50px;
        margin-left: 15px;
      }
      dd{
        margin-left: 10px;
      }
    }
  }
  .lwq-tuijian{
    width:100%;
    height:300px;
    background: #fafafa;
    line-height: 50px;
    font-size: 20px;
    .lwq-laoshi{
      font-size:15px;
      margin: 0 auto;
      margin-top: 10px;
      width:350px;
      height:100px;
      background: white;
      display: flex;
      img{
        margin-top: 25px;
        width:50px;
        height:50px;
        border-radius: 50px;
        margin-left: 15px;
      }
      dd{
        margin-left: 10px;
      }
    }
  }
}
</style>