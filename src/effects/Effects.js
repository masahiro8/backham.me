// import * as _ from 'lodash';

import { _grayscale } from './effect_grayscale';
import { _color } from './effect_color';
import { HorizontalDrawPlay } from './play_horizontaldraw';

const Animate = (ctx, rect) => {
  let cimg = ctx.getImageData(0, 0, rect.width, rect.height);

  /**
   * 読み込んだエフェクトを登録
   * @param {function} callback
   */
  const Effects = callback => {
    const Grayscale = src => {
      const dst = _grayscale(ctx, src, rect, 10);
      callback(dst);
    };
    const Color = (src, hex) => {
      const dst = _color(ctx, src, rect, hex);
      callback(dst);
    };
    return {
      Grayscale,
      Color
    };
  };

  /**
   * アニメーションのパターン
   * @param {*} lines
   */
  const HorizontalDraw = (lines, interval) => {
    return Effects(async dst => {
      await HorizontalDrawPlay(ctx, rect, cimg, dst, lines, interval);
    });
  };

  return {
    HorizontalDraw
  };
};

export { Animate };
