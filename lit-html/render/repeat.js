import * as bench from '/bench.js';
import {letters} from '../../common/render/letters.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

function template(instance) {
  return instance.data.letters.map(
      (object, i) => html`<span>${
          i % 2 === 0 ? html`<b>${object}</b>` :
                        html`<i>${object}</i>`}</span>`);
};

bench.start();
render(template({data: {letters}}), document.body);
bench.stop();
