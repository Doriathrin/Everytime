<template>
  <div class="empty">
    <img :src="empty_type.img || require('../../assets/images/empty.png')" :style="mStyle" />
    <p>{{empty_type.name}}</p>
  </div>
</template>
<script>
export default {
  props: {
    empty_type: {
      type: Object,
      required: true
    }
  },
  computed: {
    mStyle() {
      const retStyle = this.empty_type.style
      if (retStyle) {
        for (const i in retStyle) {
          if (!retStyle[i].includes('%')) {
            retStyle[i] = this.$pub.px2vw(retStyle[i])
          }
        }
      }
      return retStyle
    }
  },
};
</script>
<style lang="scss" scoped>
@import '../../css/_vw_func.scss';
.empty {
  @extend %flex-center;
  flex-direction: column;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 20px;
    color: #8c8c8c;
    margin-top: 40px;
  }
}
</style>