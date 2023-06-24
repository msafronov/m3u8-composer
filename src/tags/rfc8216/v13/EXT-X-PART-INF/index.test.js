import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_PART_INF_ID, PART_TARGET_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { PART_TARGET } from '@tags/rfc8216/v13/EXT-X-PART-INF/attributes/PART-TARGET';

import { EXT_X_PART_INF } from './index';

describe('v13 #EXT-X-PART-INF', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_PART_INF({
                ...PART_TARGET(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PART-INF:PART-TARGET=0.33334';

        interpreter(data, schema);

        expect(schema[EXT_X_PART_INF_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [PART_TARGET_ID]: {
                value: '0.33334',
                row: 1,
                col: 16,
            },
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_PART_INF({
                ...PART_TARGET(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PART-INF:PART-TARGET=0.33334';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_PART_INF_ID]).toStrictEqual({
            [PART_TARGET_ID]: '0.33334',
        });
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_PART_INF({
                ...PART_TARGET(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PART-INF:PART-TARGET=0.33334\n#EXT-X-PART-INF:PART-TARGET=0.44\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_PART_INF_ID]).toStrictEqual({
            [PART_TARGET_ID]: '0.44',
        });
    });
});
