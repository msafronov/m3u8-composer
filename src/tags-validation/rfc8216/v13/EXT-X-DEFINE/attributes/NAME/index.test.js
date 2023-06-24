import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { NAME } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/NAME';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';

import { NAME_V13 } from './index';

describe('v13 NAME', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME_V13(NAME()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="te"st",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1083']).toStrictEqual({
            value: '"te"st"',
            row: 1,
            col: 14,
        });
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME_V13(NAME()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1083']).toStrictEqual({
            value: '""',
            row: 1,
            col: 14,
        });
    });

    test('non quoted-string value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME_V13(NAME()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME=value,VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1083']).toStrictEqual({
            value: 'value',
            row: 1,
            col: 14,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME_V13(NAME()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test",VALUE="value"';

        interpreter(data, schema);
    
        expect(schema.logs['0x1083']).not.toBeDefined();
    });
});
