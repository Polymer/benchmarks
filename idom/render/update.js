import * as bench from '/bench.js';

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

const names = [
  {name: 'YOUR NAME 0', name2: 'MY NAME 0'},
  {name: 'YOUR NAME 1', name2: 'MY NAME 1'},
  {name: 'YOUR NAME 2', name2: 'MY NAME 2'},
];

const renderNext = () => {
  const data = names.shift();
  names.push(data);
  idom.patch(document.body, () => template({data}));
};

renderNext();

bench.start();
renderNext();
bench.stop();
