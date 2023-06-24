import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, CODECS_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { CODECS } from './index';

describe('v13 CODECS', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...CODECS(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][CODECS_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...CODECS(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-STREAM-INF:CODECS="mp4a.40.2,avc1.4d401e"\ntest.mp4';

        parser(data, schema);

        expect(schema.variantStreams[0][EXT_X_STREAM_INF_ID][CODECS_ID]).toStrictEqual([
            'mp4a.40.2',
            'avc1.4d401e',
        ]);
    });
});
