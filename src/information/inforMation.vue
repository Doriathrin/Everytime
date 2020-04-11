<template>
  <div class="information">
    <header>
      信息填写
    </header>
    <dl @click="headshot">
      <dd>头像</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <van-action-sheet v-model="portrait" :actions="actions" @select="onSelect" />
    <dl>
      <dd>昵称</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <dl>
      <dd>性别</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <dl  @click="Select">
      <dd>年龄</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>

    <van-action-sheet v-model="show" @select="onSelect" >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-action-sheet>
    
    <dl @click="ction">
      <dd>所在城市</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
      <span>{{userInfo.province_name}}{{userInfo.city_name?"，"+userInfo.city_name:''}}{{userInfo.district_name?"，"+userInfo.district_name:''}}</span>
    </dl>
    <van-action-sheet v-model="City" @select="onSelect">
      <van-area 
      :area-list="areaList" 
      :columns-num="3" 
      @change="onChangeAddress"
      :value="userInfo.district_id + ''"
      />
    </van-action-sheet>

    <dl @click="Subject">
      <dd>学科</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <dl @click="xueke">
      <dd>年级</dd>
      <dt><i class='iconfont'>&#xe600;</i></dt>
    </dl>
    <van-action-sheet v-model="Change" @select="onSelect">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
        />
    </van-action-sheet>

    <div class='lwq-ti'>
      <span class='lwq-tijiao'>
        提交
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inforMation',
  data() { 
    return {
      userInfo:{},
      show: false,
      Change:false,
      City:false,
      portrait:false,
      id:1,
      minDate: new Date(1980, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      actions: [
        { name: '拍照' },
        { name: '从手机相册选择' },
        { name: '取消' }
      ],
      columns: ['全部', '高三', '高二', '高一', '初三','初二','初一'],
      listColumns:[],
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
      provinceID:'',
    }
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
    },
    Select(){
      this.show=true
    },
    xueke(){
      this.Change=true
    },
    ction(){
      this.City=true
    },
    headshot(){
      this.portrait=true
    },
    Subject(){
      this.$router.push({path:'/subject'})
    },
    onConfirm(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    // sonArea(){
    //   this.$api.userInfo.sonArea().then((res)=>{
    //     console.log(res);
    //     this.areaList=res.data.data
    //     console.log(this.areaList);
    //   })
    // },
    attribute(){
      this.$api.userInfo.attribute(this.id).then((res)=>{
        console.log(res);
        // this.columns=res.data.data
      })
    },
    onConfirmAddress(val) {
      this.showPopup = false;
      // this.requestUpdateUserInfo({
      //   province_id: val[0].code,
      //   city_id: val[1].code,
      //   district_id: val[2].code
      // });
      this.userInfo.province_name = val[0].name;
      this.userInfo.city_name = val[1].name;
      this.userInfo.district_name = val[2].name;
      this.userInfo.province_id = val[0].code;
      this.userInfo.city_id = val[1].code;
      this.userInfo.district_id = val[2].code
    },
    async requestArea() {
      let obj = {};
      const province = await this.$api.userInfo.sonArea();
      console.log(province);
      province.data.data.forEach(i => {
        obj[i.id] = i.area_name;
      });
      this.areaList.province_list = obj;
      const provinceID = this.userInfo.province_id || province.data.data.id;
      const city = await this.$api.userInfo.sonAreaID({provinceID:this.provinceID});
      console.log(city);
      obj = {};
      city.data.data.forEach(i => {
        obj[i.id] = i.area_name;
      });
      this.areaList.city_list = obj;
      const cityID =this.userInfo.city_id || city.data.data.id;
      const district = await this.$api.userInfo.sonAreaSID({cityID});
      obj = {};
      district.data.data.forEach(i => {
        obj[i.id] = i.area_name;
      });
      this.areaList.county_list = obj;
      if (!this.userInfo.district_id && district.length) {
        this.userInfo.district_id = district.data.data.id;
      }
    }
  },
  mounted() {
    // this.sonArea();
    this.attribute()
    this.requestArea()
  },
 }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  height:50px;
  // background: red;
  border-bottom:1px solid #777;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
dl{
  width:100%;
  height:50px;
  border-bottom:1px solid #f5f5f5;
  font-size:18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul>li{
  font-size: 15px;
}
.lwq-ti{
  margin-left: 35px;
  background:url('../assets/images/login-btn.png');
  width:80%;
  height:40px;
  background-size: 100% 100%;
  text-align: center;
  .lwq-tijiao{
    font-size:15px;     
    color:white;
  }
}
</style>