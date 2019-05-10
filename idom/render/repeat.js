import * as bench from '/bench.js';
import {letters} from '../../common/render/letters.js';
const idom = window.IncrementalDOM;

const template = function template(instance) {
  instance.data.letters.forEach((object, i) => {
    idom.elementOpen('span', '', null);
    if (i % 2 === 0) {
      idom.elementOpen('b', '', null);
      idom.text(object);
      idom.elementClose('b');
    } else {
      idom.elementOpen('i', '', null);
      idom.text(object);
      idom.elementClose('i');
    }
    idom.elementClose('span');
  });
};

bench.start();
idom.patch(document.body, () => template({data: {letters}}));
bench.stop();
