import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXTM3U } from '@tags/rfc8216/v13/EXTM3U';

import { EXTM3U_V13 } from './index';

describe('v13 #EXTM3U', () => {
    test('normal tag position in the playlist without an error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTM3U_V13(EXTM3U()),
        }));

        const data = '#EXTM3U';

        interpreter(data, schema);

        expect(schema.logs['0x1001']).not.toBeDefined();
    });

    test('non-zero row position error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTM3U_V13(EXTM3U()),
        }));

        const data = '\n\n\n#EXTM3U';

        interpreter(data, schema);

        expect(schema.logs['0x1001']).toStrictEqual({
            isValidated: true,
            value: true,
            row: 3,
            col: 0,
        });
    });
});
