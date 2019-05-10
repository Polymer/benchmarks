import * as bench from '/bench.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

const template = function template(instance) {
  return html`
          <div id="odd"><div id="dismissable"><div height="118" hovered=${
      true} use-hovered-property=${
      false} width="210"></div><div id="details"><a class="yt-simple-endpoint" href=${
      instance.data
          .navigationEndpoint}><h3><div id="top-standalone-badge"></div><span id="video-title" title=${
      instance.data.title} aria-label=${
      instance.data
          .title}><span>A SAMPLE TEXT</span></span></h3><div class="grid"><span>MORE SAMPLE TEXT</span></div></a><div id="menu"></div></div></div><div id="dismissed"><div id="dismissed-content"></div></div></div>
           <div id="even"><div id="dismissable"><div height="118" hovered=${
      true} use-hovered-property=${
      false} width="210"></div><div id="details"><a class="yt-simple-endpoint" href=${
      instance.data
          .navigationEndpoint}><h3><div id="top-standalone-badge"></div><span id="video-title" title=${
      instance.data.title} aria-label=${
      instance.data
          .aria}><span>A <div>SAMPLE</div>TEXT</span></span></h3><div class="grid"><span>MORE <span>SAMPLE</span> TEXT</span></div></a><div id="menu"></div></div></div><div id="dismissed1"><div id="dismissed-content">1</div></div><div id="dismissed2"><div id="dismissed-content">2</div></div><div id="dismissed3"><div id="dismissed-content">3</div></div></div>
           <div id="odd"><div id="dismissable"><div height="118" hovered=${
      true} use-hovered-property=${
      false} width="210"></div><div id="details"><a class="yt-simple-endpoint" href=${
      instance.data
          .navigationEndpoint}><h3><div id="top-standalone-badge"></div><span id="video-title" title=${
      instance.data.title} aria-label=${
      instance.data
          .title}><span>A SAMPLE TEXT</span></span></h3><div class="grid"><span>MORE SAMPLE TEXT</span></div></a><div id="menu"></div></div></div><div id="dismissed"><div id="dismissed-content"></div></div></div>
           <div id="even"><div id="dismissable"><div height="118" hovered=${
      true} use-hovered-property=${
      false} width="210"></div><div id="details"><a class="yt-simple-endpoint" href=${
      instance.data
          .navigationEndpoint}><h3><div id="top-standalone-badge"></div><span id="video-title" title=${
      instance.data.title} aria-label=${
      instance.data
          .aria}><span>A <div>SAMPLE</div>TEXT</span></span></h3><div class="grid"><span>MORE <span>SAMPLE</span> TEXT</span></div></a><div id="menu"></div></div></div><div id="dismissed1"><div id="dismissed-content">1</div></div><div id="dismissed2"><div id="dismissed-content">2</div></div><div id="dismissed3"><div id="dismissed-content">3</div></div></div>`;
}

const data = {
  data: {
    'title': 'A simple title',
    'aria': 'A simple aria',
    'navigationEndpoint': '#test'
  },
};

bench.start();
render(template(data), document.body);
bench.stop();
