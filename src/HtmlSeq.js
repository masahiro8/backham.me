import * as _ from "lodash";
import { scroller } from "./interection/scroll";
import { ContextStore } from "./context/Context";

export const HTML_VIEW_TYPE = {
  TEXT: "text",
  IMG: "img"
};

const defaultValue = {
  color: "#333",
  fontFamily: "'Roboto', sans-serif",
  textAlign: "center"
};

const events = [
  //タイリング
  {
    from: 1,
    to: 600,
    html: {
      view: HTML_VIEW_TYPE.TEXT,
      text: "BACKHAM",
      style: {
        fontSize: "24px",
        color: defaultValue.color,
        fontFamily: defaultValue.fontFamily,
        textAlign: defaultValue.textAlign
      }
    }
  },
  {
    from: 800,
    to: 1200,
    html: {
      view: HTML_VIEW_TYPE.TEXT,
      text: "DESIGN",
      style: {
        fontSize: "120px",
        color: defaultValue.color,
        fontFamily: defaultValue.fontFamily,
        textAlign: defaultValue.textAlign
      }
    }
  },
  {
    from: 1400,
    to: 1800,
    html: {
      view: HTML_VIEW_TYPE.TEXT,
      text: "UI",
      style: {
        fontSize: "120px",
        color: defaultValue.color,
        fontFamily: defaultValue.fontFamily,
        textAlign: defaultValue.textAlign
      }
    }
  },
  {
    from: 3000,
    to: 4000,
    html: {
      view: HTML_VIEW_TYPE.TEXT,
      text: "backham",
      style: {
        fontSize: "26px",
        color: defaultValue.color,
        fontFamily: defaultValue.fontFamily,
        textAlign: defaultValue.textAlign
      }
    }
  }
];

export const HtmlSeq = () => {
  //イベントを実行
  const delivereEvent = _param => {
    //イベントを検索
    const _events = _.filter(events, event => {
      return event.from <= _param.top && event.to > _param.top;
    });

    //イベントを受け取る
    let params = [];
    _.map(_events, event => {
      if (event) {
        //登録イベントを実行
        const param = _.cloneDeep(event.html);
        param.scroll = _param.top - event.from;
        params.push(param);
      }
    });
    ContextStore.setContext("HTML_VIEW", params);
  };

  //初期値
  delivereEvent({ top: 1 });
  //スクロールを受け取る
  scroller.getScroll(_param => {
    delivereEvent(_param);
  });
};
