import { describe, expect, test } from 'vitest';
import { EXTINF_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';

import { EXTINF } from './index';

describe('v13 #EXTINF', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXTINF(),
        });

        const data = '#EXTM3U\n#EXTINF:0.933600,rotated90\nsegment1.060.ts';

        interpreter(data, schema);

        expect(schema.mediaSegments[0]).toStrictEqual({
            [EXTINF_ID]: {
                duration: '0.933600',
                title: 'rotated90',
            },
            URI: 'segment1.060.ts',
        });
    });

    test('should not save the value into the playlist result without an URI', () => {
        const schema = ParserSchema({
            ...EXTINF(),
        });

        const data = '#EXTM3U\n#EXTINF:0.933600,';

        interpreter(data, schema);

        expect(schema.mediaSegments[EXTINF_ID]).toBe(undefined);
    });

    test('should not save the value to all Media Segments', () => {
        const schema = ParserSchema({
            ...EXTINF(),
        });

        const data = '#EXTM3U\n#EXTINF:4.00008,\nfile.001.ts\n#EXT-X-BYTERANGE:16920\nfile.002.ts';

        interpreter(data, schema);

        expect(schema.mediaSegments[1][EXTINF_ID]).not.toBeDefined();
    });
});
