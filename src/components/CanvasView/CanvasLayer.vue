<template>
  <div>
    <!-- 描画する元のキャンバス -->
    <canvas
      class="canvas src"
      ref="src"
      :width="canvasData.width + 'px'"
      :height="canvasData.height + 'px'"
    />
    <!-- エフェクト描画用のキャンバス -->
    <canvas
      class="canvas"
      ref="canvas"
      :width="canvasData.width + 'px'"
      :height="canvasData.height + 'px'"
    />
  </div>
</template>
<script>
import { pixelRatio } from "@/config";
export default {
  data: () => {
    return {
      refsFlag: false //ref登録済み
    };
  },
  props: {
    canvasData: {
      type: Object,
      default: () => {
        return { width: 0, height: 0 };
      }
    },
    item: {
      type: Object
    }
  },
  mounted() {},
  methods: {
    init() {},
    setCanvasRef() {
      if (
        this.item.id &&
        this.$refs.canvas &&
        this.$refs.src &&
        !this.refsFlag
      ) {
        this.$emit("setCanvasRef", {
          id: this.item.id,
          ref: this.$refs.canvas,
          srcRef: this.$refs.src
        });
        this.refsFlag = true;
      }
    }
  },
  watch: {
    item: {
      immediate: true,
      handler(newValue) {
        this.$nextTick(() => {
          this.setCanvasRef();
        });
      }
    },
    canvasData: {
      immediate: true,
      handler(newValue) {
        this.$nextTick(() => {
          this.$refs.canvas.style.width = `${newValue.width / pixelRatio}px`;
          this.$refs.canvas.style.height = `${newValue.height / pixelRatio}px`;
          this.$refs.src.style.width = `${newValue.width / pixelRatio}px`;
          this.$refs.src.style.height = `${newValue.height / pixelRatio}px`;
        });
      }
    },
    $refs: {
      immediate: true,
      handler(newValue) {
        this.$nextTick(() => {
          this.setCanvasRef();
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
canvas {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  mix-blend-mode: difference;
  visibility: visible;
}
.src {
  visibility: hidden;
}
</style>
