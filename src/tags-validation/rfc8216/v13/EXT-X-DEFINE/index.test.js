import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { NAME } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/NAME';
import { IMPORT } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/IMPORT';
import { QUERYPARAM } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/QUERYPARAM';
import { VALUE } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/VALUE';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { IMPORT_ID, NAME_ID, QUERYPARAM_ID, VALUE_ID } from '@tags/const';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';

import { EXT_X_DEFINE_V13 } from './index';

describe('v13 #EXT-X-DEFINE', () => {
    test('NAME + VALUE attributes should be parsed without errors', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
                ...VALUE(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1084']).not.toBeDefined();
    });

    test('missing VALUE attribute error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1084']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [NAME_ID]: {
                row: 1,
                col: 14,
                value: '"test"',
            },
        });
    });

    test('tag with correct variable name should be parsed without errors', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
                ...VALUE(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test",VALUE="value"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108C']).not.toBeDefined();
    });

    test('missing variable name attribute error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...VALUE(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:VALUE="test"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108C']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [VALUE_ID]: {
                row: 1,
                col: 14,
                value: '"test"',
            },
        });
    });

    test('more than one variable name attribute error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
                ...IMPORT(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test",IMPORT="test"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108C']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 1,
            col: 0,
            [NAME_ID]: {
                row: 1,
                col: 14,
                value: '"test"',
            },
            [IMPORT_ID]: {
                row: 1,
                col: 26,
                value: '"test"',
            },
        });
    });

    test('tag without variable name duplicates should be parsed without errors', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
                ...VALUE(),
                ...IMPORT(),
                ...QUERYPARAM(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test"\n#EXT-X-DEFINE:IMPORT="test2"\n#EXT-X-DEFINE:QUERYPARAM="test3"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108D']).not.toBeDefined();
    });

    test('variable name duplicate error (NAME and IMPORT)', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
                ...IMPORT(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test"\n#EXT-X-DEFINE:IMPORT="test"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108D']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 2,
            col: 0,
            [IMPORT_ID]: {
                row: 2,
                col: 14,
                value: '"test"',
            },
        });
    });

    test('variable name duplicate error (NAME and QUERYPARAM)', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
                ...QUERYPARAM(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test"\n#EXT-X-DEFINE:QUERYPARAM="test"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108D']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 2,
            col: 0,
            [QUERYPARAM_ID]: {
                row: 2,
                col: 14,
                value: '"test"',
            },
        });
    });

    test('variable name duplicate error (IMPORT and QUERYPARAM)', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...IMPORT(),
                ...QUERYPARAM(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:IMPORT="test"\n#EXT-X-DEFINE:QUERYPARAM="test"';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x108D']).toStrictEqual({
            isValidated: true,
            value: null,
            row: 2,
            col: 0,
            [QUERYPARAM_ID]: {
                row: 2,
                col: 14,
                value: '"test"',
            },
        });
    });

    test('duplicate variable name dictionary should be empty after validation', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_DEFINE_V13(EXT_X_DEFINE({
                ...NAME(),
                ...IMPORT(),
            })),
        }));
    
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test"';
        const data2 = '#EXTM3U\n#EXT-X-DEFINE:IMPORT="test"';
    
        interpreter(data, schema);
        interpreter(data2, schema);
    
        expect(schema.logs['0x108D']).not.toBeDefined();
    });
});
