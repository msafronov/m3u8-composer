import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { VALUE } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/VALUE';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';

import { VALUE_V13 } from './index';

describe('v13 VALUE', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...VALUE_V13(VALUE()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:VALUE="tes"t"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0004']).toStrictEqual({
            value: '"tes"t"',
            row: 1,
            col: 14,
        });
    });

    test('non quoted-string value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...VALUE_V13(VALUE()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:VALUE=value';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0004']).toStrictEqual({
            value: 'value',
            row: 1,
            col: 14,
        });
    });

    test('there should be no error when passing an empty value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...VALUE_V13(VALUE()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:VALUE=""';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0004']).not.toBeDefined();
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...VALUE_V13(VALUE()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:VALUE="value"';

        interpreter(data, schema);
    
        expect(schema.logs['0x0004']).not.toBeDefined();
    });
});
