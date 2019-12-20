import * as _ from "lodash";
import { pixelRatio } from "@/config";
export const Stay = (ref, srcRef, event, { top, value, diff }) => {
  const ctxSrc = srcRef.getContext("2d");
  const rect = srcRef.getBoundingClientRect();
  rect.width = rect.width * pixelRatio;
  rect.height = rect.height * pixelRatio;
  const ctx = ref.getContext("2d");
  ctx.drawImage(
    srcRef,
    0,
    0,
    rect.width,
    rect.height,
    0,
    0,
    rect.width,
    rect.height
  );
};
