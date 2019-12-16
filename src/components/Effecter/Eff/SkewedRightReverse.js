import * as _ from "lodash";
export const SkewedRightReverse = (ref, event, { top, value, diff }) => {
  const ctx = ref.getContext("2d");
  const rect = ref.getBoundingClientRect();
  const src = ctx.getImageData(0, 0, rect.width, rect.height);
  let dst = ctx.createImageData(rect.width, rect.height);

  //コピー
  for (let y = 0; y < rect.height; y++) {
    for (let x = 0; x < rect.width; x++) {
      const i = Math.floor(y * (rect.width * 4) + x * 4);
      dst.data[i] = src.data[i];
      dst.data[i + 1] = src.data[i + 1];
      dst.data[i + 2] = src.data[i + 2];
      dst.data[i + 3] = src.data[i + 3];
    }
  }

  let last = [];

  let col = [];
  for (let y = 0; y < rect.height; y++) {
    for (let x = rect.width; x > 0; x--) {
      const i = Math.floor(y * (rect.width * 4) + x * 4);
      if (x > rect.width - value * 0.5 && !last[y]) {
        dst.data[i] = src.data[i];
        dst.data[i + 1] = src.data[i + 1];
        dst.data[i + 2] = src.data[i + 2];
        dst.data[i + 3] = src.data[i + 3];
        col[y] = {
          r: src.data[i],
          g: src.data[i + 1],
          b: src.data[i + 2],
          a: src.data[i + 3]
        };
        last[y] = { index: i, x, y };
      } else {
        dst.data[i] = col[y].r;
        dst.data[i + 1] = col[y].g;
        dst.data[i + 2] = col[y].b;
        dst.data[i + 3] = col[y].a;
      }
    }
  }

  console.log("last", last);

  for (let y = 0; y < rect.height; y++) {
    for (let x = 0; x < rect.width; x++) {
      const i = Math.floor(y * (rect.width * 4) + x * 4);
      if (last[y].x > x) {
        dst.data[i] = col[y].r;
        dst.data[i + 1] = col[y].g;
        dst.data[i + 2] = col[y].b;
        dst.data[i + 3] = col[y].a;
      } else {
        dst.data[i] = src.data[i];
        dst.data[i + 1] = src.data[i + 1];
        dst.data[i + 2] = src.data[i + 2];
        dst.data[i + 3] = src.data[i + 3];
      }
    }
  }

  ctx.putImageData(dst, rect.x, rect.y);
};
