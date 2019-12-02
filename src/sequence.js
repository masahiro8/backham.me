import * as _ from "lodash";
import { scroller } from "./interection/scroll";

//ここからエフェクト
import { drawImage } from "./components/Effecter/Effects/DrawImage";
import { colorNoise } from "./components/Effecter/Effects/ColorNoise";
import { PixelSkewed } from "./components/Effecter/Effects/PixelSkewed";
import { LineSkewed } from "./components/Effecter/Effects/LineSkewed";

//スタイル系エフェクト
import { setStyle } from "./components/Effecter/Effects/Style";

const scale = Math.random(1) + 1;

//エフェクタ作成
const dwImg = drawImage();
const pxlSkw = PixelSkewed();
const colNse = colorNoise();
const lnSkw = LineSkewed(true);

/**
 * ここにスクロールイベントを登録していく
 */
const events = [
  {
    from: 1,
    to: 100,
    effect: ({ refs, top, value }) => {
      dwImg.setTile({
        path: require("@/assets/vrmonkey_tran.png"),
        tile: { x: 1, y: 1 }
      });
    }
  },
  {
    from: 101,
    to: 200,
    effect: ({ refs, top, value }) => {
      dwImg.setTile({
        path: require("@/assets/vrmonkey_tran.png"),
        tile: { x: 2, y: 2 }
      });
    }
  },
  {
    from: 201,
    to: 300,
    effect: ({ refs, top, value }) => {
      dwImg.setTile({
        path: require("@/assets/vrmonkey_tran.png"),
        tile: { x: 3, y: 3 }
      });
    }
  },
  //ノイズスクロール
  {
    from: 100,
    to: 500,
    effect: ({ refs, top, value }) => {
      colNse.scroll({
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
      colNse.loop({
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
  },
  {
    from: 1000,
    to: 2000,
    effect: ({ refs, top, value }) => {
      lnSkw.scroll({
        value,
        from: 1000,
        to: 2000
      });
    }
  },
  {
    from: 1500,
    to: 2000,
    effect: ({ refs, top, value }) => {
      setStyle({
        elem: refs.ref,
        from: 1500,
        to: 2000,
        fromVal: 1.0,
        toVal: 0
      }).opacity({ value });
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

  //エフェエクトの初期化
  dwImg.init(ctx, ctx, rect, 128);
  colNse.init(ctx, ctx, rect, 128);
  pxlSkw.init(ctx, ctx, rect, 128);
  lnSkw.init(ctx, ctx, rect, 128);

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
