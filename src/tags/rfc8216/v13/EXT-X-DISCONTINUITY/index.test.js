import { describe, expect, test } from 'vitest';
import { EXT_X_DISCONTINUITY_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';

import { EXT_X_DISCONTINUITY } from './index';

describe('v13 #EXT-X-DISCONTINUITY', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_DISCONTINUITY(),
        });

        const data = '#EXTM3U\n#EXT-X-DISCONTINUITY';

        interpreter(data, schema);

        expect(schema[EXT_X_DISCONTINUITY_ID].data).toStrictEqual([{
            value: true,
            row: 1,
            col: 0,
        }]);
    });

    test('should not save the value into the playlist result', () => {
        const schema = ParserSchema({
            ...EXT_X_DISCONTINUITY(),
        });

        const data = '#EXTM3U\n#EXT-X-DISCONTINUITY';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_DISCONTINUITY_ID]).toBe(undefined);
    });

    test('should save the value into the Media Segments result', () => {
        const schema = ParserSchema({
            ...EXT_X_DISCONTINUITY(),
        });

        const data = '#EXTM3U\n#EXT-X-DISCONTINUITY\nfile.001.ts';

        interpreter(data, schema);

        expect(schema.mediaSegments[0][EXT_X_DISCONTINUITY_ID]).toBe(true);
    });

    test('should not save the value to all Media Segments', () => {
        const schema = ParserSchema({
            ...EXT_X_DISCONTINUITY(),
        });

        const data = '#EXTM3U\n#EXT-X-DISCONTINUITY\nfile.001.ts\n#EXTINF:4.00008,\nfile.002.ts';

        interpreter(data, schema);

        expect(schema.mediaSegments[1][EXT_X_DISCONTINUITY_ID]).not.toBeDefined();
    });
});
