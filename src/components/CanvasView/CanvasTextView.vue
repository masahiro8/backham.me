<template>
  <div ref="frame" class="canvasText">
    <CanvasTextLayer
      v-for="(txt, index) in txts"
      :key="index"
      :txt="txt"
      :canvasData="canvasData"
      @setCanvasRef="setCanvasRef"
    />
  </div>
</template>
<script>
import * as _ from "lodash";
import { pixelRatio } from "@/config";
import { scroller } from "../../interection/scroll";
import { CanvasText } from "../AnimationController/CanvasText";
import CanvasTextLayer from "./CanvasTextLayer";

export default {
  data: () => {
    return {
      canvasRef: [],
      srcRef: [],
      canvasData: { width: 0, height: 0 }
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
    setCanvasRef({ id, ref, srcRef }) {
      // console.log("CanvasText", ref, srcRef);
      if (id && ref && srcRef) {
        this.canvasRef[id] = ref;
        this.srcRef[id] = srcRef;
        CanvasText(
          this.canvasRef[id],
          this.srcRef[id],
          _.filter(this.txts, txt => {
            return txt.id === id;
          }),
          this.canvasData.width
        );
      }
    },
    resizeCanvas() {
      return new Promise(async resolved => {
        //canvasのサイズを変更
        let size = _.cloneDeep(this.canvasData);
        size.width = window.innerWidth * pixelRatio;
        size.height = window.innerHeight * pixelRatio;
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
