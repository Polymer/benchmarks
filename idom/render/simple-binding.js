import * as bench from '/bench.js';
import {DATA, DATA_IT} from '../../common/render/simple-data.js';
const idom = window.IncrementalDOM;

const template = function template(instance) {
  idom.elementOpen('span', '', null);
  idom.text('HELLO ');
  idom.text(instance.data.name);
  idom.elementClose('span');
  idom.elementOpen('span', '', null);
  idom.text('BYE ');
  idom.text(instance.data.name);
  idom.elementClose('span');
  idom.elementOpen('span', '', null);
  idom.text('HELLO ');
  idom.text(instance.data.name2);
  idom.elementClose('span');
  idom.elementOpen('span', '', null);
  idom.text('BYE ');
  idom.text(instance.data.name2);
  idom.elementClose('span');
  idom.elementOpen('span', '', null);
  idom.text(instance.data.name);
  idom.elementClose('span');
  idom.elementOpen('span', '', null);
  idom.text(instance.data.name2);
  idom.elementClose('span');
};

const update = new URL(window.location.href).searchParams.has('update');

if (update) {
  idom.patch(document.body, () => template({data: DATA}));
  bench.start();
  idom.patch(document.body, () => template({data: DATA_IT[0]}));
  bench.stop();

} else {
  bench.start();
  idom.patch(document.body, () => template({data: DATA}));
  bench.stop();
}
