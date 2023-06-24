import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SESSION_DATA } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA';
import { EXT_X_SESSION_DATA_ID, LANGUAGE_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { LANGUAGE } from './index';

describe('v13 LANGUAGE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...LANGUAGE(),
            }),
        });

        expect(schema[EXT_X_SESSION_DATA_ID][LANGUAGE_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...LANGUAGE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SESSION-DATA:LANGUAGE="en"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_SESSION_DATA_ID][0][LANGUAGE_ID]).toBe('en');
    });
});
