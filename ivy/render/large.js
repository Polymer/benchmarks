import * as bench from '/bench.js';
import * as ivy from '../ivy.bundle.js';

const unwrapSafe = (x) => x;

const template = function template(rf, instance) {
  if (rf & ivy.RenderFlags.Create) {
    ivy.elementStart(0, 'div', ['id', 'odd']);
    ivy.elementStart(1, 'div', ['id', 'dismissable']);
    ivy.elementStart(2, 'div', [
      'height',
      '118',
      'hovered',
      unwrapSafe(true),
      'use-hovered-property',
      unwrapSafe(false),
      'width',
      '210'
    ]);
    ivy.elementEnd();
    ivy.elementStart(3, 'div', ['id', 'details']);
    ivy.elementStart(4, 'a', [
      'class',
      'yt-simple-endpoint',
      'href',
      unwrapSafe(instance.data.navigationEndpoint)
    ]);
    ivy.elementStart(5, 'h3', []);
    ivy.elementStart(6, 'div', ['id', 'top-standalone-badge']);
    ivy.elementEnd();
    ivy.elementStart(7, 'span', [
      'id',
      'video-title',
      'title',
      unwrapSafe(instance.data.title),
      'aria-label',
      unwrapSafe(instance.data.title)
    ]);
    ivy.elementStart(8, 'span', []);
    ivy.text(9, 'A SAMPLE TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(10, 'div', ['class', 'grid']);
    ivy.elementStart(11, 'span', []);
    ivy.text(12, 'MORE SAMPLE TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(13, 'div', ['id', 'menu']);
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(14, 'div', ['id', 'dismissed']);
    ivy.elementStart(15, 'div', ['id', 'dismissed-content']);
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(16, 'div', ['id', 'even']);
    ivy.elementStart(17, 'div', ['id', 'dismissable']);
    ivy.elementStart(18, 'div', [
      'height',
      '118',
      'hovered',
      unwrapSafe(true),
      'use-hovered-property',
      unwrapSafe(false),
      'width',
      '210'
    ]);
    ivy.elementEnd();
    ivy.elementStart(19, 'div', ['id', 'details']);
    ivy.elementStart(20, 'a', [
      'class',
      'yt-simple-endpoint',
      'href',
      unwrapSafe(instance.data.navigationEndpoint)
    ]);
    ivy.elementStart(21, 'h3', []);
    ivy.elementStart(22, 'div', ['id', 'top-standalone-badge']);
    ivy.elementEnd();
    ivy.elementStart(23, 'span', [
      'id',
      'video-title',
      'title',
      unwrapSafe(instance.data.title),
      'aria-label',
      unwrapSafe(instance.data.aria)
    ]);
    ivy.elementStart(24, 'span', []);
    ivy.text(25, 'A ');
    ivy.elementStart(26, 'div', []);
    ivy.text(27, 'SAMPLE');
    ivy.elementEnd();
    ivy.text(28, ' TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(29, 'div', ['class', 'grid']);
    ivy.elementStart(30, 'span', []);
    ivy.text(31, 'MORE ');
    ivy.elementStart(32, 'span', []);
    ivy.text(33, 'SAMPLE');
    ivy.elementEnd();
    ivy.text(34, ' TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(35, 'div', ['id', 'menu']);
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(36, 'div', ['id', 'dismissed1']);
    ivy.elementStart(37, 'div', ['id', 'dismissed-content']);
    ivy.text(38, '1');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(39, 'div', ['id', 'dismissed2']);
    ivy.elementStart(40, 'div', ['id', 'dismissed-content']);
    ivy.text(41, '2');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(42, 'div', ['id', 'dismissed3']);
    ivy.elementStart(43, 'div', ['id', 'dismissed-content']);
    ivy.text(44, '3');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(45, 'div', ['id', 'odd']);
    ivy.elementStart(46, 'div', ['id', 'dismissable']);
    ivy.elementStart(47, 'div', [
      'height',
      '118',
      'hovered',
      unwrapSafe(true),
      'use-hovered-property',
      unwrapSafe(false),
      'width',
      '210'
    ]);
    ivy.elementEnd();
    ivy.elementStart(48, 'div', ['id', 'details']);
    ivy.elementStart(49, 'a', [
      'class',
      'yt-simple-endpoint',
      'href',
      unwrapSafe(instance.data.navigationEndpoint)
    ]);
    ivy.elementStart(50, 'h3', []);
    ivy.elementStart(51, 'div', ['id', 'top-standalone-badge']);
    ivy.elementEnd();
    ivy.elementStart(52, 'span', [
      'id',
      'video-title',
      'title',
      unwrapSafe(instance.data.title),
      'aria-label',
      unwrapSafe(instance.data.title)
    ]);
    ivy.elementStart(53, 'span', []);
    ivy.text(54, 'A SAMPLE TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(55, 'div', ['class', 'grid']);
    ivy.elementStart(56, 'span', []);
    ivy.text(57, 'MORE SAMPLE TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(58, 'div', ['id', 'menu']);
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(59, 'div', ['id', 'dismissed']);
    ivy.elementStart(60, 'div', ['id', 'dismissed-content']);
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(61, 'div', ['id', 'even']);
    ivy.elementStart(62, 'div', ['id', 'dismissable']);
    ivy.elementStart(63, 'div', [
      'height',
      '118',
      'hovered',
      unwrapSafe(true),
      'use-hovered-property',
      unwrapSafe(false),
      'width',
      '210'
    ]);
    ivy.elementEnd();
    ivy.elementStart(64, 'div', ['id', 'details']);
    ivy.elementStart(65, 'a', [
      'class',
      'yt-simple-endpoint',
      'href',
      unwrapSafe(instance.data.navigationEndpoint)
    ]);
    ivy.elementStart(66, 'h3', []);
    ivy.elementStart(67, 'div', ['id', 'top-standalone-badge']);
    ivy.elementEnd();
    ivy.elementStart(68, 'span', [
      'id',
      'video-title',
      'title',
      unwrapSafe(instance.data.title),
      'aria-label',
      unwrapSafe(instance.data.aria)
    ]);
    ivy.elementStart(69, 'span', []);
    ivy.text(70, 'A ');
    ivy.elementStart(71, 'div', []);
    ivy.text(72, 'SAMPLE');
    ivy.elementEnd();
    ivy.text(73, ' TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(74, 'div', ['class', 'grid']);
    ivy.elementStart(75, 'span', []);
    ivy.text(76, 'MORE ');
    ivy.elementStart(77, 'span', []);
    ivy.text(78, 'SAMPLE');
    ivy.elementEnd();
    ivy.text(79, ' TEXT');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(80, 'div', ['id', 'menu']);
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(81, 'div', ['id', 'dismissed1']);
    ivy.elementStart(82, 'div', ['id', 'dismissed-content']);
    ivy.text(83, '1');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(84, 'div', ['id', 'dismissed2']);
    ivy.elementStart(85, 'div', ['id', 'dismissed-content']);
    ivy.text(86, '2');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementStart(87, 'div', ['id', 'dismissed3']);
    ivy.elementStart(88, 'div', ['id', 'dismissed-content']);
    ivy.text(89, '3');
    ivy.elementEnd();
    ivy.elementEnd();
    ivy.elementEnd();
  }
};

const constCount = 90;
const varCount = 0;

const data = {
  data: {
    'title': 'A simple title',
    'aria': 'A simple aria',
    'navigationEndpoint': '#test'
  },
};

bench.start();
ivy.renderTemplate(
    document.body,
    template,
    constCount,
    varCount,
    {data},
    ivy.domRendererFactory3);
bench.stop();
