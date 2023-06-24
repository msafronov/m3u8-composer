import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, CHANNELS_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { CHANNELS } from './index';

describe('v13 CHANNELS', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...CHANNELS(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][CHANNELS_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...CHANNELS(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA:CHANNELS="a1/a2/a3"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][CHANNELS_ID]).toStrictEqual([
            'a1',
            'a2',
            'a3',
        ]);
    });
});
