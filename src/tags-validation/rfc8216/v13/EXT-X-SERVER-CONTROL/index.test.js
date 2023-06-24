import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_SKIP_UNTIL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-UNTIL';
import { CAN_SKIP_DATERANGES } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-DATERANGES';
import { HOLD_BACK } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/HOLD-BACK';
import { PART_HOLD_BACK } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/PART-HOLD-BACK';
import { CAN_BLOCK_RELOAD } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-BLOCK-RELOAD';
import {
    CAN_BLOCK_RELOAD_ID,
    CAN_SKIP_DATERANGES_ID,
    CAN_SKIP_UNTIL_ID,
    HOLD_BACK_ID,
    PART_HOLD_BACK_ID,
} from '@tags/const';

import { EXT_X_SERVER_CONTROL_V13 } from './index';

describe('v13 #EXT-X-SERVER-CONTROL', () => {
    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL_V13(EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_UNTIL(),
                ...CAN_SKIP_DATERANGES(),
                ...HOLD_BACK(),
                ...PART_HOLD_BACK(),
                ...CAN_BLOCK_RELOAD(),
            })),
        }));

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-SERVER-CONTROL:CAN-SKIP-UNTIL=12.0,CAN-SKIP-DATERANGES=YES,HOLD-BACK=1.0,PART-HOLD-BACK=1.0,CAN-BLOCK-RELOAD=YES\n';
        data += '#EXT-X-SERVER-CONTROL:CAN-SKIP-UNTIL=12.0,CAN-SKIP-DATERANGES=YES,HOLD-BACK=1.0,PART-HOLD-BACK=1.0,CAN-BLOCK-RELOAD=YES';

        interpreter(data, schema);

        expect(schema.logs['0x1240']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 2,
            col: 0,
            [CAN_SKIP_UNTIL_ID]: {
                value: '12.0',
                row: 2,
                col: 22,
            },
            [CAN_SKIP_DATERANGES_ID]: {
                value: 'YES',
                row: 2,
                col: 42,
            },
            [HOLD_BACK_ID]: {
                value: '1.0',
                row: 2,
                col: 66,
            },
            [PART_HOLD_BACK_ID]: {
                value: '1.0',
                row: 2,
                col: 80,
            },
            [CAN_BLOCK_RELOAD_ID]: {
                value: 'YES',
                row: 2,
                col: 99,
            },
        });
    });

    test('missing CAN-SKIP-UNTIL attribute error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL_V13(EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_UNTIL(),
                ...CAN_SKIP_DATERANGES(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-SKIP-DATERANGES=YES';

        interpreter(data, schema);

        expect(schema.logs['0x1242']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [CAN_SKIP_DATERANGES_ID]: {
                value: 'YES',
                row: 1,
                col: 22,
            },
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL_V13(EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_UNTIL(),
                ...CAN_SKIP_DATERANGES(),
                ...HOLD_BACK(),
                ...PART_HOLD_BACK(),
                ...CAN_BLOCK_RELOAD(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-BLOCK-RELOAD=YES,PART-HOLD-BACK=1.0,CAN-SKIP-UNTIL=12.0';

        interpreter(data, schema);
    
        expect(schema.logs['0x1240']).not.toBeDefined();
    });
});
