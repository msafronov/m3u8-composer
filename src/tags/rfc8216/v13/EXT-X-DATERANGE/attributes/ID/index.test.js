import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, ID_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { ID } from './index';

describe('v13 ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...ID(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DATERANGE:ID="id2"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_DATERANGE_ID][0][ID_ID]).toBe('id2');
    });
});
