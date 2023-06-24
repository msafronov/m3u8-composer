import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, INSTREAM_ID_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { INSTREAM_ID } from './index';

describe('v13 INSTREAM-ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...INSTREAM_ID(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][INSTREAM_ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...INSTREAM_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA:INSTREAM-ID="CC1"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][INSTREAM_ID_ID]).toBe('CC1');
    });
});
