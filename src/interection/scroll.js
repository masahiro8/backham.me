import * as _ from "lodash";
import { ContextStore } from "../context/Context";

const _scroller = () => {
  let callbacks = [];
  let _document = document.getElementsByTagName("body")[0];
  let height = _document.getBoundingClientRect().height;

  document.addEventListener("scroll", () => {
    // console.log("scrolling", document.scrollingElement.scrollTop);
    const top = document.scrollingElement.scrollTop;
    const params = { top };

    //contextで受け取り
    ContextStore.setContext("SCROLL", params);

    //コールバック
    _.map(callbacks, callback => {
      callback(params);
    });
  });

  const setHeight = n => {
    height += n;
    _document.style.height = height + "px";
  };

  const getScroll = callback => {
    callbacks.push(callback);
  };

  return {
    setHeight,
    getScroll
  };
};

export const scroller = _scroller();
