import * as bench from '/bench.js';
import {longStrings} from '../../common/render/strings.js';
import * as ivy from '../ivy.bundle.js';

function getStyle(run) {
  let classes = new Array();
  if (run.bold) {
    classes.push('bold');
  }
  if (run.deemphasize) {
    classes.push('deemphasize');
  }
  if (run.italics) {
    classes.push('italics');
  }
  if (run.strikethrough) {
    classes.push('strikethrough');
  }
  return classes.join(' ');
}

function template(rf, instance) {
  if (rf & ivy.RenderFlags.Create) {
    ivy.container(0);
  }
  if (rf & ivy.RenderFlags.Update) {
    ivy.containerRefreshStart(0);
    instance.data.forEach((str, i) => {
      let rf1 = ivy.embeddedViewStart(1, 4, 0);
      if (rf1 & ivy.RenderFlags.Create) {
        ivy.elementStart(0, 'span', []);
        ivy.container(1);
        ivy.elementEnd();
      }
      if (rf1 & ivy.RenderFlags.Update) {
        ivy.containerRefreshStart(1);
        if (str.simpleText) {
          let rf2 = ivy.embeddedViewStart(2, 1, 1);
          if (rf2 & ivy.RenderFlags.Create) {
            ivy.text(0);
          }
          if (rf2 & ivy.RenderFlags.Update) {
            ivy.textBinding(0, ivy.bind(str.simpleText));
          }
          ivy.embeddedViewEnd();
        } else {
          let rf3 = ivy.embeddedViewStart(3, 2, 0);
          if (rf3 & ivy.RenderFlags.Create) {
            ivy.container(0);
          }
          if (rf3 & ivy.RenderFlags.Update) {
            ivy.containerRefreshStart(0);
            str.runs.forEach((run, i) => {
              let rf1 = ivy.embeddedViewStart(1, 3, 0);
              if (rf1 & ivy.RenderFlags.Create) {
                ivy.container(0);
              }
              if (rf1 & ivy.RenderFlags.Update) {
                ivy.containerRefreshStart(0);
                if (run.navigationEndpoint) {
                  let rf1 = ivy.embeddedViewStart(1, 2, 1);
                  if (rf1 & ivy.RenderFlags.Create) {
                    ivy.elementStart(0, 'a', ['href', '#']);
                    ivy.text(1);
                    ivy.elementEnd();
                  }
                  if (rf1 & ivy.RenderFlags.Update) {
                    ivy.textBinding(1, ivy.bind(run.text));
                  }
                  ivy.embeddedViewEnd();
                } else {
                  let rf2 = ivy.embeddedViewStart(2, 2, 1);
                  if (rf2 & ivy.RenderFlags.Create) {
                    ivy.elementStart(
                        0, 'span', ['class', unwrapSafe(getStyle(run))]);
                    ivy.text(1);
                    ivy.elementEnd();
                  }
                  if (rf2 & ivy.RenderFlags.Update) {
                    ivy.textBinding(1, ivy.bind(run.text));
                  }
                  ivy.embeddedViewEnd();
                }
                ivy.containerRefreshEnd();
              }
              ivy.embeddedViewEnd();
            })
            ivy.containerRefreshEnd();
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
    {data: longStrings},
    ivy.domRendererFactory3);
bench.stop();
