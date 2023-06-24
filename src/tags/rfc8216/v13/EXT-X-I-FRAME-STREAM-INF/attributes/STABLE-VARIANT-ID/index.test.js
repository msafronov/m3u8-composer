import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_I_FRAME_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF';
import { EXT_X_I_FRAME_STREAM_INF_ID, STABLE_VARIANT_ID_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { STABLE_VARIANT_ID } from './index';

describe('v13 STABLE-VARIANT-ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...STABLE_VARIANT_ID(),
            }),
        });

        expect(schema[EXT_X_I_FRAME_STREAM_INF_ID][STABLE_VARIANT_ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...STABLE_VARIANT_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-I-FRAME-STREAM-INF:STABLE-VARIANT-ID="id2"\ntest.mp4';

        parser(data, schema);

        expect(schema.playlist[EXT_X_I_FRAME_STREAM_INF_ID][0][STABLE_VARIANT_ID_ID]).toBe(
            'id2'
        );
    });
});
