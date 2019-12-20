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
import * as _ from "lodash";
import CanvasEffectView from "./components/CanvasView/CanvasEffectView";
import CanvasTextView from "./components/CanvasView/CanvasTextView";
import HtmlView from "./components/HtmlView/HtmlView";
import BackgroundImage from "./components/CanvasView/BackgroundImage";
import ContextConsumer from "./context/Context";
import { scroller } from "./interection/scroll";
import { HtmlSeq } from "./HtmlSeq";

const STYLES = {
  DEFAULT: {
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

const getRandomId = () => {
  return _.random(9999999999);
};

const TEXTS = {
  OPEN1: ["VR/AR"],
  OPEN2: ["Design &", "Implement"],
  OPEN3: ["Play with", "yourself !"]
};

const MOVES = {
  CENTER: {
    FADEIN: {
      TO: { x: 0, y: getCenterY() + 10 },
      FROM: { x: 0, y: getCenterY() + 50 }
    },
    STAY: {
      TO: { x: 0, y: getCenterY() },
      FROM: { x: 0, y: getCenterY() + 10 }
    },
    FADEOUT: {
      TO: { x: 0, y: getCenterY() - 150 },
      FROM: { x: 0, y: getCenterY() }
    }
  }
};

const txts = [
  {
    id: getRandomId(),
    from: 10,
    to: 500,
    text: TEXTS.OPEN1,
    style: { ...STYLES.DEFAULT },
    moveTo: MOVES.CENTER.FADEIN.TO,
    moveFrom: MOVES.CENTER.FADEIN.FROM,
    eff: ["SkewedRight"]
  },
  {
    id: getRandomId(),
    from: 500,
    to: 1000,
    text: TEXTS.OPEN1,
    style: { ...STYLES.DEFAULT },
    moveTo: MOVES.CENTER.STAY.TO,
    moveFrom: MOVES.CENTER.STAY.FROM,
    eff: ["Stay"]
  },
  {
    id: getRandomId(),
    from: 1000,
    to: 1500,
    text: TEXTS.OPEN1,
    style: { ...STYLES.DEFAULT },
    moveTo: MOVES.CENTER.FADEOUT.TO,
    moveFrom: MOVES.CENTER.FADEOUT.FROM,
    eff: ["SkewedRightReverse"]
  },
  {
    id: getRandomId(),
    from: 700,
    to: 2500,
    text: TEXTS.OPEN2,
    style: STYLES.DEFAULT,
    moveTo: MOVES.CENTER.FADEIN.TO,
    moveFrom: MOVES.CENTER.FADEIN.FROM,
    eff: ["SkewedRight"]
  },
  {
    id: getRandomId(),
    from: 2500,
    to: 3500,
    text: TEXTS.OPEN2,
    style: STYLES.DEFAULT,
    moveTo: MOVES.CENTER.STAY.TO,
    moveFrom: MOVES.CENTER.STAY.FROM,
    eff: ["Stay"]
  },
  {
    id: getRandomId(),
    from: 3500,
    to: 5000,
    text: TEXTS.OPEN2,
    style: STYLES.DEFAULT,
    moveTo: MOVES.CENTER.FADEOUT.TO,
    moveFrom: MOVES.CENTER.FADEOUT.FROM,
    eff: ["SkewedRightReverse"]
  },
  {
    id: getRandomId(),
    from: 4000,
    to: 5500,
    text: TEXTS.OPEN3,
    style: STYLES.DEFAULT,
    moveTo: MOVES.CENTER.FADEIN.TO,
    moveFrom: MOVES.CENTER.FADEIN.FROM,
    eff: ["SkewedRight"]
  },
  {
    id: getRandomId(),
    from: 5500,
    to: 6000,
    text: TEXTS.OPEN3,
    style: STYLES.DEFAULT,
    moveTo: MOVES.CENTER.STAY.TO,
    moveFrom: MOVES.CENTER.STAY.FROM,
    eff: ["Stay"]
  },
  {
    id: getRandomId(),
    from: 6000,
    to: 7500,
    text: TEXTS.OPEN3,
    style: STYLES.DEFAULT,
    moveTo: MOVES.CENTER.FADEOUT.TO,
    moveFrom: MOVES.CENTER.FADEOUT.FROM,
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
