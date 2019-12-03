import * as _ from "lodash";

export const Randoms = (strings, randoms, options) => {
  let n = 0;
  let max = strings.length;
  let output = "";
  let randomtexts = randoms;
  let callbacks = [];

  const interval_speed = options.speed;
  const random_speed = options.random;

  const deliver = str => {
    _.map(callbacks, callback => {
      callback(str);
    });
  };

  const showRandom = (output, time, callback) => {
    let _output_src = _.clone(output);
    let _output_r = _.clone(output);
    const rmax = randomtexts.length;
    const interval = random_speed;
    let _n = 0;
    const timer = setInterval(() => {
      if (_n >= time * 0.8) {
        clearInterval(timer);
        callback(_output_src);
      }
      const randam = _.random(max);
      const str = randomtexts.substring(randam, randam + 1);
      output = _output_r + str;
      _n += interval;
      deliver(output);
    }, interval);
  };

  const init = () => {
    return new Promise(resolved => {
      const timer = setInterval(() => {
        if (n >= max) {
          clearInterval(timer);
          setTimeout(() => {
            resolved(true);
          }, interval_speed * 3);
          return;
        }
        showRandom(output, interval_speed, _output => {
          output = _output + strings.substring(n, n + 1);
          deliver(output);
          n++;
        });
      }, interval_speed);
    });
  };

  const setCallback = func => {
    callbacks.push(func);
  };

  return {
    setCallback,
    init
  };
};
