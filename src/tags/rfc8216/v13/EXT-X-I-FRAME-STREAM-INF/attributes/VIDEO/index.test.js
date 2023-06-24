import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_I_FRAME_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF';
import { EXT_X_I_FRAME_STREAM_INF_ID, VIDEO_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { VIDEO } from './index';

describe('v13 VIDEO', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...VIDEO(),
            }),
        });

        expect(schema[EXT_X_I_FRAME_STREAM_INF_ID][VIDEO_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...VIDEO(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-I-FRAME-STREAM-INF:VIDEO="video_group"\ntest.mp4';

        parser(data, schema);

        expect(schema.playlist[EXT_X_I_FRAME_STREAM_INF_ID][0][VIDEO_ID]).toBe('video_group');
    });
});
