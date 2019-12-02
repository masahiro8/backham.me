<template>
  <div ref="frame" class="canvasImage">
    <canvas class="canvas" ref="canvas" :width="getCanvasWidth" :height="getCanvasHeight"></canvas>
  </div>
</template>
<script>
import * as _ from "lodash";
import { getImage } from "../../util/canvasUtil";

const config = {
  rotate: 0,
  tile: { x: 3, y: 3 }
};

export default {
  data: () => {
    return {
      imageData: null,
      canvasData: { width: 300, height: 300 }
    };
  },

  props: {
    src: String,
    effect: Object
  },

  async mounted() {
    this.init();
    await this.resizeCanvas();
    // this.$emit("setCanvasRef", this.$refs.canvas);
    this.setTile(config.tile, () => {
      this.$emit("setCanvasRef", this.$refs.canvas);
      // this.$refs.canvasImage.style.transform = "scale(1.2)";
    });
  },

  methods: {
    init() {
      let timer;
      window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {}, 300);
      });
    },

    resizeCanvas() {
      return new Promise(async resolved => {
        this.imageData = await getImage(this.$refs.frame, this.src);

        //canvasのサイズを変更
        let size = _.cloneDeep(this.canvasData);
        size.width = this.imageData.fit.width;
        size.height = this.imageData.fit.height;
        this.canvasData = size;

        resolved();
      });
    },

    async setTile(xy, callback) {
      this.imageData = await getImage(this.$refs.frame, this.src);

      this.$nextTick(() => {
        const _width = this.$refs.canvas.width / xy.x;
        const _height = this.$refs.canvas.height / xy.y;

        //main
        const ctx = this.$refs.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        if (config.rotate) {
          ctx.rotate((config.rotate * Math.PI) / 180);
          ctx.translate(
            this.$refs.canvas.width / 7,
            -this.$refs.canvas.height / 2
          );
        }
        // ctx.translate(-200 / 2, -200 / 2);
        ctx.save();
        for (let y = 0; y < xy.y; y++) {
          for (let x = 0; x < xy.x; x++) {
            ctx.drawImage(
              this.imageData.img,
              _width * x,
              _height * y,
              _width,
              _height
            );
          }
        }
        ctx.restore();
        callback();
      });
    }
  },

  computed: {
    getCanvasWidth() {
      return this.canvasData.width + "px";
    },
    getCanvasHeight() {
      return this.canvasData.height + "px";
    }
  }
};
</script>
<style lang="scss" scoped>
.canvasImage {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  canvas {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>