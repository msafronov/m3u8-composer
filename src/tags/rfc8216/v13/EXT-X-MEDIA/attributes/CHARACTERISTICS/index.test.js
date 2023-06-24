import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, CHARACTERISTICS_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { CHARACTERISTICS } from './index';

describe('v13 CHARACTERISTICS', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...CHARACTERISTICS(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][CHARACTERISTICS_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...CHARACTERISTICS(),
            }),
        });

        let data = '#EXTM3U\n';

        data += '#EXT-X-MEDIA:CHARACTERISTICS="';

        data += 'public.accessibility.transcribes-spoken-dialog,';
        data += 'public.accessibility.describes-music-and-sound,';
        data += 'public.easy-to-read';

        data += '"\n';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][CHARACTERISTICS_ID]).toStrictEqual([
            'public.accessibility.transcribes-spoken-dialog',
            'public.accessibility.describes-music-and-sound',
            'public.easy-to-read',
        ]);
    });
});
