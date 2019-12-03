<template>
  <div class="textView">
    <div :style="style">{{text}}</div>
  </div>
</template>
<script>
import * as _ from "lodash";
export default {
  data: () => {
    return {
      style: "",
      text: ""
    };
  },
  props: {
    value: {
      type: Object
    }
  },
  methods: {
    stringToCss(p) {
      return p.replace(/([A-Z])/g, s => {
        return "-" + s.charAt(0).toLowerCase();
      });
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        const styles = _.map(newValue.style, (value, key) => {
          return `${this.stringToCss(key)}:${value}`;
        });
        this.style = styles.join(";");
        this.text = newValue.text ? newValue.text : `ok `;
      }
    }
  }
};
</script>
<style lang="scss">
.textView {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
</style>