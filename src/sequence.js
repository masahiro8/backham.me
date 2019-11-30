import * as _ from "lodash";
import { scroller } from "./interection/scroll";
import { colorNoise } from "./components/Effecter/Effects/ColorNoise";
import { setStyle } from "./components/Effecter/Effects/Style";

const scale = Math.random(1) + 1;
/**
 * ここにスクロールイベントを登録していく
 */
const events = [
  //ノイズスクロール
  {
    from: 100,
    to: 500,
    effect: ({ refs, top, value }) => {
      colorNoise(refs.ctx, refs.ctx, refs.rect, 128).scroll({
        value,
        from: 100,
        to: 500
      });
    }
  },
  //ノイズ
  {
    from: 500,
    to: 1000,
    effect: ({ refs, top, value }) => {
      colorNoise(refs.ctx, refs.ctx, refs.rect, 128).loop({
        value,
        from: 500,
        to: 1000
      });
    }
  },
  {
    from: 200,
    to: 1200,
    effect: ({ refs, top, value }) => {
      setStyle({
        elem: refs.ref,
        from: 200,
        to: 1200,
        fromVal: 1.0,
        toVal: 1.2
      }).scale({ value });
    }
  }
];

export const sequence = ref => {
  let ctx = ref.getContext("2d");
  let rect = ref.getBoundingClientRect();
  let dst = null;

  //エフェクタ初期化
  const eff = {
    ref,
    ctx,
    rect,
    dst
  };

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
        const param = { refs: eff, top: _param.top, value: value };
        event.effect(param);
      }
    });
  };

  //初期値
  delivereEvent({ top: 1 });

  //スクロールを受け取る
  scroller.getScroll(_param => {
    delivereEvent(_param);
  });
};
