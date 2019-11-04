<template>
  <div id="app">
    <MainView>
      <CanvasImage :src="img" />
    </MainView>
  </div>
</template>

<script>
import MainView from "./components/MainView/MainView";
import CanvasImage from "./components/CanvasView/CanvasImage";

export default {
  name: "app",
  data: () => {
    return {
      img: require("@/assets/vrmonkey_tran.png")
    };
  },
  components: {
    MainView,
    CanvasImage
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
}
</style>
