import * as bench from '/bench.js';
import {longStrings} from '../../common/render/strings.js';
const idom = window.IncrementalDOM;

const template = function template(instance) {
  instance.data.forEach((str, i) => {
    idom.elementOpen('span', '', null);
    if (str.simpleText) {
      idom.text(str.simpleText);
    } else {
      str.runs.forEach((run, i) => {
        if (run.navigationEndpoint) {
          idom.elementOpen('a', '', ['href', '#']);
          idom.text(run.text);
          idom.elementClose('a');
        } else {
          idom.elementOpen('span', '', ['class', unwrapSafe(getStyle(run))]);
          idom.text(run.text);
          idom.elementClose('span');
        }
      });
    }
    idom.elementClose('span');
  });
};

const update = new URL(window.location.href).searchParams.has('update');

setTimeout(() => {
  if (update) {
    idom.patch(document.body, () => template({data: longStrings}));
    bench.start();
    idom.patch(document.body, () => template({data: longStrings.reverse()}));
    bench.stop();

  } else {
    bench.start();
    idom.patch(document.body, () => template({data: longStrings}));
    bench.stop();
  }
}, 100);
