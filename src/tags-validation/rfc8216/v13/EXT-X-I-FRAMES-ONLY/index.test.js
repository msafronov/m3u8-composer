import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_I_FRAMES_ONLY } from '@tags/rfc8216/v13/EXT-X-I-FRAMES-ONLY';

import { EXT_X_I_FRAMES_ONLY_V13 } from './index';

describe('v13 #EXT-X-I-FRAMES-ONLY', () => {
    test('normal tag without an error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_I_FRAMES_ONLY_V13(EXT_X_I_FRAMES_ONLY()),
        }));

        const data = '#EXTM3U\n#EXT-X-I-FRAMES-ONLY';

        interpreter(data, schema);

        expect(schema.logs['0x1200']).not.toBeDefined();
    });

    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_I_FRAMES_ONLY_V13(EXT_X_I_FRAMES_ONLY()),
        }));

        const data = '#EXTM3U\n#EXT-X-I-FRAMES-ONLY\n#EXT-X-I-FRAMES-ONLY';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1200']).toStrictEqual({
            isValidated: true,
            value: true,
            row: 2,
            col: 0,
        });
    });
});
