<template>
  <div class="reservation">
    <header>
      <i class='iconfont'>&#xe601;</i>
      <p>预约课程</p>
    </header>
    <section>
      <div class='lwq-xiang' v-for="(item,index) in list" :key='index'>
        <dl>
          <dt><img :src="item.avatar" alt=""></dt>
          <dd>
            <div>
              {{item.teacher_name}}
              <p v-if="item.sex=='1'">女</p>
              <p v-if="item.sex=='0'">男</p> 
              <p>{{item.teach_age}}年教龄</p>
            </div>
          </dd>
        </dl>
      </div>
      <div style="margin-top:150px">
        <div v-for="(item,key) in weekDateList" :key='key'>
          {{item[0]}}
          {{item[1]}}
          {{item[2]}}
          {{item[3]}}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Reservation',
  data() { 
    return {
      list:[],
      week_day:1,
      is_next:0,
      weekDateList:[]
    }
  },
  created () {
    this.id=this.$route.query.id
  },
  methods: {
    add(){
      this.$api.reservation.reservation(this.id).then((res)=>{
        console.log(res);
        this.list=res.data.data
        console.log(res.data.data.teacher);
        console.log(this.id);
      })
    },
    arr(){
      this.$api.invite.invite({
        teacher_id:this.id,
        week_day:this.week_day,
        is_next:this.is_next
      }).then((res)=>{
        console.log(res);
        this.weekDateList=res.data.data
      })
    }
  },
  mounted() {
    this.add();
    this.arr()
  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:100px;
  font-size:18px;
  color:white;
  display: flex;
  line-height: 40px;
  background-image: linear-gradient(180deg,#63b7fe,#4e7de3);
  p{
    
    margin-left: 120px;
  }
  .iconfont{
    margin-left: 15px;
  }
}
section{
  width:100%;
  .lwq-xiang{
    width:350px;
    height:80px;
    background: red;
    display: flex;
    font-size:15px;
    img{
      width:50px;
      height:50px;
      border-radius: 50px;
    }
  }
}
</style>