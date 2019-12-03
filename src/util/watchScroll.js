/***
 * スクロールを検知して対象のコンポーネントが画面に入ったら通知する
 */
export const watchScroll = target => {
  let callback;

  const dom = {
    document: document.getElementsByTagName("body")[0],
    target: target
  };

  const init = _callback => {
    document.addEventListener("scroll", () => {
      update();
    });
    if (_callback) {
      callback = _callback;
    }
    update();
  };

  const get = {
    scroll: () => {
      return document.scrollingElement.scrollTop;
    },
    rect: element => {
      return element.getBoundingClientRect();
    },
    screen: () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  };

  const enter = target => {
    const rect = get.rect(target);
    const bottom = rect.top + rect.height;
    const screenHeight = get.screen().height;

    if (rect.top < screenHeight && bottom > 0) {
      if (callback) {
        callback(rect.top - screenHeight);
      }
    }
  };

  const update = () => {
    enter(dom.target);
  };

  return {
    init
  };
};
