import * as _ from "lodash";
import { pixelRatio } from "@/config";
export const SkewedRightReverse = (
  ref,
  srcRef,
  event,
  { top, value, diff }
) => {
  const ctxSrc = srcRef.getContext("2d");
  const rect = srcRef.getBoundingClientRect();
  rect.width = rect.width * pixelRatio;
  rect.height = rect.height * pixelRatio;
  const src = ctxSrc.getImageData(0, 0, rect.width, rect.height);
  let dst = ctxSrc.createImageData(rect.width, rect.height);

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

  //1pxスクロールあたりの進行ピクセル数
  const pixRate = +(rect.width / (event.to - event.from)).toFixed(2);
  let last = [];
  let col = [];
  for (let y = 0; y < rect.height; y++) {
    for (let x = rect.width; x > 0; x--) {
      const i = Math.floor(y * (rect.width * 4) + x * 4);
      const edge_index = Math.floor(rect.width - value * pixRate);
      if (x === edge_index) {
        col[y] = {
          r: src.data[i],
          g: src.data[i + 1],
          b: src.data[i + 2],
          a: src.data[i + 3]
        };
        last[y] = { index: i, x, y };
      }
    }
  }

  // console.log(
  //   "SkewedRightReverse1",
  //   value,
  //   rect.width - value * 0.5,
  //   last.length,
  //   last[64].x,
  //   event.to - event.from,
  //   pixRate
  // );

  for (let y = 0; y < rect.height; y++) {
    for (let x = 0; x < rect.width; x++) {
      const i = Math.floor(y * (rect.width * 4) + x * 4);
      if (last[y] && x >= last[y].x) {
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

  ctxSrc.putImageData(dst, rect.x, rect.y);
  const ctx = ref.getContext("2d");
  ctx.drawImage(
    srcRef,
    0,
    0,
    rect.width,
    rect.height,
    0,
    0,
    rect.width,
    rect.height
  );
};
