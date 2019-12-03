<template>
  <div ref="randomtext">{{rtext}}</div>
</template>
<script>
import { Randoms } from "./Randoms";
import { watchScroll } from "../../util/watchScroll";
import { OPTIONS } from "./constants";

const dummy = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default {
  data: () => {
    return {
      srctext: "",
      rtext: "",
      firstFlag: false,
      options: { speed: OPTIONS.INTERVAL_SPEED, random: OPTIONS.RANDOM_SPEED }
    };
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  watch: {
    text: {
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.srctext = newValue;
          if (this.firstFlag) {
            this.firstFlag = true;
            this.setRandomText();
          }
        }
      }
    }
  },
  methods: {
    async setRandomText() {
      //何かしらの原因でpromiseが返らなかった場合にタイマーで変更
      setTimeout(() => {
        this.rtext = this.srctext;
      }, OPTIONS.INTERVAL_SPEED * this.srctext.length);
      const r = Randoms(this.srctext, dummy, this.options);
      r.setCallback(output => {
        this.rtext = output;
      });
      await r.init();
      this.rtext = this.srctext;
    },
    watchScroll() {
      //スクロールを監視
      watchScroll(this.$refs.randomtext).init(value => {
        if (value < -100 && !this.firstFlag) {
          this.firstFlag = true;
          this.setRandomText();
        }
      });
    }
  },
  mounted() {
    //スクロールを監視
    this.watchScroll();
  }
};
</script>