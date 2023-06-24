import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_BITRATE_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { EXT_X_BITRATE } from './index';

describe('v13 #EXT-X-BITRATE', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_BITRATE(),
        });

        const data = '#EXTM3U\n#EXT-X-BITRATE:85000';

        interpreter(data, schema);

        expect(schema[EXT_X_BITRATE_ID].data).toStrictEqual([{
            value: '85000',
            row: 1,
            col: 0,
        }]);
    });

    test('should save the value into the Media Segments result', () => {
        const schema = ParserSchema({
            ...EXT_X_BITRATE(),
        });

        const data = '#EXTM3U\n#EXT-X-BITRATE:85000\nfile.001.ts';

        interpreter(data, schema);

        expect(schema.mediaSegments[0][EXT_X_BITRATE_ID]).toBe('85000');
    });

    test('should override to the last value into the Media Segments result', () => {
        const schema = ParserSchema({
            ...EXT_X_BITRATE(),
        });

        const data = '#EXTM3U\n#EXT-X-BITRATE:85000\n#EXT-X-BITRATE:80000\nfile.000.ts\n\n';

        interpreter(data, schema);

        expect(schema.mediaSegments[0][EXT_X_BITRATE_ID]).toBe('80000');
    });
});
