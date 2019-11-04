//2値化
export const Color2Value = (ctx, _src, rect) => {
  const THRESHOLD = 40; //閾値
  let src = _src.getImageData(rect.x, rect.y, rect.width, rect.height);
  let dst = ctx.createImageData(rect.width, rect.height);
  for (let i = 0; i < src.data.length; i += 4) {
    let y = (src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3;
    y = parseInt(y, 10);
    if (y > THRESHOLD) {
      y = 255;
    } else {
      y = 0;
    }
    dst.data[i] = y;
    dst.data[i + 1] = y;
    dst.data[i + 2] = y;
    dst.data[i + 3] = src.data[i + 3];
  }
  return dst;
};
