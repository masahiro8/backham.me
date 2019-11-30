<template>
  <div id="app">
    <ContextConsumer :contextKey="['BGCOLOR']" v-slot="{ context }">
      <BackgroundImage :color="bgcolor" />
    </ContextConsumer>
    <ContextConsumer :contextKey="['EFFECT']" v-slot="{ context }">
      <CanvasImage :src="img" @setCanvasRef="setCanvasRef" :effetc="context['EFFECT']" />
    </ContextConsumer>
  </div>
</template>

<script>
import CanvasImage from "./components/CanvasView/CanvasImage";
import BackgroundImage from "./components/CanvasView/BackgroundImage";
import ContextConsumer from "./context/Context";
import { scroller } from "./interection/scroll";
import { sequence } from "./sequence";

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
    BackgroundImage,
    ContextConsumer
  },
  mounted() {
    const _scroller = scroller;
    _scroller.setHeight(3000);
    this.$nextTick(() => {
      this.bgcolor = { r: 100, g: 0, b: 0 };
    });
  },
  methods: {
    setCanvasRef(ref) {
      //アニメーションシーケンス
      sequence(ref);
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
