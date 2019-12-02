import * as _ from "lodash";

export const drawImage = () => {
  let ctx;
  let src;
  let dst;
  let rect;
  let forceRelease = false; //強制停止
  let THRESHOLD;

  const init = (_ctx, src_ctx, _rect, _THRESHOLD) => {
    ctx = _ctx;
    rect = _rect;
    forceRelease = false;
    THRESHOLD = _THRESHOLD;
  };

  const getImage = path => {
    return new Promise(resolved => {
      const image = new Image();
      image.onload = () => {
        resolved(image);
      };
      image.src = path;
    });
  };

  const set = async ({ path }) => {
    const image = await getImage(path);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.save();
    ctx.drawImage(image, 0, 0, rect.width, rect.height);
    ctx.restore();
  };

  const setTile = async ({ path, tile, rotate }) => {
    const image = await getImage(path);
    const _width = rect.width / tile.x;
    const _height = rect.height / tile.y;
    //main
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.save();
    for (let y = 0; y < tile.y; y++) {
      for (let x = 0; x < tile.x; x++) {
        ctx.drawImage(image, _width * x, _height * y, _width, _height);
      }
    }
    ctx.restore();
  };

  return {
    init,
    set,
    setTile
  };
};
