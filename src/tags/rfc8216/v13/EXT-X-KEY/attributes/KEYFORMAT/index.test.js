import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_KEY } from '@tags/rfc8216/v13/EXT-X-KEY';
import { EXT_X_KEY_ID, KEYFORMAT_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { KEYFORMAT } from './index';

describe('v13 KEYFORMAT', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_KEY({
                ...KEYFORMAT(),
            }),
        });

        expect(schema[EXT_X_KEY_ID][KEYFORMAT_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_KEY({
                ...KEYFORMAT(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-KEY:KEYFORMAT="com.apple.streamingkeydelivery"\nsegment1.060.ts';

        parser(data, schema);

        expect(schema.mediaSegments[0][EXT_X_KEY_ID][0][KEYFORMAT_ID]).toBe('com.apple.streamingkeydelivery');
    });
});
