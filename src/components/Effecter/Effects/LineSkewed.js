import * as _ from "lodash";

export const LineSkewed = _isRandom => {
  let ctx;
  let src;
  let dst;
  let rect;
  let forceRelease = false; //強制停止
  let pixels = [];
  let THRESHOLD;
  let isRandom = _isRandom || false;
  let rands = [];

  const init = (_ctx, src_ctx, _rect, _THRESHOLD) => {
    ctx = _ctx;
    src = src_ctx.getImageData(0, 0, _rect.width, _rect.height);
    dst = ctx.createImageData(_rect.width, _rect.height);
    rect = _rect;
    forceRelease = false;
    THRESHOLD = _THRESHOLD;
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

  const drawPixel = (index, i) => {
    dst.data[i] = 0;
    dst.data[i + 1] = 0;
    dst.data[i + 2] = 0;
    dst.data[i + 3] = src.data[index - 1];
  };

  const prevPixel = i => {
    return src.data[i - 1];
    // return Math.floor(src.data[i - 4] + src.data[i - 3] + src.data[i - 2]) / 3;
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

      for (let y = 0; y < rect.height; y++) {
        for (let x = 0; x < rect.width; x++) {
          const i = Math.floor(y * (rect.width * 4) + x * 4);
          let z = (src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3;

          //黒ピクセルの後の白ピクセル
          if (src.data[i + 3] === 0 && prevPixel(i) > 0) {
            // drawPixel(i, i);
            //ランダム値
            if (!rands[i]) {
              rands[i] = isRandom ? Math.floor(Math.random() * 10) : 1;
            }
            const s = i + Math.floor((value * rands[i]) / 10) * 4;
            for (let n = i; n < s; n += 4) {
              drawPixel(i, n);
            }
          } else {
            //着色済みになければ
            let _z = (dst.data[i] + dst.data[i + 1] + dst.data[i + 2]) / 3;
            if (_z === 255) {
              dst.data[i] = 1;
              dst.data[i + 1] = 1;
              dst.data[i + 2] = 1;
              dst.data[i + 3] = src.data[i + 3];
            }
          }
        }
      }
      ctx.putImageData(dst, rect.x, rect.y);
    };
    draw();
  };

  return {
    init,
    scroll
  };
};
