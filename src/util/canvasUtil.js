// import * as _ from 'lodash';
const fitRect = (elmRect, imgRect) => {
  const rate = elmRect.width / imgRect.width;
  return {
    x: 0,
    y: 0,
    width: imgRect.width * rate,
    height: imgRect.height * rate
  };
};

const setImage = (frame, canvas, path) => {
  return new Promise(resolved => {
    const img = new Image();
    img.onload = () => {
      const elmRect = frame.getBoundingClientRect();
      const imgRect = { left: 0, top: 0, width: img.width, height: img.height };
      const _fitRect = fitRect(elmRect, imgRect);
      resolved({
        fit: _fitRect,
        img: img
      });
    };
    img.src = path;
  });
};

export { setImage };
