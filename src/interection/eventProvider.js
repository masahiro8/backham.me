import * as _ from "lodash";
import { scroller } from "../interection/scroll";

export const eventProvider = (events, callback, scrollCallback) => {
  let prevValue = 0;
  //イベントを実行
  const delivereEvent = _param => {
    //イベントを検索
    const _events = _.filter(events, event => {
      return event.from <= _param.top && event.to > _param.top;
    });

    //イベントを受け取る
    _.map(_events, event => {
      if (event) {
        const value = _param.top - event.from;
        //登録イベントを実行
        const diff = prevValue - value;
        const param = { top: _param.top, value: value, diff };
        // console.log("scroll =", _param.top, value, diff);
        callback(event, param);
        prevValue = value;
      }
    });
  };

  //初期値
  delivereEvent({ top: 1 });

  //スクロールを受け取る
  scroller.getScroll(_param => {
    if (scrollCallback) {
      scrollCallback();
    }
    delivereEvent(_param);
  });
};
