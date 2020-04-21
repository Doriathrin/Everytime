<template>
  <div class="information">
    <header>
      <ul>
        <router-link to="/persona" tag="li" class='iconfont'>
          &#xe63c;
        </router-link>
        <li class='lwq-xinxi'>信息填写</li>
      </ul>
    </header>
    <ul class='lwq-nbu'>
      <li @click="onShowProp('avatar')">
        <span>头像</span>
        <span><img :src="userInfo.avatar" alt /></span>
      </li>
      <li @click="onShowProp('nickname')">
        <span>昵称</span>
        <span>{{userInfo.nickname}}</span>
      </li>
      <li class="mobile">
        <span>手机号</span>
        <span>{{userInfo.mobile}}</span>
      </li>
      <li @click="onShowProp('sex')">
        <span>性别</span>
        <span>{{userInfo.sex|sexD}}</span>
      </li>
      <li @click="onShowProp('birthday')">
        <span>出生日期</span>
        <span>{{userInfo.birthday}}</span>
      </li>
      <li @click="onShowProp('address')">
        <span>所在城市</span>
        <span>{{userInfo.province_name}}{{userInfo.city_name?"，"+userInfo.city_name:''}}{{userInfo.district_name?"，"+userInfo.district_name:''}}</span>
      </li>
      <li @click="onShowProp('subjects')">
        <span>学科</span>
        <span>{{userInfo.subjectNames}}</span>
      </li>
      <!-- 年级 -->
      <li v-for="(item, index) in attrs" v-if="item.id!=2" :key="index" @click="onShowProp('attrs', item)">
        <span>{{item.attr}}</span>
        <span>{{item.selectIdx == -1 ? '请选择' : item.value[item.selectIdx].text}}</span>
      </li>
    </ul>
    <van-action-sheet v-model="showPopup">
      <ul v-if="changeTag == 'avatar'" class="lwq-toxiang">
        <li @click="appUploadImg(1)">
          <p>拍照</p>
          <input type="file" accept="image/*" capture="camera" @change="onChangeAvatar" />
        </li>
        <li @click="appUploadImg(2)">
          <p>从手机相册选择</p>
          <input type="file" accept="image/*" @change="onChangeAvatar" />
        </li>
        <li @click="showPopup = false">取消</li>
      </ul>
      <van-datetime-picker
        v-else-if="changeTag == 'birthday'"
        v-model="birthday.currentDate"
        type="date"
        :min-date="birthday.minDate"
        :max-date="birthday.maxDate"
        @cancel="onCancel"
        @confirm="onConfirmBirthday"
      />
      <van-area 
      v-else-if="changeTag == 'address'"
      :area-list="areaList" 
      :columns-num="3" 
      @cancel="onCancel"
      @change="onChangeAddress"
      @confirm="onConfirmAddress"
      :value="userInfo.district_id + ''"
      />
      <van-picker
        v-if="changeTag == 'attrs'"
        :columns="attrsColums"
        :default-index="attrsSelectIdx"
        show-toolbar
        @cancel="onCancel"
        @confirm="onConfirmAttrs"
      />
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  name: 'inforMation',
  data() { 
    return {
      userInfo:{},
      showPopup:false,
      changeTag: "",
      attrs: [],
      attrsColums:[],
      attrsSelectIdx: -1,
      sonArea:0,
      birthday:{
        minDate: new Date(1980, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
      },
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
    }
  },
  methods: {
    onShowProp(tag, item) {
      switch (tag) {
        case "nickname":
          this.$router.push({
            name: "SetInfo",
            query: {
              tag,
              value: this.userInfo.nickname
            }
          });
          return;
        case "sex":
          this.$router.push({
            name: "SetInfo",
            query: {
              tag,
              value: this.userInfo.sex
            }
          });
          return;
        case "address":
          this.requestArea();
          break;
        case "subjects":
          let val;
          this.attrs.forEach(res => {
            if(res.id==2){
              val = res.value
            }
          })
          this.$router.push({
            name: "SetInfo",
            query: {
              tag,
              value: val,
              select: this.userInfo.subjects
            }
          });
          return 
          break;
        case "attrs":   
          this.attrsColums = item.value;
          this.attrsSelectIdx = item.selectIdx;
          break;
      }
      this.changeTag = tag;
      this.showPopup = true;
    },
    Subject(){
      this.$router.push({path:'/subject'})
    },
    onCancel() {
      this.showPopup = false;
    },
    onConfirmBirthday(v) {
      let youWant =v.getFullYear() + "-" + (v.getMonth() + 1) + "-" + v.getDate();
      // console.log(youWant);
      this.requestUpdateUserInfo({ birthday: youWant });
    },
    onConfirmAttrs(value, index) {
      // 年级
      this.showPopup = false;
      this.attrs[value.parentIdx].selectIdx = index;
      const attrAry = [];
      console.log(this.attrs);
      this.attrs.forEach((i) => {
        console.log(i);
        if (i.selectIdx == -1) return;
        attrAry.push({
          attr_id: i.id,
          attr_val_id: i.value[i.selectIdx].id
        });
      });
      // this.requestUpdateUserInfo({
      //   user_attr: JSON.stringify(attrAry)
      // });
      this.userInfo.user_attr = JSON.stringify(attrAry)
    },
    onChangeAvatar(e) {
      // 头像
      const formdata = new FormData();
      console.log(formdata);
      formdata.append("file", e.target.files[0]);
      this.$api.userInfo().Public(formdata).then(data => {
        this.requestUpdateUserInfo({ avatar: data.path });
      });
      this.showPopup = false;
    },
    onChangeAddress(picker, data, index) {
      // console.log(picker, data, index);
      switch (index) {
        case 0:
          this.$api.userInfo.sonArea(data[index].code).then((res) => {
            let obj = {};
            res.data.data.forEach((i) => {
              obj[i.id] = i.area_name;
            });
            this.areaList.city_list = obj;
            this.$api.userInfo.sonArea(res.data.data.id).then((res1) => {
              obj = {};
              res1.data.data.forEach((i) => {
                obj[i.id] = i.area_name;
              });
              this.areaList.county_list = obj;
            });
          });
          break;
        case 1:
          this.$api.userInfo.sonArea(data[index].code).then((res) => {
            let obj = {};
            res.data.data.forEach((i) => {
              obj[i.id] = i.area_name;
            });
            this.areaList.county_list = obj;
          });
          break;
        case 2:
          break;
      }
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
    requestArea() {
      // 城市
      this.$api.userInfo.sonArea(this.sonArea).then((res)=>{
        console.log(res);
        res=res.data.data
        let obj={};
        res.forEach((i)=>{
          obj[i.id]=i.area_name;
        });
        this.areaList.province_list = obj;
        const provinceID = this.userInfo.province_id || res[0].id;
        this.$api.userInfo.sonArea(provinceID).then((res1)=>{
          console.log(res1.data);
          res1=res1.data.data
          obj={};
          res1.forEach((i)=>{
            obj[i.id]=i.area_name;
          });
          this.areaList.city_list = obj;
          const cityID = this.userInfo.city_id || res1[0].id;
          console.log(cityID);
          this.$api.userInfo.sonArea(cityID).then(res2 => {
            console.log(res2);
            res2=res2.data.data
            obj = {};
            res2.forEach(i => {
              obj[i.id] = i.area_name;
            });
            this.areaList.county_list = obj;
            if (!this.userInfo.district_id && res2.length) {
              this.userInfo.district_id = res2[0].id;
            }
          });
        })
      })
    },
    requestUpdateUserInfo(params) {
      this.$api.userInfo.user(params).then((res) => {
        // console.log(res);
        this.$toast("数据更新成功");
        this.requestUserInfo();
      });
    },
    requestUserInfo() {
      this.$api.userInfo.userInfo().then(data => {
        console.log(data);
        this.userInfo = data.data.data;
        console.log( this.userInfo.birthday);
        // 生日
        if (this.userInfo.birthday == 0) {
          this.userInfo.birthday = "请选择";
        }
        //城市
        if (!this.userInfo.province_name) {
          this.userInfo.province_name = "请选择";
        }
        //学科
        let subArr = []
        let subNames = ''
        data.data.data.attr.forEach(res=>{
          if(res.attr_id==2){
            subArr.push(res.attr_val_id)
            subNames = subNames + " " + res.attr_value
          }
        })
        this.userInfo.subjects = subArr
        this.userInfo.subjectNames = subNames

        //动态属性
        this.attrs = [];
        this.$api.userInfo.attribute().then(attrData => {
          attrData.data.data.forEach(i => {
            if (i.value.length == 0)
            {
            	return false;
            }
            if(i.id==1||i.id==2)
            {
	            // 修改
	            i.value.forEach(ci => {
	              ci.text = ci.name;
	              ci.parentIdx = this.attrs.length;
	            });
	            // 选中
	            i.selectIdx = -1;
	            for (const attri of this.userInfo.attr) {
	              if (attri.attr_id == i.id) {
	                for (let vali = 0; vali < i.value.length; ++vali) {
	                  if (attri.attr_val_id == i.value[vali].id) {
	                    i.selectIdx = vali;
	                    break;
	                  }
	                }
	                break;
	              }
	            }
	             // 压入
           	 this.attrs.push(i);
           }
          });
        });
        this.showPopup = false;
      });
    },
  },
  mounted() {
    this.requestUserInfo();
    this.requestArea()
  },
  filters: {
    sexD(v) {
      if (v == 0) {
        return "男";
      } else if (v == 1) {
        return "女";
      } else {
        return "保密";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.information{
  min-height: 100vh;
  background: #f0f2f5;
}
header{
  width:100%;
  height:50px;
  background: white;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  ul{
    display: flex;
    align-items: center;
    .iconfont{
      margin-left: 20px;
    }
    .lwq-xinxi{
      margin-left: 120px;
    }
  }
}
.lwq-nbu{
  margin-top: 10px;
  background: white;
  li{
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    width:350px;
    height:50px;
    font-size:15px;
    line-height: 50px;
    border-bottom: 1px solid #f5f5f5;
    img{
      width:40px;
      height:40px;
    }
  }
}
.lwq-toxiang{
  li{
    width:100%;
    height:60px;
    font-size:15px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>