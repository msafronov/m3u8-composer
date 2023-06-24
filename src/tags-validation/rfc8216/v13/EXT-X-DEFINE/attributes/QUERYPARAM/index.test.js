import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { QUERYPARAM } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/QUERYPARAM';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';

import { QUERYPARAM_V13 } from './index';

describe('v13 QUERYPARAM', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...QUERYPARAM_V13(QUERYPARAM()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:QUERYPARAM="te st",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108B']).toStrictEqual({
            value: '"te st"',
            row: 1,
            col: 14,
        });
    });

    test('characters disallowed in quoted-strings error (double-quoted char)', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...QUERYPARAM_V13(QUERYPARAM()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:QUERYPARAM="te"st",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108B']).toStrictEqual({
            value: '"te"st"',
            row: 1,
            col: 14,
        });
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...QUERYPARAM_V13(QUERYPARAM()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:QUERYPARAM="",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108B']).toStrictEqual({
            value: '""',
            row: 1,
            col: 14,
        });
    });

    test('non quoted-string value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...QUERYPARAM_V13(QUERYPARAM()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:QUERYPARAM=value,VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108B']).toStrictEqual({
            value: 'value',
            row: 1,
            col: 14,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...QUERYPARAM_V13(QUERYPARAM()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:QUERYPARAM="test",VALUE="value"';

        interpreter(data, schema);
    
        expect(schema.logs['0x108B']).not.toBeDefined();
    });
});
