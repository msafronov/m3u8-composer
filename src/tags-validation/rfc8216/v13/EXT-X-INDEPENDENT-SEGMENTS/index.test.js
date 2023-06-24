import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_INDEPENDENT_SEGMENTS } from '@tags/rfc8216/v13/EXT-X-INDEPENDENT-SEGMENTS';
import { interpreter } from '@interpreter/m3u8-to-schema';

import { EXT_X_INDEPENDENT_SEGMENTS_V13 } from './index';

describe('v13 #EXT-X-INDEPENDENT-SEGMENTS', () => {
    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_INDEPENDENT_SEGMENTS_V13(EXT_X_INDEPENDENT_SEGMENTS()),
        }));

        const data = '#EXTM3U\n#EXT-X-INDEPENDENT-SEGMENTS\n#EXT-X-INDEPENDENT-SEGMENTS';

        interpreter(data, schema);

        expect(schema.logs['0x1040']).toStrictEqual({
            isValidated: true,
            value: true,
            row: 2,
            col: 0,
        });
    });
});
