import * as bench from '/bench.js';
import {DATA, DATA_IT} from '../../common/render/simple-data.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

import {initTemplatePolyfill} from '../node_modules/lit-html/polyfills/template_polyfill.js';
if (new URL(window.location.href).searchParams.has('tp')) {
  initTemplatePolyfill(true);
};

const template = function template(instance) {
  return html`
    <span>HELLO ${instance.data.name}</span>
    <span>BYE ${instance.data.name}</span>
    <span>HELLO ${instance.data.name2}</span>
    <span>BYE ${instance.data.name2}</span>
    <span>${instance.data.name}</span>
    <span>${instance.data.name2}</span>`;
};

const update = new URL(window.location.href).searchParams.has('update');

if (update) {
  render(template({data: DATA}), document.body);
  bench.start();
  render(template({data: DATA_IT[0]}), document.body);
  bench.stop();

} else {
  bench.start();
  render(template({data: DATA}), document.body);
  bench.stop();
}
