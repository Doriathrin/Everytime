<template>
  <div class="setInfo">
    <header>
      <van-icon name="arrow-left" size="20" @click="back"/>
        <span>修改个人信息</span>
      <van-icon @click="onSave">保存</van-icon>
    </header>
    <van-cell-group v-if='tag=="nickname"'>
      <van-field v-model="value" placeholder="最多可输入十五个字" maxlength="15" />
    </van-cell-group>
    <div v-else-if='tag=="subjects"'>
      <ul>
        <li v-for="(item,index) in value" :key="index">         
          <input type="checkbox" v-model="sub" :value="item.id">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <ul class="content" v-else>
      <li :class="{active:value==0}" @click="onSex(0)">男</li>
      <li :class="{active:value==1}" @click="onSex(1)">女</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SetInfo',
  data() { 
    return {
      value: this.$route.query.value,
      tag: this.$route.query.tag,
      sub:this.$route.query.select?this.$route.query.select:[],
    }
  },
  methods: {
    onSave(){
      switch(this.tag){
        case 'nickname':
          if (!this.value) {
              this.$toast("昵称不能为空");
          }
          this.$api.userInfo.user({nickname:this.value}).then(() => {
              this.$router.go(-1);
          });
          break;
        case 'subjects':
          let subDate=[];
          this.sub.forEach((res)=>{
            let d={attr_id:2,attr_val_id:res}
            subDate.push(d);
          });
          this.$api.userInfo.user({user_attr:JSON.stringify(subDate)}).then(() => {
            console.log(JSON.stringify(subDate));
            this.$router.go(-1);
          });
          break;
        case "sex":
          if (this.value) this.value = 1;
          else this.value = 0;
          this.$api.userInfo.user({ sex: this.value }).then(() => {
            this.$router.go(-1);
          });
          break;
      }
    },
    back(){
      this.$router.go(-1);
    },
    onSex(val) {
      this.value = val;
    }
  },
  mounted() {

  },
 }
</script>

<style lang="scss" scoped>
.setInfo{
  min-height: 100vh;
  background: #f0f2f5;
}
header{
  width:100%;
  height:50px;
  background: white;
  font-size:15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.van-cell-group{
  margin-top: 10px;
}

</style>