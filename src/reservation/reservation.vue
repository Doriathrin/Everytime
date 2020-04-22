<template>
  <div class="reservation">
    <header>
      <i class='iconfont'>&#xe601;</i>
      <p>预约课程</p>
    </header>
    <section>
      <div class='lwq-xiang'>
        <dl>
          <dt><img :src="list.avatar" alt=""></dt>
          <dd>
            <div class='lwq-nan'>
              <div>
                <p>
                  {{list.teacher_name}}
                </p>
              </div>
              <div class='lwq-nian'>
                <p>{{list.sex == 1 ? '女':'男'}} {{list.teach_age}}年教龄</p>
              </div>
            </div>
            <div class='lwq-cha'>
              查看详情
            </div>
          </dd>
        </dl>
      </div>
      <div class="op-title">
        选择时间
        <span>（北京时间）</span>
      </div>
      <div class="op-time">
      </div>
      <div class='lwq-shijian'>
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
        this.list=res.data.data.teacher
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
.reservation{
  background: #f0f2f5;
  min-height: 100vh;
}
header{
  width:100%;
  height:100px;
  font-size:18px;
  color:white;
  display: flex;
  line-height: 40px;
  background-image: linear-gradient(180deg,#63b7fe,#4e7de3);
  position: relative;
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
    background: white;
    display: flex;
    font-size:15px;
    border-radius: 5px;
    position: absolute;
    top:40px;
    left:12px;
    dl{
      display: flex;
      dt{
        margin-top: 15px;
        margin-left: 15px;
        img{
          width:50px;
          height:50px;
          border-radius: 50px;
        }
      }
      dd{
        margin-top: 20px;
        margin-left: 20px;
        .lwq-nan{
          color: #b7b7b7;
          font-size: 12px;
          span{
            margin-left: 5px;
          }
          .lwq-nian{
            display: flex;
          }
        }
        .lwq-cha{
          // display: flex;
          position: absolute;
          top:25px;
          left:250px;
          width: 80px;
          height:30px;
          border:1px solid #eb6100;
          color: #eb6100;
          border-radius: 20px;
          line-height: 25px;
          font-size:13px;
          text-align: center;

        }
      }
    }
  }
  .op-title {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(89, 89, 89, 1);
    line-height: 100px;
    position: relative;
    padding-left: 20px;
    height: 100px;
    span {
      font-size: 15px;
    }
  }
  .op-title::after {
    position: absolute;
    content: "";
    left: 24px;
    top: 34px;
    width: 6px;
    height: 32px;
  }
  .lwq-shijian{
    width:350px;
    height:80px;
    background: white;
    margin-top:-30px;
    line-height: 80px;
    font-size:15px;
    margin-left: 15px;
    border-radius: 5px;
  }
}
</style>