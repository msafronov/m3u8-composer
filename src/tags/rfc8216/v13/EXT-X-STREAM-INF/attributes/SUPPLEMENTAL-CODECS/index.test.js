import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, SUPPLEMENTAL_CODECS_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { SUPPLEMENTAL_CODECS } from './index';

describe('v13 SUPPLEMENTAL-CODECS', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...SUPPLEMENTAL_CODECS(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][SUPPLEMENTAL_CODECS_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...SUPPLEMENTAL_CODECS(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-STREAM-INF:SUPPLEMENTAL-CODECS="hvc1.2.4.L153.b0,dvh1.08.07/db4h"\ntest.mp4';

        parser(data, schema);

        expect(schema.variantStreams[0][EXT_X_STREAM_INF_ID][SUPPLEMENTAL_CODECS_ID]).toStrictEqual([
            'hvc1.2.4.L153.b0',
            'dvh1.08.07/db4h',
        ]);
    });
});
