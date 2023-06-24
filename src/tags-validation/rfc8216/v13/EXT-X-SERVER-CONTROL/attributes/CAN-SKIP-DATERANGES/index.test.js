import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_SKIP_DATERANGES } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-DATERANGES';

import { CAN_SKIP_DATERANGES_V13 } from './index';

describe('v13 CAN-SKIP-DATERANGES', () => {
    test('invalid enumerated-string value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_DATERANGES_V13(CAN_SKIP_DATERANGES()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-SKIP-DATERANGES=""';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0005']).toStrictEqual({
            value: '""',
            row: 1,
            col: 22,
        });
    });

    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_DATERANGES_V13(CAN_SKIP_DATERANGES()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-SKIP-DATERANGES="INVALID"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1241']).toStrictEqual({
            value: '"INVALID"',
            row: 1,
            col: 22,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_DATERANGES_V13(CAN_SKIP_DATERANGES()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-SKIP-DATERANGES=YES';

        interpreter(data, schema);
    
        expect(schema.logs['0x1241']).not.toBeDefined();
    });
});
