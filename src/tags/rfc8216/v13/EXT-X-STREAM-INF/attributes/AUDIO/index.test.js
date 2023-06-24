import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, AUDIO_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { AUDIO } from './index';

describe('v13 AUDIO', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...AUDIO(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][AUDIO_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...AUDIO(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-STREAM-INF:AUDIO="audio_group"\ntest.mp4';

        parser(data, schema);

        expect(schema.variantStreams[0][EXT_X_STREAM_INF_ID][AUDIO_ID]).toBe('audio_group');
    });
});
