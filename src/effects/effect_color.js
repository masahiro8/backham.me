import { Color2Value } from './effect_color2value';
import { hexToRgb } from '../util/util';

export const _color = (ctx, src, rect, hex) => {
  const _2value = Color2Value(ctx, src, rect);
  const rgb = hexToRgb(hex);
  console.log('rgb', rgb);

  for (let i = 0; i < _2value.data.length; i += 4) {
    if (_2value.data[i] === 0) {
      _2value.data[i] = rgb.r;
      _2value.data[i + 1] = rgb.g;
      _2value.data[i + 2] = rgb.b;
    }
  }
  return _2value;
};
