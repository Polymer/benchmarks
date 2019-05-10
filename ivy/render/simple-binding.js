import * as bench from '/bench.js';

import {DATA, DATA_IT} from '../../common/render/simple-data.js';
import * as ivy from '../ivy.bundle.js';

const template = function template(rf, instance) {
  if (rf & ivy.RenderFlags.Create) {
    ivy.elementStart(0, 'span', []);
    ivy.text(1, 'HELLO ');
    ivy.text(2);
    ivy.elementEnd();
    ivy.elementStart(3, 'span', []);
    ivy.text(4, 'BYE ');
    ivy.text(5);
    ivy.elementEnd();
    ivy.elementStart(6, 'span', []);
    ivy.text(7, 'HELLO ');
    ivy.text(8);
    ivy.elementEnd();
    ivy.elementStart(9, 'span', []);
    ivy.text(10, 'BYE ');
    ivy.text(11);
    ivy.elementEnd();
    ivy.elementStart(12, 'span', []);
    ivy.text(13);
    ivy.elementEnd();
    ivy.elementStart(14, 'span', []);
    ivy.text(15);
    ivy.elementEnd();
  }
  if (rf & ivy.RenderFlags.Update) {
    ivy.textBinding(2, ivy.bind(instance.data.name));
    ivy.textBinding(5, ivy.bind(instance.data.name));
    ivy.textBinding(8, ivy.bind(instance.data.name2));
    ivy.textBinding(11, ivy.bind(instance.data.name2));
    ivy.textBinding(13, ivy.bind(instance.data.name));
    ivy.textBinding(15, ivy.bind(instance.data.name2));
  }
};

const constCount = 16;
const varCount = 6;

const update = new URL(window.location.href).searchParams.has('update');

if (update) {
  const host = ivy.renderTemplate(
      document.body,
      template,
      constCount,
      varCount,
      {data: DATA},
      ivy.domRendererFactory3);

  bench.start();
  ivy.renderTemplate(
      document.body,
      template,
      constCount,
      varCount,
      {data: DATA_IT[0]},
      ivy.domRendererFactory3,
      host);
  bench.stop();

} else {
  bench.start();
  ivy.renderTemplate(
      document.body,
      template,
      constCount,
      varCount,
      {data: DATA},
      ivy.domRendererFactory3)
  bench.stop();
}
