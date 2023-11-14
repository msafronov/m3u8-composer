import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_MAP } from '@tags/rfc8216/v13/EXT-X-MAP';
import { URI } from '@tags/rfc8216/v13/EXT-X-MAP/attributes/URI';
import { BYTERANGE } from '@tags/rfc8216/v13/EXT-X-MAP/attributes/BYTERANGE';
import { URI_ID, BYTERANGE_ID } from '@tags/const';
import { EXT_X_KEY } from '@tags/rfc8216/v13/EXT-X-KEY';
import { METHOD } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { IV } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/IV';

import { EXT_X_MAP_V13 } from './index';

describe('v13 #EXT-X-MAP', () => {
    test('there should be an error when URI attribute is missing', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MAP_V13(EXT_X_MAP({
                ...URI(),
                ...BYTERANGE(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-MAP:BYTERANGE=128@0\nsegment1.060.ts';

        interpreter(data, schema);
    
        expect(schema.logs['0x1300']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [BYTERANGE_ID]: {
                row: 1,
                col: 11,
                value: '128@0',
            },
        });
    });

    test('there should be an error when offset value of the BYTERANGE attribute is missing', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MAP_V13(EXT_X_MAP({
                ...URI(),
                ...BYTERANGE(),
            })),
        }));

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-MAP:URI="/test-uri",BYTERANGE=128\nsegment1.060.ts\n';
        data += '#EXT-X-MAP:URI="/test-uri-2",BYTERANGE=128\nsegment2.060.ts\n';

        interpreter(data, schema);
    
        expect(schema.logs['0x1301']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 3,
            col: 0,
            [URI_ID]: {
                row: 3,
                col: 11,
                value: '"/test-uri-2"',
            },
            [BYTERANGE_ID]: {
                row: 3,
                col: 29,
                value: '128',
            },
        });
    });

    test('there should be an error when EXT-X-KEY is applied to the EXT-X-MAP with METHOD=AES-128 and IV is empty', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MAP_V13(EXT_X_MAP({
                ...URI(),
                ...BYTERANGE(),
            })),
            ...EXT_X_KEY({
                ...METHOD(),
                ...IV(),
            }),
        }));

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-MAP:URI="/test-uri"\n';
        data += '#EXT-X-KEY:METHOD=AES-128\n'
        data += 'segment2.060.ts\n';

        interpreter(data, schema);
    
        expect(schema.logs['0x1302']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [URI_ID]: {
                row: 1,
                col: 11,
                value: '"/test-uri"',
            },
        });
    });
});
