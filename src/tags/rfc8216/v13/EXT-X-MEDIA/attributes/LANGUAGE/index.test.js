import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, LANGUAGE_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { LANGUAGE } from './index';

describe('v13 LAST-PART', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...LANGUAGE(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][LANGUAGE_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...LANGUAGE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA:LANGUAGE="en"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][LANGUAGE_ID]).toBe('en');
    });
});
