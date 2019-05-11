import * as bench from '/bench.js';

import {longStrings} from '../../common/render/strings.js';
import {unsafeHTML} from '../node_modules/lit-html/directives/unsafe-html.js';
import {html, render, directive} from '../node_modules/lit-html/lit-html.js';

function getStyle(run) {
  let className = '';
  if (run.bold) {
    className += ' bold';
  }
  if (run.deemphasize) {
    className += ' deemphasize';
  }
  if (run.italics) {
    className += ' italics';
  }
  if (run.strikethrough) {
    className += ' strikethrough';
  }
  return className;
}

const previousValues = new WeakMap();

export const formatString = directive((str) => (part) => {

  const previousValue = previousValues.get(part);
  // assumes formatted strings objects are immutable
  if (previousValue !== undefined && str === previousValue) {
    return;
  }

  const span = document.createElement('span');
  if (str.simpleText !== undefined) {
    span.innerText = str.simpleText;
  } else {
    let node;
    for (const run of str.runs) {
      if (run.navigationEndpoint !== undefined) {
        node = document.createElement('a');
        node.href = '#';
      } else {
        node = document.createElement('span');
        node.className = getStyle(run);
      }
      node.innerText = run.text;
      span.appendChild(node);
    }
  }
  part.setValue(span);
  previousValues.set(part, str);
});

const unsafe = new URL(window.location.href).searchParams.has('unsafe');
const format = new URL(window.location.href).searchParams.has('format');

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
                                             `<span class="${getStyle(run)}">${
                                                 run.text}</span>`)
                                     .join(''))}</span>`);
  };
} else if (format) {
  template = (instance) => instance.data.map((str, i) => formatString(str));
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
