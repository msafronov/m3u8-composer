import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_KEY } from '@tags/rfc8216/v13/EXT-X-KEY';
import { URI } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/URI';
import { METHOD } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { URI_ID, METHOD_ID } from '@tags/const';

import { EXT_X_KEY_V13 } from './index';

describe('v13 #EXT-X-KEY', () => {
    test('there should be an error when METHOD attribute is missing', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_KEY_V13(EXT_X_KEY({
                ...URI(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-KEY:URI="http://license.uat.widevine.com/"';

        interpreter(data, schema);
    
        expect(schema.logs['0x1280']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [URI_ID]: {
                row: 1,
                col: 11,
                value: '"http://license.uat.widevine.com/"',
            },
        });
    });

    test('if the encryption method is NONE, other attributes MUST NOT be present', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_KEY_V13(EXT_X_KEY({
                ...METHOD(),
                ...URI(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-KEY:METHOD=NONE,URI="http://license.uat.widevine.com/"';

        interpreter(data, schema);
    
        expect(schema.logs['0x1282']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [METHOD_ID]: {
                row: 1,
                col: 11,
                value: 'NONE',
            },
            [URI_ID]: {
                row: 1,
                col: 23,
                value: '"http://license.uat.widevine.com/"',
            },
        });
    });

    test('there should be an error when URI attribute is missing', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_KEY_V13(EXT_X_KEY({
                ...METHOD(),
                ...URI(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-KEY:METHOD=AES-128';

        interpreter(data, schema);
    
        expect(schema.logs['0x1283']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [METHOD_ID]: {
                row: 1,
                col: 11,
                value: 'AES-128',
            },
        });
    });

    test('there should not be an error when URI attribute is missing but METHOD is NONE', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_KEY_V13(EXT_X_KEY({
                ...METHOD(),
                ...URI(),
            })),
        }));

        const data = '#EXTM3U\n#EXT-X-KEY:METHOD=NONE';

        interpreter(data, schema);
    
        expect(schema.logs['0x1283']).not.toBeDefined();
    });
});
