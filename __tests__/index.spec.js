(function () {
  require('../src');

  const fs = require('fs');

  describe('api.basic test', () => {
    test('nx.splitlines', function () {
      const str = fs.readFileSync('./__tests__/E410.srt').toString();
      const lines = nx.splitlines(str);

      expect(lines).toEqual([
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
      ]);
    });
  });
})();
