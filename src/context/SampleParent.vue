<template>
  <div>
    Parent:
    <ContextConsumer :contextKey="'hogelist'">
      <template slot-scope="{context}">
        <Child :numberList="context" />
      </template>
    </ContextConsumer>
  </div>
</template>
<script>
/**
 * 入れ子にするための空のコンポーネント
 */
import ContextConsumer from "../context/Context";
import Child from "./SampleChild";
export default {
  components: {
    ContextConsumer,
    Child
  }
};
</script>
<style></style>