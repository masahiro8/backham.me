<template>
  <div ref="frame" class="canvasText">
    <!-- 描画キャンバス -->
    <CanvasTextLayer
      v-for="txt in txts"
      :key="txt.id"
      :item="txt"
      :canvasData="canvasData"
      class="ref-text"
      @setCanvasRef="setCanvasRef"
    />
    <CanvasImageLayer
      v-for="img in imgs"
      :key="img.id"
      :item="img"
      :canvasData="canvasData"
      class="ref-image"
      @setCanvasRef="setCanvasImageRef"
    />
  </div>
</template>
<script>
import * as _ from "lodash";
import { pixelRatio } from "@/config";
import { scroller } from "../../interection/scroll";
import { CanvasText } from "../AnimationController/CanvasText";
import { CanvasImage } from "../AnimationController/CanvasImage";
import CanvasTextLayer from "./CanvasLayer";
import CanvasImageLayer from "./CanvasLayer";

export default {
  data: () => {
    return {
      canvasRef: [],
      srcRef: [],
      canvasData: { width: 0, height: 0 }
    };
  },
  components: {
    CanvasTextLayer,
    CanvasImageLayer
  },
  async mounted() {
    this.init();
    await this.resizeCanvas();
  },
  props: {
    txts: {
      type: Array
    },
    imgs: {
      type: Array,
      default: () => {
        return [];
      }
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

        const txt = _.filter(this.txts, txt => {
          return txt.id === id;
        });

        // console.log("txt", id, txt);
        //キャンバスに文字を描画
        if (txt && txt.length) {
          CanvasText(
            this.canvasRef[id],
            this.srcRef[id],
            txt,
            this.canvasData.width
          );
        }
      }
    },
    setCanvasImageRef({ id, ref, srcRef }) {
      // console.log("CanvasText", ref, srcRef);
      if (id && ref && srcRef) {
        this.canvasRef[id] = ref;
        this.srcRef[id] = srcRef;

        const img = _.filter(this.imgs, img => {
          return img.id === id;
        });
        console.log("img", id, img);
        if (img && img.length) {
          CanvasImage(
            this.canvasRef[id],
            this.srcRef[id],
            img,
            this.canvasData.width
          );
        }
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
