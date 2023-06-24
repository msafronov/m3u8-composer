import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_PART_INF } from '@tags/rfc8216/v13/EXT-X-PART-INF';
import { PART_TARGET } from '@tags/rfc8216/v13/EXT-X-PART-INF/attributes/PART-TARGET';
import { PART_TARGET_ID } from '@tags/const';

import { EXT_X_PART_INF_V13 } from './index';

describe('v13 #EXT-X-PART-INF', () => {
    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PART_INF_V13(EXT_X_PART_INF({
                ...PART_TARGET(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-PART-INF:PART-TARGET=0.33334\n#EXT-X-PART-INF:PART-TARGET=0.44';

        interpreter(data, schema);

        expect(schema.logs['0x1220']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 2,
            col: 0,
            [PART_TARGET_ID]: {
                value: '0.44',
                row: 2,
                col: 16,
            },
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PART_INF_V13(EXT_X_PART_INF({
                ...PART_TARGET(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-PART-INF:PART-TARGET=0.33334';

        interpreter(data, schema);
    
        expect(schema.logs['0x1220']).not.toBeDefined();
    });
});
