import * as _ from "lodash";
import { eventProvider } from "../../interection/eventProvider";
import * as eff from "../Effecter/Eff/Functions";

const Text = () => {
  let canvas;
  const init = ref => {
    canvas = ref;
  };
  const setText = (
    text,
    { fontFamily, fontSize, color, align, moveTo, letterSpacing },
    { top, value, diff },
    maxWidth
  ) => {
    canvas.style.letterSpacing = letterSpacing;
    const ctx = canvas.getContext("2d");
    ctx.font = `${fontSize}px '${fontFamily}'`;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    const _x =
      align === "center" ? Math.floor((maxWidth - moveTo.x) / 2) : moveTo.x;
    console.log("align", align, maxWidth, _x);
    _.map(text, (item, index) => {
      const _y = moveTo.y - fontSize * index;
      ctx.fillText(
        _.isFunction(item) ? item({ top, value, diff }) : item,
        _x,
        _y,
        maxWidth ? maxWidth - moveTo.x : null
      );
    });
  };
  return {
    init,
    setText
  };
};

export const CanvasText = (ref, events, maxWidth) => {
  let moveUpdated = {
    x: 0,
    y: 0
  };

  const text = Text();
  text.init(ref);
  const ctx = ref.getContext("2d");

  eventProvider(
    events,
    (event, { top, value, diff }) => {
      const moveperscroll =
        (event.moveFrom.y - event.moveTo.y) / Math.abs(event.to - event.from);

      moveUpdated.y += diff * moveperscroll;
      const _y = event.moveFrom.y + moveUpdated.y;
      const style = _.cloneDeep(event.style);
      style.moveTo = {
        x: event.moveTo.x,
        y: _y
      };
      text.setText(event.text, style, { top, value, diff }, maxWidth);
      if (event.eff && event.eff.length) {
        eff[event.eff[0]](ref, event, { top, value, diff });
      }
    },
    () => {
      ctx.clearRect(0, 0, ref.width, ref.height);
    }
  );
};
