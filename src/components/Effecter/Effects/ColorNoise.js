import * as _ from "lodash";

export const colorNoise = ({ isColor }) => {
  let ctx;
  let src;
  let dst;
  let rect;
  let forceRelease = false; //強制停止
  let endFlag = false; //終了フラグ
  let THRESHOLD;
  let isColorNoise = isColor;

  const init = (_ctx, src_ctx, _rect, _THRESHOLD) => {
    ctx = _ctx;
    src = src_ctx.getImageData(0, 0, _rect.width, _rect.height);
    dst = ctx.createImageData(_rect.width, _rect.height);
    rect = _rect;
    forceRelease = false;
    THRESHOLD = _THRESHOLD;
  };

  const setColor = (z, i, _rgb) => {
    if (z < 255) {
      dst.data[i] = _rgb.r;
      dst.data[i + 1] = _rgb.g;
      dst.data[i + 2] = _rgb.b;
    } else {
      dst.data[i] = src.data[i];
      dst.data[i + 1] = src.data[i + 1];
      dst.data[i + 2] = src.data[i + 2];
    }
    dst.data[i + 3] = src.data[i + 3];
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
    const rate = rect.height / (to - from);
    const draw = () => {
      if (forceRelease) {
        return true;
      }
      if (from < rect.height && top >= rect.height) {
        if (!endFlag) {
          release();
        }
        return;
      }
      for (let y = 0; y < rect.height; y++) {
        for (let x = 0; x < rect.width; x++) {
          const i = Math.floor(y * (rect.width * 4) + x * 4);
          let z = (src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3;

          if (y < value * rate) {
            const _rgb = getNoise(isColorNoise);
            setColor(z, i, _rgb);
          } else {
            const _rgb = {
              r: 10,
              g: 10,
              b: 10
            };
            setColor(z, i, _rgb);
          }
        }
      }
      ctx.putImageData(dst, rect.x, rect.y);
    };
    draw();
  };

  const loop = ({ value, from, to }) => {
    const rate = rect.height / (to - from);
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
          const _rgb = getNoise(isColorNoise);
          setColor(z, i, _rgb);
        }
      }
      ctx.putImageData(dst, rect.x, rect.y);
    };
    draw();
  };

  const set = () => {
    init();
    for (let i = 0; i < src.data.length; i += 4) {
      let z = (src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3;
      setColor(z, i, { r: 255, g: 128, b: 0 });
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
    loop,
    scroll,
    release
  };
};
