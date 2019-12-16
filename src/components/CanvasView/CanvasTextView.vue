<template>
  <div ref="frame" class="canvasText">
    <CanvasTextLayer
      v-for="(txt,index) in txts"
      :key="index"
      :txt="txt"
      :canvasData="canvasData"
      @setCanvasRef="setCanvasRef"
    />
  </div>
</template>
<script>
import * as _ from "lodash";
import { scroller } from "../../interection/scroll";
import { CanvasText } from "../AnimationController/CanvasText";
import CanvasTextLayer from "./CanvasTextLayer";

export default {
  data: () => {
    return {
      canvasRef: [],
      canvasData: { width: 300, height: 300 }
    };
  },
  components: {
    CanvasTextLayer
  },
  async mounted() {
    this.init();
    await this.resizeCanvas();
  },
  props: {
    txts: {
      type: Array
    }
  },
  methods: {
    init() {
      let timer;
      window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {}, 300);
      });
    },
    setCanvasRef({ id, ref }) {
      if (id && ref) {
        this.canvasRef[id] = ref;
        CanvasText(
          this.canvasRef[id],
          _.filter(this.txts, txt => {
            return txt.id === id;
          })
        );
      }
    },
    resizeCanvas() {
      return new Promise(async resolved => {
        //canvasのサイズを変更
        let size = _.cloneDeep(this.canvasData);
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        this.canvasData = size;
        resolved();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.canvasText {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>