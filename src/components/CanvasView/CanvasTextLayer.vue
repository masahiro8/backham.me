<template>
  <div>
    <canvas
      class="canvas src"
      ref="src"
      :width="canvasData.width + 'px'"
      :height="canvasData.height+'px'"
    />
    <canvas
      class="canvas"
      ref="canvas"
      :width="canvasData.width + 'px'"
      :height="canvasData.height+'px'"
    />
  </div>
</template>
<script>
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
        return { width: 300, height: 300 };
      }
    },
    txt: {
      type: Object
    }
  },
  mounted() {},
  methods: {
    init() {},
    setCanvasRef() {
      if (this.txt.id && this.$refs.canvas && !this.refsFlag) {
        this.$emit("setCanvasRef", { id: this.txt.id, ref: this.$refs.canvas });
        this.refsFlag = true;
      }
    }
  },
  watch: {
    txt: {
      immediate: true,
      handler(newValue) {
        this.$nextTick(() => {
          this.setCanvasRef();
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
}
.src {
  visibility: hidden;
}
</style>