<template>
  <div ref="frame" class="canvasImage">
    <canvas
      class="canvas"
      ref="shadow"
      :width="getCanvasSize().width"
      :height="getCanvasSize().height"
      style="visibility:hidden"
    ></canvas>
    <canvas
      class="canvas"
      ref="canvas"
      :width="getCanvasSize().width"
      :height="getCanvasSize().height"
    ></canvas>
  </div>
</template>
<script>
import * as _ from "lodash";
import { setImage } from "../../util/canvasUtil";
import { Animate } from "../../effects/Effects";

const colors = [
  "ffff00",
  "ff0000",
  "0000ff",
  "ff00ff",
  "00ffff",
  "000000",
  "ff8800"
];
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
    setTimeout(() => {
      const col = colors[Math.floor(Math.random() * colors.length)];
      this.animate().Color(col);
    }, 100);
  },

  methods: {
    init() {
      let timer;
      window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.setImage();
          setTimeout(() => {
            const col = colors[Math.floor(Math.random() * colors.length)];
            this.animate().Color(col);
          });
        }, 500);
      });
      // document.addEventListener("scroll", () => {
      //   clearTimeout(timer);
      //   timer = setTimeout(() => {
      //     this.setImage();
      //     setTimeout(() => {
      //       const col = colors[Math.floor(Math.random() * colors.length)];
      //       this.animate().Color(col);
      //     });
      //   }, 500);
      // });
    },

    getCanvasSize() {
      return {
        width: this.canvasData.width + "px",
        height: this.canvasData.height + "px"
      };
    },

    async resize() {
      this.imageData = await setImage(
        this.$refs.frame,
        this.$refs.canvas,
        this.src
      );
      //canvasのサイズを変更
      let size = _.cloneDeep(this.canvasData);
      size.width = this.imageData.fit.width;
      size.height = this.imageData.fit.height;
      this.canvasData = size;
    },

    async setImage() {
      this.imageData = await setImage(
        this.$refs.frame,
        this.$refs.canvas,
        this.src
      );

      //canvasのサイズを変更
      let size = _.cloneDeep(this.canvasData);
      size.width = this.imageData.fit.width;
      size.height = this.imageData.fit.height;
      this.canvasData = size;

      this.$nextTick(() => {
        //main
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

        //shadow
        const src = this.$refs.shadow.getContext("2d");
        src.clearRect(0, 0, this.$refs.shadow.width, this.$refs.shadow.height);
        src.save();
        src.drawImage(
          this.imageData.img,
          0,
          0,
          this.imageData.fit.width,
          this.imageData.fit.height
        );
        src.restore();
      });
    },

    animate() {
      const ctx = this.$refs.canvas.getContext("2d");
      const src = this.$refs.shadow.getContext("2d");
      const rect = this.$refs.canvas.getBoundingClientRect();
      const Grayscale = () => {
        Animate(ctx, rect)
          .HorizontalDraw(20, 10)
          .Grayscale(src);
      };
      const Color = col => {
        Animate(ctx, rect)
          .HorizontalDraw(200, 1)
          .Color(src, col);
      };
      return {
        Grayscale,
        Color
      };
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
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>