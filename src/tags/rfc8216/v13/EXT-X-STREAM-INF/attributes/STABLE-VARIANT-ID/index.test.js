import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, STABLE_VARIANT_ID_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { STABLE_VARIANT_ID } from './index';

describe('v13 STABLE-VARIANT-ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...STABLE_VARIANT_ID(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][STABLE_VARIANT_ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...STABLE_VARIANT_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-STREAM-INF:STABLE-VARIANT-ID="id2"\ntest.mp4';

        parser(data, schema);

        expect(schema.variantStreams[0][EXT_X_STREAM_INF_ID][STABLE_VARIANT_ID_ID]).toBe(
            'id2'
        );
    });
});
