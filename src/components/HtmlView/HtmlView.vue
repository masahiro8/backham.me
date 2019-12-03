<template>
  <div id="htmlView">
    <ContextConsumer :contextKey="['HTML_VIEW']" v-slot="{ context }">
      <div v-for="(item,index) in getItems(context['HTML_VIEW'])" :key="index">
        <component :is="getComponent(item.view)" :value="item"></component>
      </div>
    </ContextConsumer>
  </div>
</template>
<script>
import ContextConsumer from "../../context/Context";
import { HTML_VIEW_TYPE } from "../../HtmlSeq";
import TextView from "../../components/HtmlView/TextView";
import ImgView from "../../components/HtmlView/ImgView";

export default {
  data: () => {
    return {};
  },
  components: {
    ContextConsumer,
    TextView,
    ImgView
  },
  methods: {
    getItems(context) {
      return context ? context : [];
    },
    getComponent(type) {
      if (type === HTML_VIEW_TYPE.TEXT) {
        return TextView;
      } else if (type === HTML_VIEW_TYPE.IMG) {
        return ImgView;
      }
      return TextView;
    }
  }
};
</script>