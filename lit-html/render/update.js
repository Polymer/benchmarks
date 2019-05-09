import * as bench from '/bench.js';

import {html, render} from '../node_modules/lit-html/lit-html.js';

const template = function template(instance) {
  return html`
    <span>HELLO ${instance.data.name}</span>
    <span>BYE ${instance.data.name}</span>
    <span>HELLO ${instance.data.name2}</span>
    <span>BYE ${instance.data.name2}</span>
    <span>${instance.data.name}</span>
    <span>${instance.data.name2}</span>`;
};

const names = [
  {name: 'YOUR NAME 0', name2: 'MY NAME 0'},
  {name: 'YOUR NAME 1', name2: 'MY NAME 1'},
  {name: 'YOUR NAME 2', name2: 'MY NAME 2'},
];

const renderNext = () => {
  const data = names.shift();
  names.push(data);
  render(template({data}), document.body);
};

renderNext();

bench.start();
renderNext();
bench.stop();
