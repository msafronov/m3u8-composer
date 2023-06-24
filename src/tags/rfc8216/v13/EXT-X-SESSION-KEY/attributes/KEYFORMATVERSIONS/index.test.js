import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SESSION_KEY } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY';
import { EXT_X_SESSION_KEY_ID, KEYFORMATVERSIONS_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { KEYFORMATVERSIONS } from './index';

describe('v13 KEYFORMATVERSIONS', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_KEY({
                ...KEYFORMATVERSIONS(),
            }),
        });

        expect(schema[EXT_X_SESSION_KEY_ID][KEYFORMATVERSIONS_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_KEY({
                ...KEYFORMATVERSIONS(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SESSION-KEY:KEYFORMATVERSIONS="1/2/5"\nsegment1.060.ts';

        parser(data, schema);

        expect(schema.playlist[EXT_X_SESSION_KEY_ID][KEYFORMATVERSIONS_ID]).toBe('1/2/5');
    });
});
