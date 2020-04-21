<template>
  <div class="point">
    <header>题库选择</header>
    <van-search v-model="value" class='search' placeholder="请输入搜索关键词" />
    <div class="select-container">
      <div class="left">
        <div
          @click="changeClassify(item.id)"
          class="item"
          :class="{'active':classify==item.id}"
          v-for="item in classifyList"
          :key="item.id"
        >{{item.name}}</div>
      </div>
      <div class="right">
        <div class="item" v-for="item in subClassifyList" :key="item.id">
          <div class="classify-name">{{item.name}}</div>
          <div class="bank-list">
            <div class="bank-warp" v-for="(banks,index) in item.bankGroup" :key="index">
              <span
                class="bank"
                :class="{'active':bankId==bank.id}"
                v-for="bank in banks"
                :key="bank.id"
                @click="changeBank(bank)"
              >{{bank.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Point',
  data() { 
    return {
      value: '',
      bankId:0,
      classify: 0,
      subClassify: 0,
      subClassifyList: [],
      classifyList: [],
    }
  },
  methods: {
    created() {
      this.$api.classify.classify().then((res)=>{
        this.classifyList = res.data.data;
        if (this.classifyList.length > 0) {
          if (this.classify == 0) {
            this.classify = this.classifyList[0].id;
          }
          this.getSubClassify();
        }
      });
    },
    getSubClassify(){
      this.$api.classify.quesBank(this.classify).then((res)=>{
        console.log(res);
        res.data.data.forEach(subClassify => {
          subClassify.bankGroup = {};
          if (!subClassify.bank) {
            return;
          }
          for (let i = 0; i < subClassify.bank.length; i++) {
            let index = parseInt(i / 2);
            console.log(index);
            subClassify.bankGroup[index] = subClassify.bankGroup[index] || [];
            subClassify.bankGroup[index].push(subClassify.bank[i]);
          }
        });
        this.subClassifyList = res.data.data;
      })
    },
    changeClassify(classify){
      this.classify = classify;
      this.getSubClassify();
    }
  },
  mounted() {
    this.created()
  },
 }
</script>

<style lang="scss" scoped>
@import '../../css/_vw_func.scss';
header{
  width:100%;
  height:60px;
  line-height: 50px;
  text-align: center;
  font-size:20px;
  border-bottom:10px solid #f0f2f5;
}
.select-container{
  min-height: 100%;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-grow: 1;
  .left {
    background: rgba(250, 250, 250, 1);
    margin-right: 20px;
    width: 100px;
    .item {
      font-size: 20px;
      color: rgba(89, 89, 89, 1);
      box-sizing: border-box;
      padding: 10px 10px;
      &.active {
        background: white;
      }
    }
  }
  .right {
    margin-right: 10px;
    flex: 1;
    .item {
      padding-top: 20px;
      .classify-name {
        font-size: 15px;
        color: #595959;
        margin-bottom: 30px;
        font-weight: 400;
      }
      .bank-list {
        width: 200px;
        box-sizing: border-box;
        .bank-warp {
          display: flex;
        }
        .bank {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          color: rgba(100, 100, 100, 1);
          margin-bottom: 10px;
          background: rgba(245, 245, 245, 1);
          border-radius: 4px;
          padding: 10px 10px;
          margin-right: 10px;
          text-align: center;
          box-sizing: border-box;
          &:nth-child(2) {
            margin-right: 0;
          }
          &.active {
            color: $theme-color;
            background: $theme_color_light;
          }
        }
      }
    }
  }
}
</style>