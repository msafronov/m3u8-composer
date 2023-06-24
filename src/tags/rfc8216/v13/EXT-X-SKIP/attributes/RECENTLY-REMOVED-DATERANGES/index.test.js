import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SKIP } from '@tags/rfc8216/v13/EXT-X-SKIP';
import { EXT_X_SKIP_ID, RECENTLY_REMOVED_DATERANGES_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { RECENTLY_REMOVED_DATERANGES } from './index';

describe('v13 RECENTLY-REMOVED-DATERANGES', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SKIP({
                ...RECENTLY_REMOVED_DATERANGES(),
            }),
        });

        expect(schema[EXT_X_SKIP_ID][RECENTLY_REMOVED_DATERANGES_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly with sigle id', () => {
        const schema = ParserSchema({
            ...EXT_X_SKIP({
                ...RECENTLY_REMOVED_DATERANGES(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SKIP:RECENTLY-REMOVED-DATERANGES="id1"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_SKIP_ID][RECENTLY_REMOVED_DATERANGES_ID]).toStrictEqual([
            'id1',
        ]);
    });

    test('should parse quoted-string value correctly with multiple id', () => {
        const schema = ParserSchema({
            ...EXT_X_SKIP({
                ...RECENTLY_REMOVED_DATERANGES(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SKIP:RECENTLY-REMOVED-DATERANGES="id1\tid2\tid3"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_SKIP_ID][RECENTLY_REMOVED_DATERANGES_ID]).toStrictEqual([
            'id1',
            'id2',
            'id3',
        ]);
    });
});
