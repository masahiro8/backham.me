<template>
  <div>
    Child:
    <div v-for="val in numberList" :key="val">{{val}}</div>
  </div>
</template>
<script>
/**
 * Contextを受け取るコンポーネント
 */
export default {
  props: {
    numberList: {
      type: Array,
      default: {}
    }
  },
  watch: {
    numberList: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        console.log("Context - list", newValue);
      }
    }
  }
};
</script>
<style></style>