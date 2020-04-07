<template>
  <div class="search">
    <header>
      <ul>
        <router-link tag="li" to="/course">
          <i class='iconfont'>&#xe63c;</i>
        </router-link>
        <li><input type="text" placeholder="请输入内容" v-model="username"></li>
        <!-- <li class='lwq-quxiao'>取消</li> -->
        <li @click="search">搜索</li>
      </ul>
    </header>
    <section>
      <div>
        <h6>历史搜索</h6>
        <i class='iconfont'>&#xe612;</i>
      </div>
      <ul>
        <li v-for="(item,key) of list" :key='key'>
          {{item}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() { 
    return {
      list:JSON.parse(localStorage.getItem('list'))||[],
      username:''
    }
  },
  methods: {
    search(){
      this.list.map((item,key)=>{
        if(this.username==item){
          this.list.splice(key,1)
        }
      })
      this.list.unshift(this.username)
      localStorage.setItem('list',JSON.stringify(this.list));
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
  border-bottom:1px solid #eaeaea;
  ul{
    width:100%;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 15px;
    .lwq-quxiao{
      color:#d2d2d1
    }
  }
  input{
    width:280px;
    height:35px;
    border:none;
    border-radius: 50px;
    padding-left: 30px;
    background: #e4e7ed;
  }
}
section{
  width:100%;
  
  div{
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li{
      width: 20%;
      font-size:15px;
    }
  }
}
</style>