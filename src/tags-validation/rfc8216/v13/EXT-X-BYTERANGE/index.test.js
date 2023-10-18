import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_BYTERANGE } from '@tags/rfc8216/v13/EXT-X-BYTERANGE';

import { EXT_X_BYTERANGE_V13 } from './index';

describe('v13 #EXT-X-BYTERANGE', () => {
    test('there should be no decimal-integer error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_BYTERANGE_V13(EXT_X_BYTERANGE()),
        }));

        const data = '#EXTM3U\n#EXT-X-BYTERANGE:8648@376\ntest.mp4';

        interpreter(data, schema);

        expect(schema.logs['0x0000']).not.toBeDefined();
    });

    test('there should be an error when length is not decimal-integer value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_BYTERANGE_V13(EXT_X_BYTERANGE()),
        }));

        const data = '#EXTM3U\n#EXT-X-BYTERANGE:hundred@376\ntest.mp4';

        interpreter(data, schema);

        expect(schema.logs['0x0000']).toStrictEqual({
            row: 1,
            col: 0,
            value: 'hundred'
        });
    });

    test('there should be an error when offset is not decimal-integer value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_BYTERANGE_V13(EXT_X_BYTERANGE()),
        }));

        const data = '#EXTM3U\n#EXT-X-BYTERANGE:8648@zero\ntest.mp4';

        interpreter(data, schema);

        expect(schema.logs['0x0000']).toStrictEqual({
            row: 1,
            col: 0,
            value: 'zero'
        });
    });
});
