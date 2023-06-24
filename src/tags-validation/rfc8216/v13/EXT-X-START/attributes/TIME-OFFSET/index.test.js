import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_START } from '@tags/rfc8216/v13/EXT-X-START';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { PRECISE } from '@tags/rfc8216/v13/EXT-X-START/attributes/PRECISE';
import { TIME_OFFSET } from '@tags/rfc8216/v13/EXT-X-START/attributes/TIME-OFFSET';

import { TIME_OFFSET_V13 } from './index';

describe('v13 TIME-OFFSET', () => {
    test('signed-decimal-floating-point error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET_V13(TIME_OFFSET()),
                ...PRECISE(),
            }),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=invalidValue,PRECISE=YES';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0003']).toStrictEqual({
            value: 'invalidValue',
            row: 1,
            col: 13,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET_V13(TIME_OFFSET()),
                ...PRECISE(),
            }),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=25,PRECISE=YES';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0003']).not.toBeDefined();
    });
});
