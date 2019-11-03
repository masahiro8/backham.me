<template>
  <div ref="frame" class="canvasImage">
    <canvas ref="canvas" :width="getCanvasSize().width" :height="getCanvasSize().height"></canvas>
  </div>
</template>
<script>
import * as _ from "lodash";
import { setImage } from "../../util/canvasLoader";
export default {
  data: () => {
    return {
      imageData: null,
      canvasData: { width: 300, height: 300 }
    };
  },
  props: {
    src: String
  },
  mounted() {
    this.init();
    this.setImage();
  },
  methods: {
    init() {
      window.addEventListener("resize", () => {
        console.log("resize window");
        this.setImage();
      });
    },

    getCanvasSize() {
      return {
        width: this.canvasData.width + "px",
        height: this.canvasData.height + "px"
      };
    },

    async setImage() {
      this.imageData = await setImage(
        this.$refs.frame,
        this.$refs.canvas,
        this.src
      );

      //canvasのサイズを変更
      // console.log("image", this.imageData);
      let size = _.cloneDeep(this.canvasData);
      size.width = this.imageData.fit.width;
      size.height = this.imageData.fit.height;
      this.canvasData = size;
      this.$nextTick(() => {
        const ctx = this.$refs.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        ctx.save();
        ctx.drawImage(
          this.imageData.img,
          0,
          0,
          this.imageData.fit.width,
          this.imageData.fit.height
        );
        ctx.restore();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.canvasImage {
  position: relative;
  width: 100%;
  height: 100%;
  canvas {
  }
}
</style>