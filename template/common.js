import * as bench from '/bench.js';

export const runTemplateBenchmark = () => {
  bench.start();

  const template = document.createElement('template');
  template.innerHTML = `
    <div>I came from a <b>template</b></div>
    <div>I <i>also</i> came from a <b>template</b></div>
  `;

  for (let i = 0; i < 100; i++) {
    const clone = document.importNode(template.content, true);
    document.body.appendChild(clone);
  }

  bench.stop();
};
