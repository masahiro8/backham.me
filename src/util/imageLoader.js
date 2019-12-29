import * as _ from "lodash";
const imageCache = () => {
  let images = [];
  const format = {
    url: null,
    date: null,
    image: null
  };

  const loadImage = url => {
    return new Promise(resolved => {
      const _img = new Image();
      _img.onload = () => {
        resolved(_img);
      };
      _img.src = url;
    });
  };

  const get = url => {
    return new Promise(async resolved => {
      const image = _.find(images, item => {
        return item.url === url;
      });
      if (image) {
        resolved(image.image);
      } else {
        const newimage = await loadImage(url);
        images.push({
          url,
          date: new Date(),
          image: newimage
        });
        resolved(newimage);
      }
    });
  };

  return {
    get
  };
};

const cache = imageCache();

/*
 * 画像のロード
 */
export const imageLoader = url => {
  return new Promise(async resolved => {
    resolved(await cache.get(url));
  });
};
