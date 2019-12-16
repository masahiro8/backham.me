<template>
  <div id="app">
    <ContextConsumer :contextKey="['BGCOLOR']" v-slot="{ context }">
      <BackgroundImage :color="bgcolor" />
    </ContextConsumer>
    <CanvasEffectView :src="img" @setCanvasRef="setCanvasRef" />
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
    align: "left",
    letterSpacing: "4px"
  }
};

const txts = [
  {
    id: 1,
    from: 100,
    to: 1000,
    text: [
      ({ top, value, diff }) => {
        return `${value}`;
      }
    ],
    style: { ...STYLES.default, fontSize: 16 },
    moveTo: {
      x: 32,
      y: 32
    },
    moveFrom: {
      x: 32,
      y: 32
    },
    eff: ["SkewedRight"]
  },
  {
    id: 11,
    from: 1000,
    to: 1500,
    text: [
      ({ top, value, diff }) => {
        return `${value}`;
      }
    ],
    style: { ...STYLES.default, fontSize: 16 },
    moveTo: {
      x: 32,
      y: 32
    },
    moveFrom: {
      x: 32,
      y: 32
    },
    eff: ["SkewedRightReverse"]
  },
  {
    id: 1001,
    from: 100,
    to: 1000,
    text: [
      ({ top, value, diff }) => {
        const now = new Date();
        return `${now.getUTCDate()}.${now.getUTCMonth()}.${now.getUTCFullYear()}.${now.getUTCHours()}.${now.getUTCMinutes()}.${now.getUTCSeconds()}.${now.getUTCMilliseconds()}`;
      }
    ],
    style: { ...STYLES.default, fontSize: 10 },
    moveTo: {
      x: 32,
      y: 64
    },
    moveFrom: {
      x: 32,
      y: 64
    },
    eff: ["SkewedRight"]
  },
  {
    id: 1002,
    from: 1000,
    to: 1200,
    text: [
      ({ top, value, diff }) => {
        const now = new Date();
        return `${now.getUTCDate()}.${now.getUTCMonth()}.${now.getUTCFullYear()}.${now.getUTCHours()}.${now.getUTCMinutes()}.${now.getUTCSeconds()}.${now.getUTCMilliseconds()}`;
      }
    ],
    style: { ...STYLES.default, fontSize: 10 },
    moveTo: {
      x: 32,
      y: 32
    },
    moveFrom: {
      x: 32,
      y: 64
    },
    eff: []
  },
  {
    id: 1003,
    from: 1200,
    to: 3000,
    text: [
      ({ top, value, diff }) => {
        const now = new Date();
        return `${now.getUTCDate()}.${now.getUTCMonth()}.${now.getUTCFullYear()}.${now.getUTCHours()}.${now.getUTCMinutes()}.${now.getUTCSeconds()}.${now.getUTCMilliseconds()}`;
      }
    ],
    style: { ...STYLES.default, fontSize: 10 },
    moveTo: {
      x: 32,
      y: 32
    },
    moveFrom: {
      x: 32,
      y: 32
    },
    eff: ["SkewedRightReverse"]
  },
  {
    id: 1004,
    from: 3000,
    to: 3400,
    text: [
      ({ top, value, diff }) => {
        const now = new Date();
        return `${now.getUTCDate()}.${now.getUTCMonth()}.${now.getUTCFullYear()}.${now.getUTCHours()}.${now.getUTCMinutes()}.${now.getUTCSeconds()}.${now.getUTCMilliseconds()}`;
      }
    ],
    style: { ...STYLES.default, fontSize: 10 },
    moveTo: {
      x: 32,
      y: 32
    },
    moveFrom: {
      x: 32,
      y: 32
    },
    eff: ["SkewedRightReverse"]
  },
  {
    id: 2,
    from: 100,
    to: 1300,
    text: ["PURPOSE", "PURPOSE - purpose"],
    style: STYLES.default,
    moveTo: {
      x: 200,
      y: 400
    },
    moveFrom: {
      x: 200,
      y: 700
    }
  },
  {
    id: 3,
    from: 1300,
    to: 1800,
    text: ["PURPOSE"],
    style: STYLES.default,
    moveTo: {
      x: 200,
      y: 350
    },
    moveFrom: {
      x: 200,
      y: 400
    }
  },
  {
    id: 4,
    from: 1800,
    to: 2200,
    text: ["PURPOSE", "PURPOSE - purpose"],
    style: STYLES.default,
    moveTo: {
      x: 200,
      y: -400
    },
    moveFrom: {
      x: 200,
      y: 350
    }
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
    CanvasEffectView,
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
