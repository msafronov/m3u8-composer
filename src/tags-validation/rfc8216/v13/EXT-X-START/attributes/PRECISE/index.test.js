import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_START } from '@tags/rfc8216/v13/EXT-X-START';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { PRECISE } from '@tags/rfc8216/v13/EXT-X-START/attributes/PRECISE';
import { TIME_OFFSET } from '@tags/rfc8216/v13/EXT-X-START/attributes/TIME-OFFSET';

import { PRECISE_V13 } from './index';

describe('v13 PRECISE', () => {
    test('enumerated-string error (double quote)', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE_V13(PRECISE()),
            }),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=-25,PRECISE=Y"ES';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0005']).toStrictEqual({
            value: 'Y"ES',
            row: 1,
            col: 29,
        });
    });

    test('enumerated-string error (whitespace)', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE_V13(PRECISE()),
            }),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=-25,PRECISE=Y ES';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0005']).toStrictEqual({
            value: 'Y ES',
            row: 1,
            col: 29,
        });
    });

    test('splitted value by comma instead of error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE_V13(PRECISE()),
            }),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=-25,PRECISE=Y,ES';
    
        interpreter(data, schema);

        expect(schema.logs['0x0005']).not.toBeDefined();
    });

    test('enumerated-string unknown value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE_V13(PRECISE()),
            }),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=25,PRECISE=INVALID_VALUE';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1062']).toStrictEqual({
            value: 'INVALID_VALUE',
            row: 1,
            col: 28,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE_V13(PRECISE()),
            }),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=25,PRECISE=YES';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1062']).not.toBeDefined();
    });
});
