<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <div class="Customer" id="default_drag_comp" @touchstart="down" @touchmove="move" @touchend="end">
      <van-icon name="envelop-o" class="icon" size="30px" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    this.maxW =document.body.clientWidth;
    this.maxH= document.documentElement.clientHeight
    
  },
  data() {
    return {
      flags: false,
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      maxW:0,
      maxH:0
    };
  },
  methods: {
    // 实现移动端拖拽
    down() {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }

      this.dx = touch.clientX;
      this.dy = touch.clientY;
    },
    move(event) {
      event.preventDefault();//否则页面就会一起滑动

      //querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素
      let default_drag_comp = document.querySelector("#default_drag_comp");
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }

        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        //左右范围
        if (this.nx < 0) {
          this.nx = 0;
        } else if (this.nx > this.maxW) {
          this.nx = this.maxW;
        }
        //上下范围
        if (this.ny < 0) {
          this.ny = 0;
        } else if (this.ny >= this.maxH) {
          this.ny = this.maxH;

        }
        default_drag_comp.style.left = this.nx-30 + "px";
        default_drag_comp.style.top = this.ny-30 + "px";
        //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
        document.addEventListener(
          "touchmove",
          function() {
            // event.preventDefault();
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}
.Customer {
  background: #007aff;
  border-radius: 100%;
  text-align: center;
  line-height: 60px;
  color: #fff;
  position: fixed;
  bottom: 80px;
  right: 10px;
  width: 60px;
  height: 60px;
  z-index: 99999999;
  .icon{
    margin-top: 15px;
  }
}
</style>
