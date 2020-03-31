<template>
  <div class="details">
    <header>
      <ul>
        <router-link tag="li" to="/">
          <i class='iconfont'>&#xe63c;</i>
        </router-link>
        <li>课程详情</li>
        <li><i class="iconfont">&#xe620;</i></li>
      </ul>
    </header>
    <ul>
      <li v-for='(item,key) of list' :key='key'>
         <p>{{item.classify_title}}</p>
         <p>{{item.address}}</p>
         <p>{{item.city_name}}</p>
         <p v-html='item.course_details'></p>
         <p>{{item.district_name}}</p>
         <p>{{item.title}}</p>
         <img :src="item.teachers" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() { 
    return {
      list:[],
    }
  },
  created() {
    this.id=this.$route.query.id  
  },
  methods: {
    onLoad(id) {
      this.$api.courseInfo.courseInfo(this.id).then(res=> {
        console.log(res);
        this.list=res.data.data;
        console.log(res.data.data.info);
      })    
    },
  },
  mounted() {
   this.onLoad();
  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:50px;
  ul{
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
      
  }
}
img{
    width:50px;
    height:50px;
}
</style>