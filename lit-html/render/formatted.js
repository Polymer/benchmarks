import * as bench from '/bench.js';

import {longStrings} from '../../common/render/strings.js';
import {unsafeHTML} from '../node_modules/lit-html/directives/unsafe-html.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

import {initTemplatePolyfill} from '../node_modules/lit-html/polyfills/template_polyfill.js';
if (new URL(window.location.href).searchParams.has('tp')) {
  initTemplatePolyfill(true);
};

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

const unsafe = new URL(window.location.href).searchParams.has('unsafe');

let template;
if (unsafe) {
  template = function template(instance) {
    return instance.data.map(
        (str, i) => html`<span>${
            unsafeHTML(
                str.simpleText ? str.simpleText :
                                 str.runs
                                     .map(
                                         (run, i) => run.navigationEndpoint ?
                                             `<a href="#">${run.text}</a>` :
                                             `<span class=${getStyle(run)}>${
                                                 run.text}</span>`)
                                     .join(''))}</span>`);
  };
} else {
  template = function template(instance) {
    return instance.data.map(
        (str, i) => html`<span>${
            str.simpleText ? str.simpleText :
                             str.runs.map(
                                 (run, i) => run.navigationEndpoint ?
                                     html`<a href="#">${run.text}</a>` :
                                     html`<span class=${getStyle(run)}>${
                                         run.text}</span>`)}</span>`);
  };
}


const update = new URL(window.location.href).searchParams.has('update');

if (update) {
  render(template({data: longStrings}), document.body);
  bench.start();
  render(template({data: longStrings.reverse()}), document.body);
  bench.stop();

} else {
  bench.start();
  render(template({data: longStrings}), document.body);
  bench.stop();
}
