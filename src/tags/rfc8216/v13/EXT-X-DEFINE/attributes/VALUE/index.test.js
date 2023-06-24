import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';
import { EXT_X_DEFINE_ID, VALUE_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { VALUE } from './index';

describe('v13 VALUE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...VALUE(),
            }),
        });

        expect(schema[EXT_X_DEFINE_ID][VALUE_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...VALUE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DEFINE:VALUE="test"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_DEFINE_ID][0][VALUE_ID]).toBe('test');
    });
});
