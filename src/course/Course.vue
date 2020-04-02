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
        <van-dropdown-item title="分类" ref="kinds">
          <div class='lwq-fenlei'>
            <div v-for="(item,key) in listMenu" :key='item.id' class='lwq-hezi'>
              <p>{{item.name}}</p>
              <ul>
                <li v-for='v in item.child' :key='v.id' class='lwq-fenrong' >
                  
                  <span 
                  :class="attr_val_id['attr'+key] == v.id ? 'active':''" 
                  @click="selectId(v.id,'attr'+key)"
                  >{{v.name}}</span>
                </li>
              </ul>
            </div>
          </div>
          <van-button @click="quxiao('kinds')">重置</van-button>
          <van-button  class='lwq-btn-que' @click="queren('kinds')">确认</van-button>
        </van-dropdown-item>
        <van-dropdown-item title="排序" :options="option2" >
        </van-dropdown-item>
        <van-dropdown-item title="筛选" :options="option3" >
        </van-dropdown-item>
      </van-dropdown-menu>
    </header> 
    <div class='lwq-nrong' @scroll.passive="getScroll($event)">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad($event)"
      >
        <van-cell v-for="(item,key) in list" :key='key' :title='item.title'> 
          <img :src="item.teachers_list[0].teacher_avatar" alt="">
          {{item.teachers_list[0].teacher_name}}
          <p>共{{item.browse_base}}课时</p>
          <p>共有{{item.total_periods}}人报名</p>
        </van-cell>
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
      form:{
        page:1,
        attr_val_id:0,
        limit:10,
        course_type:0,
        classify_id:0,
        order_by:0,
        is_vip:0
      },
      str:1,
      attr_val_id:{},
      value2: 'a',
      option2: [
        { text: '综合排序', value: 'a' },
        { text: '最新', value: 'b' },
        { text: '最热', value: 'c' },
        { text: '价格从低到高', value: 'd' },
        { text: '价格从高到低', value: 'e' },
      ],
      option3: [
        { text: '全部', value: 'a' },
        { text: '大班课', value: 'b' },
        { text: '公开课', value: 'c' },
        { text: '点播课', value: 'd' },
        { text: '面授课', value: 'e' },
        { text: '音频课', value: 'f' },
        { text: '系统课', value: 'g' },
        { text: '图文课', value: 'h' },
        { text: '会员课', value: 'i' },
      ]
    }
  },
  components: {
    FooterTabbar
  },
  methods: {
    getScroll(event,form){
      let scrollBottom =
          event.target.scrollHeight -
          event.target.scrollTop -
          event.target.clientHeight;
          console.log(event.target.clientHeight);
        if(this.str==1&&scrollBottom<5){
          this.form.page+=1;
          this.onLoad();
        }else if(this.str==2&&scrollBottom<5){
          this.form.page+=1;
          this.queren();
        }
    },
    add(){
      this.$api.course.courseClassify().then((res)=>{
        console.log(res);
        this.listMenu=res.data.data.attrclassify;
        console.log(res.data.data.attrclassify);
      })
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      var str=[]
        this.$api.courseBasis.courseBasis(this.form).then((res)=>{
          // console.log(res);
          // this.list=res.data.data.list;
          str=res.data.data.list;
          this.list=this.list.concat(str);
        })
        // // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 0) {
          this.finished = true;
        }
    },
    queren(name){
      // alert(1111)
      this.$refs[name].toggle();
      console.log(name);
      this.$api.courseBasis.courseBasis(this.form).then((res)=>{
          console.log(res);
          this.list=res.data.data.list;
        })
    },
    quxiao(){
      this.$refs([name]).toggle();
    },
    selectId(id, attr) {                        //分类选项
            this.str;
            console.log(this.str);
            this.form.attr_val_id=id
            // this.search(this.form)
            this.$set(this.attr_val_id, attr, id);
            this.form;
        },
  },
  mounted() {
    this.add();
    this.onLoad();
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
  img{
    width:50px;
    height:50px;
  }
}
.lwq-fenlei{
  .lwq-hezi{
    width:100%;
    height:150px;
    ul{
      flex-wrap: wrap;
    }
    p{
      width:70px;
      height:30px;
      // background: red;
      font-size:15px;
      border-radius: 3px;
      line-height: 30px;
      text-align: center;
    }
    .lwq-fenrong{
      width:100px;
      height:30px;
      font-size:15px;
      line-height: 30px;
      text-align: center;
      background: whitesmoke;
      border-radius: 5px;
      margin-top: 10px;
    }
  }
  
}
.lwq-btn-que{
  background: darkorange;
}
.active{
    color:red;
    background: #ebeefe;
  }
</style>