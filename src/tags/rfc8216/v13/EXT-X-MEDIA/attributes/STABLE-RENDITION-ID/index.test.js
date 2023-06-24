import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, STABLE_RENDITION_ID_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { STABLE_RENDITION_ID } from './index';

describe('v13 STABLE-RENDITION-ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...STABLE_RENDITION_ID(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][STABLE_RENDITION_ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...STABLE_RENDITION_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA:STABLE-RENDITION-ID="id2"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][STABLE_RENDITION_ID_ID]).toBe('id2');
    });
});
