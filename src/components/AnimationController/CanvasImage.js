/*
 * シーケンスデータを受け取って、
 * テキストを生成、スクロールを検知して、
 * エフェクトを指示
 */
import * as _ from "lodash";
import { eventProvider } from "../../interection/eventProvider";
import * as eff from "../Effecter/Eff/Functions";
import { imageLoader } from "../../util/imageLoader";

const POSITION = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right"
};

const FillImage = () => {
  let canvas;
  const init = ref => {
    canvas = ref;
  };
  const setImage = (
    imageObj,
    { x, y, width, height, moveTo },
    { top, value, diff },
    maxWidth
  ) => {
    const src = { x: 0, y: 0, width: imageObj.width, height: imageObj.height };
    let visible = { x, y, width, height };

    //レイアウトの調整
    if (height === "auto") {
      visible.height = Math.floor(imageObj.height * (width / imageObj.width));
    }
    if (x === "auto") {
      visible.x = Math.floor(canvas.width / 2) - Math.floor(width / 2);
    }
    if (y === "auto") {
      visible.y =
        Math.floor(canvas.height / 2) - Math.floor(visible.height / 2);
    }
    if (moveTo.x) {
      visible.x = moveTo.x;
    }
    if (moveTo.y) {
      visible.y = moveTo.y;
    }

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      imageObj,
      src.x,
      src.y,
      src.width,
      src.height,
      visible.x,
      visible.y,
      visible.width,
      visible.height
    );
  };
  return {
    init,
    setImage
  };
};

export const CanvasImage = (ref, srcRef, events, maxWidth) => {
  let moveUpdated = {
    x: 0,
    y: 0
  };

  //画像をキャンバスに描画
  const img = FillImage();
  img.init(srcRef);

  //計算用canvas
  const ctxSrc = srcRef.getContext("2d");
  const ctx = ref.getContext("2d");

  //イベントに登録して、コールバックうける
  eventProvider(
    events,
    //表示するイベントが返ってくる
    async (event, { top, value, diff }) => {
      //スクロール量を計算
      const moveperscroll =
        (event.moveFrom.y - event.moveTo.y) / Math.abs(event.to - event.from);
      moveUpdated.y += diff * moveperscroll;

      //文字のスクロール表現はdomではなくキャンバス内の座標を変更して行う
      const _y = event.moveFrom.y + moveUpdated.y;

      let style = _.cloneDeep(event.rect);
      style.moveTo = {
        x: event.moveTo.x,
        y: _y
      };

      //ここでキャンバスに絵を描画
      const imageObj = await imageLoader(event.img);
      img.setImage(imageObj, style, { top, value, diff }, maxWidth);

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
