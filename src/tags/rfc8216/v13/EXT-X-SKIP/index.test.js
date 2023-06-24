import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_SKIP_ID, RECENTLY_REMOVED_DATERANGES_ID, SKIPPED_SEGMENTS_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { SKIPPED_SEGMENTS } from '@tags/rfc8216/v13/EXT-X-SKIP/attributes/SKIPPED-SEGMENTS';
import { RECENTLY_REMOVED_DATERANGES } from '@tags/rfc8216/v13/EXT-X-SKIP/attributes/RECENTLY-REMOVED-DATERANGES';

import { EXT_X_SKIP } from './index';

describe('v13 #EXT-X-SKIP', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_SKIP({
                ...SKIPPED_SEGMENTS(),
                ...RECENTLY_REMOVED_DATERANGES(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SKIP:SKIPPED-SEGMENTS=3';

        interpreter(data, schema);

        expect(schema[EXT_X_SKIP_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [SKIPPED_SEGMENTS_ID]: {
                value: '3',
                row: 1,
                col: 12,
            },
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_SKIP({
                ...SKIPPED_SEGMENTS(),
                ...RECENTLY_REMOVED_DATERANGES(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SKIP:SKIPPED-SEGMENTS=3,RECENTLY-REMOVED-DATERANGES="id1\tid2\tid3"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_SKIP_ID]).toStrictEqual({
            [SKIPPED_SEGMENTS_ID]: '3',
            [RECENTLY_REMOVED_DATERANGES_ID]: [
                'id1',
                'id2',
                'id3',
            ],
        });
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_SKIP({
                ...SKIPPED_SEGMENTS(),
                ...RECENTLY_REMOVED_DATERANGES(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SKIP:SKIPPED-SEGMENTS=3\n#EXT-X-SKIP:SKIPPED-SEGMENTS=4\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_SKIP_ID]).toStrictEqual({
            [SKIPPED_SEGMENTS_ID]: '4',
        });
    });
});
