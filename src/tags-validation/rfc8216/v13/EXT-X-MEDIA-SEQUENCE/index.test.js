import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_MEDIA_SEQUENCE } from '@tags/rfc8216/v13/EXT-X-MEDIA-SEQUENCE';

import { EXT_X_MEDIA_SEQUENCE_V13 } from './index';

describe('v13 #EXT-X-MEDIA-SEQUENCE', () => {
    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MEDIA_SEQUENCE_V13(EXT_X_MEDIA_SEQUENCE()),
        }));

        const data = '#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:TEST';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0000']).toStrictEqual({
            isValidated: true,
            value: 'TEST',
            row: 1,
            col: 0,
        });
    });

    test('long value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MEDIA_SEQUENCE_V13(EXT_X_MEDIA_SEQUENCE()),
        }));

        const data = '#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:111111111122222222223';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x0000']).toStrictEqual({
            isValidated: true,
            value: '111111111122222222223',
            row: 1,
            col: 0,
        });
    });

    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MEDIA_SEQUENCE_V13(EXT_X_MEDIA_SEQUENCE()),
        }));

        const data = '#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:10\n#EXT-X-MEDIA-SEQUENCE:20';

        interpreter(data, schema);

        expect(schema.logs['0x1120']).toStrictEqual({
            isValidated: true,
            value: '20',
            row: 2,
            col: 0,
        });
    });

    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MEDIA_SEQUENCE_V13(EXT_X_MEDIA_SEQUENCE()),
        }));

        const data = '#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:20';

        interpreter(data, schema);
    
        expect(schema.logs['0x0000']).not.toBeDefined();
    });
});
