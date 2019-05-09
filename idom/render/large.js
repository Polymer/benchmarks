import * as bench from '/bench.js';

const idom = window.IncrementalDOM;

const unwrapSafe = (x) => x;

const template = function template(instance) {
  idom.elementOpen('div', '', ['id', 'odd']);
  idom.elementOpen('div', '', ['id', 'dismissable']);
  idom.elementOpen('div', '', [
    'height',
    '118',
    'hovered',
    unwrapSafe(true),
    'use-hovered-property',
    unwrapSafe(false),
    'width',
    '210'
  ]);
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'details']);
  idom.elementOpen('a', '', [
    'class',
    'yt-simple-endpoint',
    'href',
    unwrapSafe(instance.data.navigationEndpoint)
  ]);
  idom.elementOpen('h3', '', null);
  idom.elementOpen('div', '', ['id', 'top-standalone-badge']);
  idom.elementClose('div');
  idom.elementOpen('span', '', [
    'id',
    'video-title',
    'title',
    unwrapSafe(instance.data.title),
    'aria-label',
    unwrapSafe(instance.data.title)
  ]);
  idom.elementOpen('span', '', null);
  idom.text('A SAMPLE TEXT');
  idom.elementClose('span');
  idom.elementClose('span');
  idom.elementClose('h3');
  idom.elementOpen('div', '', ['class', 'grid']);
  idom.elementOpen('span', '', null);
  idom.text('MORE SAMPLE TEXT');
  idom.elementClose('span');
  idom.elementClose('div');
  idom.elementClose('a');
  idom.elementOpen('div', '', ['id', 'menu']);
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'even']);
  idom.elementOpen('div', '', ['id', 'dismissable']);
  idom.elementOpen('div', '', [
    'height',
    '118',
    'hovered',
    unwrapSafe(true),
    'use-hovered-property',
    unwrapSafe(false),
    'width',
    '210'
  ]);
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'details']);
  idom.elementOpen('a', '', [
    'class',
    'yt-simple-endpoint',
    'href',
    unwrapSafe(instance.data.navigationEndpoint)
  ]);
  idom.elementOpen('h3', '', null);
  idom.elementOpen('div', '', ['id', 'top-standalone-badge']);
  idom.elementClose('div');
  idom.elementOpen('span', '', [
    'id',
    'video-title',
    'title',
    unwrapSafe(instance.data.title),
    'aria-label',
    unwrapSafe(instance.data.aria)
  ]);
  idom.elementOpen('span', '', null);
  idom.text('A ');
  idom.elementOpen('div', '', null);
  idom.text('SAMPLE');
  idom.elementClose('div');
  idom.text(' TEXT');
  idom.elementClose('span');
  idom.elementClose('span');
  idom.elementClose('h3');
  idom.elementOpen('div', '', ['class', 'grid']);
  idom.elementOpen('span', '', null);
  idom.text('MORE ');
  idom.elementOpen('span', '', null);
  idom.text('SAMPLE');
  idom.elementClose('span');
  idom.text(' TEXT');
  idom.elementClose('span');
  idom.elementClose('div');
  idom.elementClose('a');
  idom.elementOpen('div', '', ['id', 'menu']);
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed1']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.text('1');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed2']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.text('2');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed3']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.text('3');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'odd']);
  idom.elementOpen('div', '', ['id', 'dismissable']);
  idom.elementOpen('div', '', [
    'height',
    '118',
    'hovered',
    unwrapSafe(true),
    'use-hovered-property',
    unwrapSafe(false),
    'width',
    '210'
  ]);
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'details']);
  idom.elementOpen('a', '', [
    'class',
    'yt-simple-endpoint',
    'href',
    unwrapSafe(instance.data.navigationEndpoint)
  ]);
  idom.elementOpen('h3', '', null);
  idom.elementOpen('div', '', ['id', 'top-standalone-badge']);
  idom.elementClose('div');
  idom.elementOpen('span', '', [
    'id',
    'video-title',
    'title',
    unwrapSafe(instance.data.title),
    'aria-label',
    unwrapSafe(instance.data.title)
  ]);
  idom.elementOpen('span', '', null);
  idom.text('A SAMPLE TEXT');
  idom.elementClose('span');
  idom.elementClose('span');
  idom.elementClose('h3');
  idom.elementOpen('div', '', ['class', 'grid']);
  idom.elementOpen('span', '', null);
  idom.text('MORE SAMPLE TEXT');
  idom.elementClose('span');
  idom.elementClose('div');
  idom.elementClose('a');
  idom.elementOpen('div', '', ['id', 'menu']);
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'even']);
  idom.elementOpen('div', '', ['id', 'dismissable']);
  idom.elementOpen('div', '', [
    'height',
    '118',
    'hovered',
    unwrapSafe(true),
    'use-hovered-property',
    unwrapSafe(false),
    'width',
    '210'
  ]);
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'details']);
  idom.elementOpen('a', '', [
    'class',
    'yt-simple-endpoint',
    'href',
    unwrapSafe(instance.data.navigationEndpoint)
  ]);
  idom.elementOpen('h3', '', null);
  idom.elementOpen('div', '', ['id', 'top-standalone-badge']);
  idom.elementClose('div');
  idom.elementOpen('span', '', [
    'id',
    'video-title',
    'title',
    unwrapSafe(instance.data.title),
    'aria-label',
    unwrapSafe(instance.data.aria)
  ]);
  idom.elementOpen('span', '', null);
  idom.text('A ');
  idom.elementOpen('div', '', null);
  idom.text('SAMPLE');
  idom.elementClose('div');
  idom.text(' TEXT');
  idom.elementClose('span');
  idom.elementClose('span');
  idom.elementClose('h3');
  idom.elementOpen('div', '', ['class', 'grid']);
  idom.elementOpen('span', '', null);
  idom.text('MORE ');
  idom.elementOpen('span', '', null);
  idom.text('SAMPLE');
  idom.elementClose('span');
  idom.text(' TEXT');
  idom.elementClose('span');
  idom.elementClose('div');
  idom.elementClose('a');
  idom.elementOpen('div', '', ['id', 'menu']);
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed1']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.text('1');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed2']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.text('2');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementOpen('div', '', ['id', 'dismissed3']);
  idom.elementOpen('div', '', ['id', 'dismissed-content']);
  idom.text('3');
  idom.elementClose('div');
  idom.elementClose('div');
  idom.elementClose('div');
};

const data = {
  data: {
    'title': 'A simple title',
    'aria': 'A simple aria',
    'navigationEndpoint': '#test'
  },
};

bench.start();
idom.patch(document.body, () => template(data));
bench.stop();
