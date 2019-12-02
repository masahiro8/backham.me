import * as _ from "lodash";

export const PixelSkewed = ({ isColor }) => {
  let ctx;
  let src;
  let dst;
  let rect;
  let forceRelease = false; //強制停止
  let pixels = [];
  let THRESHOLD;
  let isColorNoise = isColor;

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
          const rr = Math.floor(Math.random() * 360); //回転初期値
          const r = Math.random() * 1 + 1; //半径初期値
          const s = Math.random() * 2; //回転速度初期値
          const a = src.data[i + 3];
          const rgb = getNoise(isColorNoise);
          pixels.push({ index: i, x, y, rr, r, s, a, rgb });
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

  const getNoise = _isColor => {
    if (_isColor) {
      return {
        r: Math.floor(Math.random() * 250),
        g: Math.floor(Math.random() * 250),
        b: Math.floor(Math.random() * 250)
      };
    } else {
      const col = Math.floor(Math.random() * 250);
      return {
        r: col,
        g: col,
        b: col
      };
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
        const rotate = value * pix.s;
        const radius = value / 5 + pix.r; //半径
        const radian = ((pix.rr + rotate) * Math.PI) / 180;
        const x = Math.floor(radius * Math.cos(radian)) + pix.x;
        const y = Math.floor(radius * Math.sin(radian)) + pix.y;
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
