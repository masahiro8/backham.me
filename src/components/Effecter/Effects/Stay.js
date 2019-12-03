import * as _ from "lodash";

export const Stay = () => {
  let ctx;
  let src;
  let dst;
  let rect;
  let forceRelease = false; //強制停止
  let endFlag = false; //終了フラグ
  let THRESHOLD;

  const init = (_ctx, src_ctx, _rect, _THRESHOLD) => {
    ctx = _ctx;
    src = src_ctx.getImageData(0, 0, _rect.width, _rect.height);
    dst = ctx.createImageData(_rect.width, _rect.height);
    rect = _rect;
    forceRelease = false;
    THRESHOLD = _THRESHOLD;
  };

  const set = () => {
    for (let y = 0; y < rect.height; y++) {
      for (let x = 0; x < rect.width; x++) {
        const i = Math.floor(y * (rect.width * 4) + x * 4);
        let z = (src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3;
        if (z < 255) {
          dst.data[i] = src.data[i];
          dst.data[i + 1] = src.data[i + 1];
          dst.data[i + 2] = src.data[i + 2];
          dst.data[i + 3] = src.data[i + 3];
        }
      }
    }
    ctx.putImageData(dst, rect.x, rect.y);
  };

  const release = b => {
    console.log("release", b);
    forceRelease = b;
    src = null;
    dst = null;
  };

  return {
    init,
    set,
    release
  };
};
