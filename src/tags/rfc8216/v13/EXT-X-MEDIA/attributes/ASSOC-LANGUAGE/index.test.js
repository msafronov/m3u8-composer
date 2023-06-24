import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, ASSOC_LANGUAGE_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { ASSOC_LANGUAGE } from './index';

describe('v13 ASSOC-LANGUAGE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...ASSOC_LANGUAGE(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][ASSOC_LANGUAGE_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...ASSOC_LANGUAGE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA:ASSOC-LANGUAGE="en"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][ASSOC_LANGUAGE_ID]).toBe('en');
    });
});
