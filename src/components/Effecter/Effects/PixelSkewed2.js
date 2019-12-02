import * as _ from "lodash";

export const PixelSkewed2 = () => {
  let ctx;
  let src;
  let dst;
  let rect;
  let forceRelease = false; //強制停止
  let pixels = [];
  let THRESHOLD;

  const init = (_ctx, src_ctx, _rect, _THRESHOLD) => {
    ctx = _ctx;
    src = src_ctx.getImageData(0, 0, _rect.width, _rect.height);
    dst = ctx.createImageData(_rect.width, _rect.height);
    rect = _rect;
    forceRelease = false;
    THRESHOLD = _THRESHOLD;

    //ピクセルを取り込む
    for (let y = 0; y < rect.height; y++) {
      for (let x = 0; x < rect.width; x++) {
        const i = Math.floor(y * (rect.width * 4) + x * 4);
        let z = (src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3;
        if (z < THRESHOLD) {
          const r = Math.random() * 1; //半径初期値
          const a = src.data[i + 3];
          const rgb = {
            r: Math.floor(Math.random() * 250),
            g: Math.floor(Math.random() * 250),
            b: Math.floor(Math.random() * 250)
          };
          pixels.push({ index: i, x, y, r, a, rgb });
        }
      }
    }
  };

  const clearCanvas = () => {
    for (let y = 0; y < rect.height; y++) {
      for (let x = 0; x < rect.width; x++) {
        const i = Math.floor(y * (rect.width * 4) + x * 4);
        dst.data[i] = 255;
        dst.data[i + 1] = 255;
        dst.data[i + 2] = 255;
        dst.data[i + 3] = 0;
      }
    }
  };

  const scroll = ({ value, from, to }) => {
    clearCanvas();
    const draw = () => {
      if (forceRelease) {
        return true;
      }
      if (from < rect.height && top >= rect.height) {
        return;
      }

      //座標計算
      pixels.map(pix => {
        const x = Math.floor(value * pix.r) + pix.x;
        const y = pix.y;
        //描画
        const i = Math.floor(y * (rect.width * 4) + x * 4);
        dst.data[i] = pix.rgb.r;
        dst.data[i + 1] = pix.rgb.g;
        dst.data[i + 2] = pix.rgb.b;
        dst.data[i + 3] = pix.a;
      });

      ctx.putImageData(dst, rect.x, rect.y);
    };
    draw();
  };

  return {
    init,
    scroll
  };
};
