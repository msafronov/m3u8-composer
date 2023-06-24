import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { IMPORT } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/IMPORT';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';

import { IMPORT_V13 } from './index';

describe('v13 IMPORT', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...IMPORT_V13(IMPORT()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:IMPORT="te"st",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1087']).toStrictEqual({
            value: '"te"st"',
            row: 1,
            col: 14,
        });
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...IMPORT_V13(IMPORT()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:IMPORT="",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1087']).toStrictEqual({
            value: '""',
            row: 1,
            col: 14,
        });
    });

    test('non quoted-string value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...IMPORT_V13(IMPORT()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:IMPORT=value,VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1087']).toStrictEqual({
            value: 'value',
            row: 1,
            col: 14,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE({
                ...IMPORT_V13(IMPORT()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-DEFINE:IMPORT="test",VALUE="value"';

        interpreter(data, schema);
    
        expect(schema.logs['0x1087']).not.toBeDefined();
    });
});
