import * as _ from "lodash";
import { scroller } from "./interection/scroll";

//ここからエフェクト
import { drawImage } from "./components/Effecter/Effects/DrawImage";
import { colorNoise } from "./components/Effecter/Effects/ColorNoise";
import { Color } from "./components/Effecter/Effects/Color";
import { PixelSkewed } from "./components/Effecter/Effects/PixelSkewed";
import { PixelSkewed8 } from "./components/Effecter/Effects/PixelSkewed8";
import { LineSkewed } from "./components/Effecter/Effects/LineSkewed";
import { LineWave } from "./components/Effecter/Effects/LineWave";
import { Stay } from "./components/Effecter/Effects/Stay";

//スタイル系エフェクト
import { setStyle } from "./components/Effecter/Effects/Style";

const scale = Math.random(1) + 1;

//エフェクタ作成
const dwImg = drawImage();
const pxlSkw = PixelSkewed({ isColor: false });
const pxlSkw8 = PixelSkewed8({ isColor: false });
const colNse = colorNoise({ isColor: false });
const col = Color();
const lnSkw = LineSkewed({ isRandom: true });
const lnWve = LineWave({ isColor: false });
const sty = Stay();

/**
 * ここにスクロールイベントを登録していく
 */
const events = [
  {
    from: 100,
    to: 200,
    effect: ({ refs, top, value }) => {
      col.scroll({
        value,
        from: 100,
        to: 200,
        frgb: { r: 0, g: 200, b: 255 }
      });
    }
  },
  {
    from: 400,
    to: 500,
    effect: ({ refs, top, value }) => {
      col.reverse({
        value,
        from: 400,
        to: 500,
        frgb: { r: 0, g: 200, b: 255 }
      });
    }
  },
  //ノイズスクロール
  {
    from: 700,
    to: 1400,
    effect: ({ refs, top, value }) => {
      lnWve.scroll({
        value,
        from: 700,
        to: 1400
      });
    }
  },

  //フェードアウト
  {
    from: 1400,
    to: 1600,
    effect: ({ refs, top, value }) => {
      setStyle({
        elem: refs.ref,
        from: 1400,
        to: 1600,
        fromVal: 1,
        toVal: 0
      }).opacity({ value });
    }
  },
  //フェードイン
  {
    from: 1600,
    to: 1900,
    effect: ({ refs, top, value }) => {
      setStyle({
        elem: refs.ref,
        from: 1600,
        to: 1900,
        fromVal: 0,
        toVal: 1
      }).opacity({ value });
    }
  },
  // ノイズライン
  {
    from: 1800,
    to: 2400,
    effect: ({ refs, top, value }) => {
      lnSkw.scroll({
        value,
        from: 1800,
        to: 2400
      });
    }
  },
  //固定
  {
    from: 2400,
    to: 2600,
    effect: ({ refs, top, value }) => {
      sty.set({
        value,
        from: 2400,
        to: 2600
      });
    }
  },
  //フェードアウト
  {
    from: 2200,
    to: 2400,
    effect: ({ refs, top, value }) => {
      setStyle({
        elem: refs.ref,
        from: 2200,
        to: 2400,
        fromVal: 1,
        toVal: 0
      }).opacity({ value });
    }
  },
  //フェードイン
  {
    from: 2400,
    to: 2700,
    effect: ({ refs, top, value }) => {
      setStyle({
        elem: refs.ref,
        from: 2400,
        to: 2700,
        fromVal: 0,
        toVal: 1
      }).opacity({ value });
    }
  },
  //スクロール
  // {
  //   from: 200,
  //   to: 3000,
  //   effect: ({ refs, top, value }) => {
  //     setStyle({
  //       elem: refs.ref,
  //       from: 200,
  //       to: 3000,
  //       fromVal: 0,
  //       toVal: -100
  //     }).translateY({ value });
  //   }
  // },
  //固定
  {
    from: 3000,
    to: 3200,
    effect: ({ refs, top, value }) => {
      sty.set({
        value,
        from: 3000,
        to: 3200
      });
    }
  },
  //ノイズ拡散８のじ
  {
    from: 3200,
    to: 4500,
    effect: ({ refs, top, value }) => {
      pxlSkw8.scroll({
        value,
        from: 3200,
        to: 4500,
        sp: 20
      });
    }
  },
  //ノイズ拡散
  {
    from: 4500,
    to: 6000,
    effect: ({ refs, top, value }) => {
      pxlSkw.scroll({
        value,
        from: 4500,
        to: 6000
      });
    }
  },
  //フェードアウト
  {
    from: 5000,
    to: 6000,
    effect: ({ refs, top, value }) => {
      setStyle({
        elem: refs.ref,
        from: 5000,
        to: 6000,
        fromVal: 1.0,
        toVal: 0
      }).opacity({ value });
    }
  }
];

export const CanvasSeq = ref => {
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
  col.init(ctx, ctx, rect, 128);
  pxlSkw.init(ctx, ctx, rect, 128);
  pxlSkw8.init(ctx, ctx, rect, 128);
  lnSkw.init(ctx, ctx, rect, 128);
  lnWve.init(ctx, ctx, rect, 128);
  sty.init(ctx, ctx, rect, 128);

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
