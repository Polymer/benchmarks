import * as bench from '/bench.js';
import {longStrings} from '../../common/render/strings.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

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

function template(instance) {
  return instance.data.map(
      (str, i) => html`<span>${
          str.simpleText ? str.simpleText :
                           str.runs.map(
                               (run, i) => run.navigationEndpoint ?
                                   html`<a href="#">${run.text}</a>` :
                                   html`<span class=${getStyle(run)}>${
                                       run.text}</span>`)}</span>`);
};

bench.start();
render(template({data: longStrings}), document.body);
bench.stop();
