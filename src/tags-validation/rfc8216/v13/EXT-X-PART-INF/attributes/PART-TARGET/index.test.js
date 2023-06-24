import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_PART_INF } from '@tags/rfc8216/v13/EXT-X-PART-INF';
import { PART_TARGET } from '@tags/rfc8216/v13/EXT-X-PART-INF/attributes/PART-TARGET';

import { PART_TARGET_V13 } from './index';

describe('v13 PART-TARGET', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PART_INF({
                ...PART_TARGET_V13(PART_TARGET()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-PART-INF:PART-TARGET=-1';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0002']).toStrictEqual({
            value: '-1',
            row: 1,
            col: 16,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PART_INF({
                ...PART_TARGET_V13(PART_TARGET()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-PART-INF:PART-TARGET=0.3334';

        interpreter(data, schema);
    
        expect(schema.logs['0x0002']).not.toBeDefined();
    });
});
