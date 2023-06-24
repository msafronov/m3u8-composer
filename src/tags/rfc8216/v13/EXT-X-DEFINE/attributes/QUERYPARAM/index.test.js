import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';
import { EXT_X_DEFINE_ID, QUERYPARAM_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { QUERYPARAM } from './index';

describe('v13 QUERYPARAM', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...QUERYPARAM(),
            }),
        });

        expect(schema[EXT_X_DEFINE_ID][QUERYPARAM_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...QUERYPARAM(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DEFINE:QUERYPARAM="test"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_DEFINE_ID][0][QUERYPARAM_ID]).toBe('test');
    });
});
