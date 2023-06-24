import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_BLOCK_RELOAD } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-BLOCK-RELOAD';

import { CAN_BLOCK_RELOAD_V13 } from './index';

describe('v13 CAN-BLOCK-RELOAD', () => {
    test('invalid enumerated-string value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_BLOCK_RELOAD_V13(CAN_BLOCK_RELOAD()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-BLOCK-RELOAD="YES"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0005']).toStrictEqual({
            value: '"YES"',
            row: 1,
            col: 22,
        });
    });

    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_BLOCK_RELOAD_V13(CAN_BLOCK_RELOAD()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-BLOCK-RELOAD=INVALID';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1243']).toStrictEqual({
            value: 'INVALID',
            row: 1,
            col: 22,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_BLOCK_RELOAD_V13(CAN_BLOCK_RELOAD()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-BLOCK-RELOAD=YES';

        interpreter(data, schema);
    
        expect(schema.logs['0x1243']).not.toBeDefined();
    });
});
