<template>
  <div id="app">
    <ContextConsumer :contextKey="['BGCOLOR']" v-slot="{ context }">
      <BackgroundImage :color="bgcolor" />
    </ContextConsumer>
    <CanvasImage :src="img" @setCanvasRef="setCanvasRef" />
    <HtmlView />
  </div>
</template>

<script>
import CanvasImage from "./components/CanvasView/CanvasImage";
import HtmlView from "./components/HtmlView/HtmlView";
import BackgroundImage from "./components/CanvasView/BackgroundImage";
import ContextConsumer from "./context/Context";
import { scroller } from "./interection/scroll";
import { CanvasSeq } from "./CanvasSeq";
import { HtmlSeq } from "./HtmlSeq";

export default {
  name: "app",
  data: () => {
    return {
      ref: null,
      bgcolor: {},
      img: require("@/assets/vrmonkey_tran.png")
    };
  },
  components: {
    CanvasImage,
    HtmlView,
    BackgroundImage,
    ContextConsumer
  },
  mounted() {
    const _scroller = scroller;
    _scroller.setHeight(10000);
    this.$nextTick(() => {
      this.bgcolor = { r: 255, g: 255, b: 255 };
    });
  },
  methods: {
    setCanvasRef(ref) {
      //アニメーションシーケンス
      CanvasSeq(ref);
      //html
      // HtmlSeq();
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
