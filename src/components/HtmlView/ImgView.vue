<template>
  <div class="imgView">
    <img :src="src" />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      src: ""
    };
  },
  props: {
    value: {
      type: Object
    }
  }
};
</script>