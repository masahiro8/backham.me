<template>
  <div ref="frame" class="canvasImage">
    <canvas class="canvas" ref="canvas" :width="getCanvasWidth" :height="getCanvasHeight"></canvas>
  </div>
</template>
<script>
import * as _ from "lodash";
import { CanvasEffect } from "../AnimationController/CanvasEffect";
import { getImage } from "../../util/canvasUtil";
import { gcd } from "../../util/gcd";

const config = {
  rotate: 0
};

export default {
  data: () => {
    return {
      imageData: null,
      canvasData: { width: 300, height: 300 },
      edge: 300
    };
  },

  props: {
    src: String
  },

  async mounted() {
    this.init();
    await this.resizeCanvas();
    this.setTile(300, () => {
      CanvasEffect(this.$refs.canvas);
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
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        this.canvasData = size;

        resolved();
      });
    },

    async setTile(edge, callback) {
      this.imageData = await getImage(this.$refs.frame, this.src);

      this.$nextTick(() => {
        const _width = edge;
        const _height = edge;

        const _left = this.$refs.canvas.width / 2 - _width / 2;
        const _top = this.$refs.canvas.height / 2 - _height / 2;

        //main
        const ctx = this.$refs.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        ctx.save();
        ctx.drawImage(this.imageData.img, _left, _top, _width, _height);
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