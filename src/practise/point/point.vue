<template>
  <div class="point">
    <header>数学</header>
    <section>
      <ul>
        <li>题库选择</li>
        <li></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Point',
  data() { 
    return {
      
    }
  },
  methods: {
    add(){
      this.$api.classify.classify().then((res)=>{
        console.log(res);
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
  height:60px;
  line-height: 50px;
  text-align: center;
  font-size:20px;
  border-bottom:10px solid #f0f2f5;
}
section{
  ul{
    display: flex;
    font-size:15px;
  }
}
</style>