<template>
  <div id="bg" ref="bg" :style="getStyle" />
</template>
<script>
import { diff } from "../../util/diff";

export default {
  data: () => {
    return {
      style: "",
      canvasData: {}
    };
  },
  props: {
    color: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {},
  watch: {
    color: {
      immediate: true,
      handler(newValue, oldValue) {
        if (!diff(newValue, oldValue)) {
          this.setBackgroundColor(newValue);
          this.getSize();
        }
      }
    }
  },
  methods: {
    setBackgroundColor(value) {
      if (this.$refs.bg) {
        console.log(
          "bg ",
          `rgb(${value.r},${value.g},${value.b})`,
          this.$refs.bg
        );
        const rect = this.$refs.bg.getBoundingClientRect();
        this.style = `background-color:rgb(${value.r},${value.g},${value.b});`;
      }
    },
    getSize() {
      if (this.$refs.bg) {
        const rect = this.$refs.bg.getBoundingClientRect();
        this.canvasData = {
          width: rect.width,
          height: rect.height
        };
      }
    }
  },
  computed: {
    getStyle() {
      return this.style;
    },
    getCanvasWidth() {
      return this.canvasData.width + "px";
    },
    getCanvasHeight() {
      return this.canvasData.height + "px";
    }
  }
};
</script>
<style lang="scss">
#bg {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
</style>