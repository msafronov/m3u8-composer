import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { URI } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF/attributes/URI';

import { EXT_X_I_FRAME_STREAM_INF_ID, URI_ID } from '@tags/const';

import { EXT_X_I_FRAME_STREAM_INF } from './index';

describe('v13 #EXT-X-I-FRAME-STREAM-INF', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...URI(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-I-FRAME-STREAM-INF:URI="https://test.com/hls/db/1080.mp4/iframes-v1-a1.m3u8"';

        interpreter(data, schema);

        expect(schema[EXT_X_I_FRAME_STREAM_INF_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [URI_ID]: {
                value: '"https://test.com/hls/db/1080.mp4/iframes-v1-a1.m3u8"',
                row: 1,
                col: 26,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...URI(),
            }),
        });

        let data = '#EXTM3U\n';

        data += '#EXT-X-I-FRAME-STREAM-INF:URI="https://test.com/hls/db/1080.mp4/iframes-v1-a1.m3u8"\n';
        data += '#EXT-X-I-FRAME-STREAM-INF:URI="https://test.com/hls/db/720.mp4/iframes-v1-a1.m3u8"';

        interpreter(data, schema);

        expect(schema[EXT_X_I_FRAME_STREAM_INF_ID].data.length).toBe(2);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...URI(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-I-FRAME-STREAM-INF:URI="https://test.com/hls/db/1080.mp4/iframes-v1-a1.m3u8"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_I_FRAME_STREAM_INF_ID]).toStrictEqual([{
            [URI_ID]: 'https://test.com/hls/db/1080.mp4/iframes-v1-a1.m3u8',
        }]);
    });
});
