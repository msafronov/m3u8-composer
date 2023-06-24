import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, GROUP_ID_ID } from '@tags/const';

import { GROUP_ID } from './index';
import { parser } from '@parser/m3u8-to-schema';

describe('v13 GROUP-ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...GROUP_ID(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][GROUP_ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...GROUP_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA:GROUP-ID="stereo"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][GROUP_ID_ID]).toBe('stereo');
    });
});
