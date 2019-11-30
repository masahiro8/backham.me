import * as _ from "lodash";
export const _grayscale = (ctx, src_ctx, rect, n) => {
  let src = src_ctx.getImageData(0, 0, rect.width, rect.height);
  let dst = ctx.createImageData(rect.width, rect.height);
  let colors = [];
  for (let i = 0; i < src.data.length; i += 4) {
    let y =
      (0.2126 * src.data[i] +
        0.7152 * src.data[i + 1] +
        0.0722 * src.data[i + 2]) /
      3;
    // let y = parseInt((src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3);
    // console.log("y = ", y);
    y = parseInt(y, n);
    let rate = y * (n / 255);
    y = 255 * rate.toFixed(1);
    dst.data[i] = y;
    dst.data[i + 1] = y;
    dst.data[i + 2] = y;
    dst.data[i + 3] = src.data[i + 3];
    colors.push(y);
  }

  //colorsの最大と最小
  console.log("colors = ", _.max(colors), _.min(colors));
  return dst;
};
