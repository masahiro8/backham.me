<template>
  <div id="app">
    <ContextConsumer :contextKey="['BGCOLOR']" v-slot="{ context }">
      <BackgroundImage :color="bgcolor" />
    </ContextConsumer>
    <!-- <CanvasEffectView :src="img" @setCanvasRef="setCanvasRef" /> -->
    <CanvasTextView :txts="txts" />
    <HtmlView />
  </div>
</template>
<script>
import CanvasEffectView from "./components/CanvasView/CanvasEffectView";
import CanvasTextView from "./components/CanvasView/CanvasTextView";
import HtmlView from "./components/HtmlView/HtmlView";
import BackgroundImage from "./components/CanvasView/BackgroundImage";
import ContextConsumer from "./context/Context";
import { scroller } from "./interection/scroll";
import { HtmlSeq } from "./HtmlSeq";

const STYLES = {
  default: {
    fontFamily: "robot",
    fontSize: 48,
    color: "black",
    align: "center",
    letterSpacing: "4px"
  }
};

const getNowTime = () => {
  const now = new Date();
  return `${now.getUTCDate()}.${now.getUTCMonth()}.${now.getUTCFullYear()}.${now.getUTCHours()}.${now.getUTCMinutes()}.${now.getUTCSeconds()}.${now.getUTCMilliseconds()}`;
};

const getCenterY = () => {
  return window.innerHeight / 2 - 23;
};

const txts = [
  {
    id: 1001,
    from: 10,
    to: 500,
    text: ["VR/AR"],
    style: { ...STYLES.default },
    moveTo: {
      x: 0,
      y: getCenterY() + 10
    },
    moveFrom: {
      x: 0,
      y: getCenterY() + 50
    },
    eff: ["SkewedRight"]
  },
  {
    id: 1003,
    from: 500,
    to: 1000,
    text: ["VR/AR"],
    style: { ...STYLES.default },
    moveTo: {
      x: 0,
      y: getCenterY()
    },
    moveFrom: {
      x: 0,
      y: getCenterY() + 10
    },
    eff: []
  },
  {
    id: 1004,
    from: 1000,
    to: 1500,
    text: ["VR/AR"],
    style: { ...STYLES.default },
    moveTo: {
      x: 0,
      y: getCenterY() - 150
    },
    moveFrom: {
      x: 0,
      y: getCenterY()
    },
    eff: ["SkewedRightReverse"]
  },
  {
    id: 2,
    from: 2000,
    to: 3500,
    text: ["BACKHAM"],
    style: STYLES.default,
    moveTo: {
      x: 0,
      y: getCenterY() + 10
    },
    moveFrom: {
      x: 0,
      y: getCenterY() + 50
    },
    eff: ["SkewedRight"]
  },
  {
    id: 3,
    from: 3500,
    to: 4500,
    text: ["BACKHAM"],
    style: STYLES.default,
    moveTo: {
      x: 0,
      y: getCenterY()
    },
    moveFrom: {
      x: 0,
      y: getCenterY() + 10
    },
    eff: []
  },
  {
    id: 4,
    from: 4500,
    to: 6000,
    text: ["BACKHAM"],
    style: STYLES.default,
    moveTo: {
      x: 0,
      y: getCenterY() - 150
    },
    moveFrom: {
      x: 0,
      y: getCenterY()
    },
    eff: ["SkewedRightReverse"]
  }
];

export default {
  name: "app",
  data: () => {
    return {
      ref: null,
      bgcolor: {},
      img: require("@/assets/vrmonkey_tran.png"),
      txts: txts
    };
  },
  components: {
    // CanvasEffectView,
    CanvasTextView,
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
      //html
      HtmlSeq();
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow: scroll;
  margin: 0;
  padding: 0;
}

#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>
