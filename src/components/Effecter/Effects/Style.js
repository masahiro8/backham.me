export const setStyle = ({ elem, from, to, fromVal, toVal }) => {
  const n = (toVal - fromVal) / (to - from);
  const scale = ({ value }) => {
    const s = n * value + fromVal;
    elem.style.transform = `scale(${s})`;
  };

  return {
    scale
  };
};
