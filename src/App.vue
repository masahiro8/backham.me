<template>
  <div id="app">
    <ContextConsumer :contextKey="['BGCOLOR']" v-slot="{ context }">
      <BackgroundImage :color="bgcolor" />
    </ContextConsumer>
    <!-- <CanvasEffectView :src="img" @setCanvasRef="setCanvasRef" /> -->
    <CanvasTextView :txts="txts" :imgs="imgs" />
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
  return _.random(9999999999) + _.uniq();
};

const CONTENTS_TYPE = {
  TEXT: "text",
  IMAGE: "image"
};

const CONTENTS = {
  OPEN1: { type: CONTENTS_TYPE.TEXT, value: ["VR/AR"], style: STYLES.DEFAULT },
  OPEN2: {
    type: CONTENTS_TYPE.TEXT,
    value: ["Design &", "Implement"],
    style: STYLES.DEFAULT
  },
  OPEN3: {
    type: CONTENTS_TYPE.TEXT,
    value: ["BACKHAM"],
    style: _.assign(STYLES.DEFAULT, { fontSize: 48 })
  }
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

const imgs = [
  {
    id: getRandomId(),
    from: 3500,
    to: 4000,
    img: "/images/vrmonkey_tran.png",
    rect: { x: "auto", y: "auto", width: 300, height: "auto" },
    moveTo: { x: 0, y: getCenterY() - 50 },
    moveFrom: MOVES.CENTER.FADEIN.FROM,
    eff: ["SkewedRight"]
  },
  {
    id: getRandomId(),
    from: 4000,
    to: 5000,
    img: "/images/vrmonkey_tran.png",
    rect: { x: "auto", y: "auto", width: 300, height: "auto" },
    moveTo: { x: 0, y: getCenterY() - 80 },
    moveFrom: { x: 0, y: getCenterY() - 50 },
    eff: ["Stay"]
  },
  {
    id: getRandomId(),
    from: 5000,
    to: 5500,
    img: "/images/vrmonkey_tran.png",
    rect: { x: "auto", y: "auto", width: 300, height: "auto" },
    moveTo: { x: 0, y: getCenterY() - 200 },
    moveFrom: { x: 0, y: getCenterY() - 80 },
    eff: ["SkewedRightReverse"]
  }
];

const txts = [
  {
    id: getRandomId(),
    from: 10,
    to: 500,
    text: CONTENTS.OPEN1.value,
    style: CONTENTS.OPEN1.style,
    moveTo: MOVES.CENTER.FADEIN.TO,
    moveFrom: MOVES.CENTER.FADEIN.FROM,
    eff: ["SkewedRight"]
  },
  {
    id: getRandomId(),
    from: 500,
    to: 1000,
    text: CONTENTS.OPEN1.value,
    style: CONTENTS.OPEN1.style,
    moveTo: MOVES.CENTER.STAY.TO,
    moveFrom: MOVES.CENTER.STAY.FROM,
    eff: ["Stay"]
  },
  {
    id: getRandomId(),
    from: 1000,
    to: 1500,
    text: CONTENTS.OPEN1.value,
    style: CONTENTS.OPEN1.style,
    moveTo: MOVES.CENTER.FADEOUT.TO,
    moveFrom: MOVES.CENTER.FADEOUT.FROM,
    eff: ["SkewedRightReverse"]
  },
  {
    id: getRandomId(),
    from: 700,
    to: 2500,
    text: CONTENTS.OPEN2.value,
    style: CONTENTS.OPEN2.style,
    moveTo: MOVES.CENTER.FADEIN.TO,
    moveFrom: MOVES.CENTER.FADEIN.FROM,
    eff: ["SkewedRight"]
  },
  {
    id: getRandomId(),
    from: 2500,
    to: 3500,
    text: CONTENTS.OPEN2.value,
    style: CONTENTS.OPEN2.style,
    moveTo: MOVES.CENTER.STAY.TO,
    moveFrom: MOVES.CENTER.STAY.FROM,
    eff: ["Stay"]
  },
  {
    id: getRandomId(),
    from: 3500,
    to: 5000,
    text: CONTENTS.OPEN2.value,
    style: CONTENTS.OPEN2.style,
    moveTo: MOVES.CENTER.FADEOUT.TO,
    moveFrom: MOVES.CENTER.FADEOUT.FROM,
    eff: ["SkewedRightReverse"]
  },
  {
    id: getRandomId(),
    from: 5500,
    to: 6000,
    text: CONTENTS.OPEN3.value,
    style: CONTENTS.OPEN3.style,
    moveTo: MOVES.CENTER.FADEIN.TO,
    moveFrom: MOVES.CENTER.FADEIN.FROM,
    eff: ["SkewedRight"]
  },
  {
    id: getRandomId(),
    from: 6000,
    to: 7000,
    text: CONTENTS.OPEN3.value,
    style: CONTENTS.OPEN3.style,
    moveTo: MOVES.CENTER.STAY.TO,
    moveFrom: MOVES.CENTER.STAY.FROM,
    eff: ["Stay"]
  },
  {
    id: getRandomId(),
    from: 7000,
    to: 8500,
    text: CONTENTS.OPEN3.value,
    style: CONTENTS.OPEN3.style,
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
      txts: txts,
      imgs: imgs
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
