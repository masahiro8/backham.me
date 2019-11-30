<template>
  <div>
    <slot :context="data"></slot>
  </div>
</template>
<script>
import * as _ from "lodash";

const _ContextStore = () => {
  let callbacks = [];
  let data = {};

  const subscribe = () => {
    _.each(callbacks, callback => {
      callback(data);
    });
  };

  const getContext = callback => {
    callbacks.push(callback);
    if (Object.keys(data).length > 0) {
      subscribe();
    }
  };

  const setContext = (keyName, params) => {
    data[keyName] = params;
    subscribe();
  };

  return {
    subscribe,
    getContext,
    setContext
  };
};
export const ContextStore = _ContextStore();

export default {
  data: () => {
    return {
      data: {},
      get: ContextStore.getContext.bind(this)
    };
  },
  props: {
    contextKey: {
      type: Array
    }
  },
  watch: {
    contextKey: {
      immediate: true,
      handler(newValue) {
        _.map(newValue, key => {
          this.data = { [key]: null };
        });
      }
    }
  },
  mounted() {
    ContextStore.getContext(value => {
      _.map(this.contextKey, key => {
        if (_.has(value, key)) {
          let _data = { ...this.data };
          // _data[key] = _.cloneDeep(value[key]);
          _data[key] = { ...value[key] };
          this.data = _data;
        }
      });
    });
  }
};
</script>
<style lang="scss">
</style>
