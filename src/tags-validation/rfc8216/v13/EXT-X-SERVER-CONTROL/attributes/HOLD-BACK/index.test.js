import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { HOLD_BACK } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/HOLD-BACK';

import { HOLD_BACK_V13 } from './index';

describe('v13 HOLD-BACK', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...HOLD_BACK_V13(HOLD_BACK()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:HOLD-BACK=-1';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0002']).toStrictEqual({
            value: '-1',
            row: 1,
            col: 22,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...HOLD_BACK_V13(HOLD_BACK()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:HOLD-BACK=1.0';

        interpreter(data, schema);
    
        expect(schema.logs['0x0002']).not.toBeDefined();
    });
});
