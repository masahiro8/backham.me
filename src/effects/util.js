export const drawPixel = (dst, cimg, index) => {
  cimg.data[index] = dst.data[index];
  cimg.data[index + 1] = dst.data[index + 1];
  cimg.data[index + 2] = dst.data[index + 2];
  cimg.data[index + 3] = dst.data[index + 3];
  return cimg;
};

export const dummy = () => {};
