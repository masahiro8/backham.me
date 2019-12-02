export const setStyle = ({ elem, from, to, fromVal, toVal }) => {
  const n = (toVal - fromVal) / (to - from);
  const scale = ({ value }) => {
    const s = n * value + fromVal;
    elem.style.transform = `scale(${s})`;
  };

  const translateY = ({ value }) => {
    const s = n * value + fromVal;
    elem.style.transform = `translateY(${s}px)`;
  };

  const opacity = ({ value }) => {
    const s = n * value + fromVal;
    elem.style.opacity = s;
  };

  return {
    scale,
    translateY,
    opacity
  };
};
