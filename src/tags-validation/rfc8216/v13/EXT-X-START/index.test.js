import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_START } from '@tags/rfc8216/v13/EXT-X-START';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { TIME_OFFSET } from '@tags/rfc8216/v13/EXT-X-START/attributes/TIME-OFFSET';
import { PRECISE } from '@tags/rfc8216/v13/EXT-X-START/attributes/PRECISE';

import { EXT_X_START_V13 } from './index';
import { TIME_OFFSET_ID, PRECISE_ID } from '@tags/const';

describe('v13 #EXT-X-START', () => {
    test('PRECISE + TIME-OFFSET attributes should be parsed without errors', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START_V13(EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=25,PRECISE=YES';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1060']).not.toBeDefined();
    });

    test('missing TIME-OFFSET attribute error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START_V13(EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:PRECISE=YES';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1060']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [PRECISE_ID]: {
                row: 1,
                col: 13,
                value: 'YES',
            },
        });
    });

    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_START_V13(EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=0.01\n#EXT-X-START:TIME-OFFSET=0.01';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1063']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 2,
            col: 0,
            [TIME_OFFSET_ID]: {
                row: 2,
                col: 13,
                value: '0.01',
            },
        });
    });
});
