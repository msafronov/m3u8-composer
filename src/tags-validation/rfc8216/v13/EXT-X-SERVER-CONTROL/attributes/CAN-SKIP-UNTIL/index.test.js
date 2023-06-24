import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_SKIP_UNTIL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL/attributes/CAN-SKIP-UNTIL';

import { CAN_SKIP_UNTIL_V13 } from './index';

describe('v13 CAN-SKIP-UNTIL', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_UNTIL_V13(CAN_SKIP_UNTIL()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-SKIP-UNTIL=-2';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0002']).toStrictEqual({
            value: '-2',
            row: 1,
            col: 22,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_UNTIL_V13(CAN_SKIP_UNTIL()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-SERVER-CONTROL:CAN-SKIP-UNTIL=12.0';

        interpreter(data, schema);
    
        expect(schema.logs['0x0002']).not.toBeDefined();
    });
});
