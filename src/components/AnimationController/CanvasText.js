/*
 * シーケンスデータを受け取って、
 * テキストを生成、スクロールを検知して、
 * エフェクトを指示
 */
import * as _ from "lodash";
import { eventProvider } from "../../interection/eventProvider";
import * as eff from "../Effecter/Eff/Functions";

const FillText = () => {
  let canvas;
  const init = ref => {
    canvas = ref;
  };
  const setText = (
    text,
    { fontFamily, fontSize, color, align, moveTo, letterSpacing },
    { top, value, diff },
    maxWidth
  ) => {
    canvas.style.letterSpacing = letterSpacing;
    const ctx = canvas.getContext("2d");
    ctx.font = `${fontSize}px '${fontFamily}'`;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    const _x =
      align === "center" ? Math.floor((maxWidth - moveTo.x) / 2) : moveTo.x;
    // console.log("align", canvas, align, maxWidth, _x);
    _.map(text, (item, index) => {
      const _y = moveTo.y - fontSize * 1.5 * index;
      ctx.fillText(
        _.isFunction(item) ? item({ top, value, diff }) : item,
        _x,
        _y,
        maxWidth ? maxWidth - moveTo.x : null
      );
    });
  };
  return {
    init,
    setText
  };
};

export const CanvasText = (ref, srcRef, events, maxWidth) => {
  let moveUpdated = {
    x: 0,
    y: 0
  };

  //テキストをキャンバスに描画
  const text = FillText();
  text.init(srcRef);

  //計算用canvas
  const ctxSrc = srcRef.getContext("2d");
  const ctx = ref.getContext("2d");

  //イベントに登録して、コールバックうける
  eventProvider(
    events,
    //表示するイベントが返ってくる
    (event, { top, value, diff }) => {
      //スクロール量を計算
      const moveperscroll =
        (event.moveFrom.y - event.moveTo.y) / Math.abs(event.to - event.from);
      moveUpdated.y += diff * moveperscroll;

      //文字のスクロール表現はdomではなくキャンバス内の座標を変更して行う
      const _y = event.moveFrom.y + moveUpdated.y;
      const style = _.cloneDeep(event.style);
      style.moveTo = {
        x: event.moveTo.x,
        y: _y
      };

      // console.log("eventProvider", event, style);

      //ここでキャンバスに文字を描画
      const _text = _.cloneDeep(event.text).reverse();
      text.setText(_text, style, { top, value, diff }, maxWidth);

      //ここでエフェクト
      if (event.eff && event.eff.length) {
        _.map(event.eff, effect => {
          eff[effect](ref, srcRef, event, { top, value, diff });
        });
      }
    },
    //スクロールごとにコールバック
    () => {
      //スクロールごとに毎回全画面を消す
      ctxSrc.clearRect(0, 0, srcRef.width, srcRef.height);
      ctx.clearRect(0, 0, ref.width, ref.height);
    }
  );
};
