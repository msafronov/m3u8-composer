import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { METHOD } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { EXT_X_MAP } from '@tags/rfc8216/v13/EXT-X-MAP';

import { METHOD_V13 } from './index';

describe('v13 METHOD', () => {
    test('enumerated-string unknown value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_MAP({
                ...METHOD_V13(METHOD()),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-MAP:METHOD=INVALID_METHOD';

        interpreter(data, schema);

        expect(schema.logs['0x1281']).toStrictEqual({
            value: 'INVALID_METHOD',
            row: 1,
            col: 11,
        });
    });
});
