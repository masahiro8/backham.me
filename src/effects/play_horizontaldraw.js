import { drawPixel, dummy } from './util';
export const HorizontalDrawPlay = (
  ctx,
  rect,
  cimg,
  dst,
  lines = 10,
  interval = 1
) => {
  if (!dst) return;
  let counter = 0;
  //x軸を走査
  const column = y => {
    return new Promise(resolved => {
      const draw = x => {
        if (rect.width === x) {
          setTimeout(() => {
            resolved();
          }, interval);
          return;
        }
        const index = Math.floor(y * (rect.width * 4) + x * 4);
        dummy(dst, ctx, rect, index);
        cimg = drawPixel(dst, cimg, index);
        const _x = x + 1;
        draw(_x);
      };
      draw(1);
    });
  };

  //y軸を走査
  const row = async y => {
    if (rect.height === y) {
      return true;
    }
    await column(y);
    if (counter === lines) {
      console.log('draw');
      ctx.putImageData(cimg, 0, 0);
      counter = 0;
    }
    counter++;
    const _y = y + 1;
    return row(_y);
  };

  return new Promise(resolved => {
    if (row(1)) {
      resolved();
    }
  });
};
