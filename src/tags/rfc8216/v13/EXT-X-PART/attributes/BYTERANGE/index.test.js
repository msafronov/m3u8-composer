import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_PART } from '@tags/rfc8216/v13/EXT-X-PART';
import { EXT_X_PART_ID, BYTERANGE_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { BYTERANGE } from './index';

describe('v13 BYTERANGE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_PART({
                ...BYTERANGE(),
            }),
        });

        expect(schema[EXT_X_PART_ID][BYTERANGE_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_PART({
                ...BYTERANGE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PART:BYTERANGE="128@0"\nsegment1.060.ts';

        parser(data, schema);

        expect(schema.mediaSegments[0][EXT_X_PART_ID][0][BYTERANGE_ID]).toBe('128@0');
    });
});
