import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_ENDLIST } from '@tags/rfc8216/v13/EXT-X-ENDLIST';

import { EXT_X_ENDLIST_V13 } from './index';

describe('v13 #EXT-X-ENDLIST', () => {
    test('normal tag without an error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_ENDLIST_V13(EXT_X_ENDLIST()),
        }));

        const data = '#EXTM3U\n#EXT-X-ENDLIST';

        interpreter(data, schema);

        expect(schema.logs['0x1160']).not.toBeDefined();
    });

    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_ENDLIST_V13(EXT_X_ENDLIST()),
        }));

        const data = '#EXTM3U\n#EXT-X-ENDLIST\n#EXT-X-ENDLIST';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1160']).toStrictEqual({
            isValidated: true,
            value: true,
            row: 2,
            col: 0,
        });
    });
});
