import * as bench from '/bench.js';
import {letters} from '../../common/render/letters.js';
import * as ivy from '../ivy.bundle.js';

const template = function template(rf, instance) {
  if (rf & ivy.RenderFlags.Create) {
    ivy.container(0);
  }
  if (rf & ivy.RenderFlags.Update) {
    ivy.containerRefreshStart(0);
    instance.data.letters.forEach((object, i) => {
      let rf1 = ivy.embeddedViewStart(1, 4, 0);
      if (rf1 & ivy.RenderFlags.Create) {
        ivy.elementStart(0, 'span', []);
        ivy.container(1);
        ivy.elementEnd();
      }
      if (rf1 & ivy.RenderFlags.Update) {
        ivy.containerRefreshStart(1);
        if (i % 2 === 0) {
          let rf2 = ivy.embeddedViewStart(2, 2, 1);
          if (rf2 & ivy.RenderFlags.Create) {
            ivy.elementStart(0, 'b', []);
            ivy.text(1);
            ivy.elementEnd();
          }
          if (rf2 & ivy.RenderFlags.Update) {
            ivy.textBinding(1, ivy.bind(object));
          }
          ivy.embeddedViewEnd();
        } else {
          let rf3 = ivy.embeddedViewStart(3, 2, 1);
          if (rf3 & ivy.RenderFlags.Create) {
            ivy.elementStart(0, 'i', []);
            ivy.text(1);
            ivy.elementEnd();
          }
          if (rf3 & ivy.RenderFlags.Update) {
            ivy.textBinding(1, ivy.bind(object));
          }
          ivy.embeddedViewEnd();
        }
        ivy.containerRefreshEnd();
      }
      ivy.embeddedViewEnd();
    })
    ivy.containerRefreshEnd();
  };
};

const constCount = 2;
const varCount = 0;

bench.start();
ivy.renderTemplate(
    document.body,
    template,
    constCount,
    varCount,
    {data: {letters}},
    ivy.domRendererFactory3);
bench.stop();
