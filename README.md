# next-splitlines
> Split string by `\r\n` or `\n` or `\r` for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-splitlines
```

## usage
```js
import '@jswork/next-splitlines';

const str = `1
00:00:03,776 --> 00:00:09,152
Technology trends may push Silicon Valley back to the future.

2
00:00:09,152 --> 00:00:19,009
Carver Mead, a pioneer in integrated circuits and a professor of computer science at the California Institute of Technology,

3
00:00:19,009 --> 00:00:33,473
notes there are now work-stations that enable engineers to design, test and produce chips right on their desks, much the way an editor creates a newsletter on a Macintosh.

`;

const liens = nx.splitlines(str);

/*
[
  '﻿1',
  '00:00:03,776 --> 00:00:09,152',
  'Technology trends may push Silicon Valley back to the future.',
  '',
  '2',
  '00:00:09,152 --> 00:00:19,009',
  'Carver Mead, a pioneer in integrated circuits and a professor of computer science at the California Institute of Technology,',
  '',
  '3',
  '00:00:19,009 --> 00:00:33,473',
  'notes there are now work-stations that enable engineers to design, test and produce chips right on their desks, much the way an editor creates a newsletter on a Macintosh.',
  '',
  ''
];
*/
```

## resources
- https://stackoverflow.com/questions/21895233/how-in-node-to-split-string-by-newline-n

## license
Code released under [the MIT license](https://github.com/afeiship/next-splitlines/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-splitlines
[version-url]: https://npmjs.org/package/@jswork/next-splitlines

[license-image]: https://img.shields.io/npm/l/@jswork/next-splitlines
[license-url]: https://github.com/afeiship/next-splitlines/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-splitlines
[size-url]: https://github.com/afeiship/next-splitlines/blob/master/dist/next-splitlines.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-splitlines
[download-url]: https://www.npmjs.com/package/@jswork/next-splitlines
