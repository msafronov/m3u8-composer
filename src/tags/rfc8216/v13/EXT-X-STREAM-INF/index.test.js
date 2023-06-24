import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { BANDWIDTH } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/BANDWIDTH';
import { AVERAGE_BANDWIDTH } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/AVERAGE-BANDWIDTH';
import { SCORE } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/SCORE';
import { CODECS } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/CODECS';
import { SUPPLEMENTAL_CODECS } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/SUPPLEMENTAL-CODECS';
import { RESOLUTION } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/RESOLUTION';
import { FRAME_RATE } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/FRAME-RATE';
import { HDCP_LEVEL } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/HDCP-LEVEL';
import { ALLOWED_CPC } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/ALLOWED-CPC';
import { VIDEO_RANGE } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/VIDEO-RANGE';
import { STABLE_VARIANT_ID } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/STABLE-VARIANT-ID';
import { AUDIO } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/AUDIO';
import { VIDEO } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/VIDEO';
import { SUBTITLES } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/SUBTITLES';
import { CLOSED_CAPTIONS } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/CLOSED-CAPTIONS';
import { PATHWAY_ID } from '@tags/rfc8216/v13/EXT-X-STREAM-INF/attributes/PATHWAY-ID';

import {
    EXT_X_STREAM_INF_ID,
    BANDWIDTH_ID,
    AVERAGE_BANDWIDTH_ID,
    SCORE_ID,
    CODECS_ID,
    SUPPLEMENTAL_CODECS_ID,
    RESOLUTION_ID,
    FRAME_RATE_ID,
    HDCP_LEVEL_ID,
    ALLOWED_CPC_ID,
    VIDEO_RANGE_ID,
    STABLE_VARIANT_ID_ID,
    AUDIO_ID,
    VIDEO_ID,
    SUBTITLES_ID,
    CLOSED_CAPTIONS_ID,
    PATHWAY_ID_ID,
} from '@tags/const';

import { EXT_X_STREAM_INF } from './index';

describe('v13 #EXT-X-STREAM-INF', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...BANDWIDTH(),
                ...AVERAGE_BANDWIDTH(),
                ...SCORE(),
                ...CODECS(),
                ...SUPPLEMENTAL_CODECS(),
                ...RESOLUTION(),
                ...FRAME_RATE(),
                ...HDCP_LEVEL(),
                ...ALLOWED_CPC(),
                ...VIDEO_RANGE(),
                ...STABLE_VARIANT_ID(),
                ...AUDIO(),
                ...VIDEO(),
                ...SUBTITLES(),
                ...CLOSED_CAPTIONS(),
                ...PATHWAY_ID(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-STREAM-INF:BANDWIDTH=150000,RESOLUTION=416x234,';
        data += 'AVERAGE-BANDWIDTH=1000,SCORE=1.0,';
        data += 'SUPPLEMENTAL-CODECS="hvc1.2.4.L153.b0",RESOLUTION="640x480",FRAME-RATE=30.0,';
        data += 'HDCP-LEVEL=TYPE-0,';
        data += 'VIDEO-RANGE=SDR,STABLE-VARIANT-ID="id2",AUDIO="audio_group",VIDEO="video_group",';
        data += 'SUBTITLES="subtitles_group",CLOSED-CAPTIONS=NONE,PATHWAY-ID="id3",';
        data += 'CODECS="mp4a.40.2,avc1.4d401e",';
        data += 'ALLOWED-CPC="com.example.drm1:SMART-TV/PC,com.example.drm2:HW"\n';
        data += 'http://example.com/low/index.m3u8';

        interpreter(data, schema);

        expect(schema[EXT_X_STREAM_INF_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [BANDWIDTH_ID]: {
                value: '150000',
                row: 1,
                col: 18,
            },
            [AVERAGE_BANDWIDTH_ID]: {
                value: '1000',
                row: 1,
                col: 54,
            },
            [SCORE_ID]: {
                value: '1.0',
                row: 1,
                col: 77,
            },
            [CODECS_ID]: {
                value: '"mp4a.40.2,avc1.4d401e"',
                row: 1,
                col: 327,
            },
            [SUPPLEMENTAL_CODECS_ID]: {
                value: '"hvc1.2.4.L153.b0"',
                row: 1,
                col: 87,
            },
            [RESOLUTION_ID]: {
                value: '"640x480"',
                row: 1,
                col: 126,
            },
            [FRAME_RATE_ID]: {
                value: '30.0',
                row: 1,
                col: 147,
            },
            [HDCP_LEVEL_ID]: {
                value: 'TYPE-0',
                row: 1,
                col: 163,
            },
            [ALLOWED_CPC_ID]: {
                value: '"com.example.drm1:SMART-TV/PC,com.example.drm2:HW"',
                row: 1,
                col: 358,
            },
            [VIDEO_RANGE_ID]: {
                value: 'SDR',
                row: 1,
                col: 181,
            },
            [STABLE_VARIANT_ID_ID]: {
                value: '"id2"',
                row: 1,
                col: 197,
            },
            [AUDIO_ID]: {
                value: '"audio_group"',
                row: 1,
                col: 221,
            },
            [VIDEO_ID]: {
                value: '"video_group"',
                row: 1,
                col: 241,
            },
            [SUBTITLES_ID]: {
                value: '"subtitles_group"',
                row: 1,
                col: 261,
            },
            [CLOSED_CAPTIONS_ID]: {
                value: 'NONE',
                row: 1,
                col: 289,
            },
            [PATHWAY_ID_ID]: {
                value: '"id3"',
                row: 1,
                col: 310,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...BANDWIDTH(),
                ...RESOLUTION(),
                ...CODECS(),
            }),
        });

        let data = '#EXTM3U\n';

        data += '#EXT-X-STREAM-INF:BANDWIDTH=150000,RESOLUTION=416x234,CODECS="avc1.42e00a,mp4a.40.2"\n';
        data += 'http://example.com/low/index.m3u8\n';
        data += '#EXT-X-STREAM-INF:BANDWIDTH=240000,RESOLUTION=416x234,CODECS="avc1.42e00a,mp4a.40.2"\n';
        data += 'http://example.com/lo_mid/index.m3u8\n';

        interpreter(data, schema);

        expect(schema[EXT_X_STREAM_INF_ID].data.length).toBe(2);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...BANDWIDTH(),
                ...AVERAGE_BANDWIDTH(),
                ...SCORE(),
                ...CODECS(),
                ...SUPPLEMENTAL_CODECS(),
                ...RESOLUTION(),
                ...FRAME_RATE(),
                ...HDCP_LEVEL(),
                ...ALLOWED_CPC(),
                ...VIDEO_RANGE(),
                ...STABLE_VARIANT_ID(),
                ...AUDIO(),
                ...VIDEO(),
                ...SUBTITLES(),
                ...CLOSED_CAPTIONS(),
                ...PATHWAY_ID(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-STREAM-INF:BANDWIDTH=150000,RESOLUTION=416x234,';
        data += 'AVERAGE-BANDWIDTH=1000,SCORE=1.0,';
        data += 'SUPPLEMENTAL-CODECS="hvc1.2.4.L153.b0",RESOLUTION=640x480,FRAME-RATE=30.0,';
        data += 'HDCP-LEVEL=TYPE-0,';
        data += 'VIDEO-RANGE=SDR,STABLE-VARIANT-ID="id2",AUDIO="audio_group",VIDEO="video_group",';
        data += 'SUBTITLES="subtitles_group",CLOSED-CAPTIONS="NONE",PATHWAY-ID="id3",';
        data += 'CODECS="mp4a.40.2,avc1.4d401e",';
        data += 'ALLOWED-CPC="com.example.drm1:SMART-TV/PC,com.example.drm2:HW"\n';
        data += 'http://example.com/low/index.m3u8';

        interpreter(data, schema);

        expect(schema.variantStreams[0][EXT_X_STREAM_INF_ID]).toStrictEqual({
            [BANDWIDTH_ID]: '150000',
            [AVERAGE_BANDWIDTH_ID]: '1000',
            [SCORE_ID]: '1.0',
            [CODECS_ID]: [
                'mp4a.40.2',
                'avc1.4d401e',
            ],
            [SUPPLEMENTAL_CODECS_ID]: [
                'hvc1.2.4.L153.b0',
            ],
            [RESOLUTION_ID]: '640x480',
            [FRAME_RATE_ID]: '30.0',
            [HDCP_LEVEL_ID]: 'TYPE-0',
            [ALLOWED_CPC_ID]: {
                'com.example.drm1': [
                    'SMART-TV',
                    'PC',
                ],
                'com.example.drm2': [
                    'HW',
                ],
            },
            [VIDEO_RANGE_ID]: 'SDR',
            [STABLE_VARIANT_ID_ID]: 'id2',
            [AUDIO_ID]: 'audio_group',
            [VIDEO_ID]: 'video_group',
            [SUBTITLES_ID]: 'subtitles_group',
            [CLOSED_CAPTIONS_ID]: 'NONE',
            [PATHWAY_ID_ID]: 'id3',
        });
    });

    test('should not save anything without an URI line', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...BANDWIDTH(),
                ...AVERAGE_BANDWIDTH(),
                ...SCORE(),
                ...CODECS(),
                ...SUPPLEMENTAL_CODECS(),
                ...RESOLUTION(),
                ...FRAME_RATE(),
                ...HDCP_LEVEL(),
                ...ALLOWED_CPC(),
                ...VIDEO_RANGE(),
                ...STABLE_VARIANT_ID(),
                ...AUDIO(),
                ...VIDEO(),
                ...SUBTITLES(),
                ...CLOSED_CAPTIONS(),
                ...PATHWAY_ID(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-STREAM-INF:BANDWIDTH=150000,RESOLUTION=416x234,';
        data += 'AVERAGE-BANDWIDTH=1000,SCORE=1.0,';
        data += 'SUPPLEMENTAL-CODECS="hvc1.2.4.L153.b0",RESOLUTION=640x480,FRAME-RATE=30.0,';
        data += 'HDCP-LEVEL=TYPE-0,';
        data += 'VIDEO-RANGE=SDR,STABLE-VARIANT-ID="id2",AUDIO="audio_group",VIDEO="video_group",';
        data += 'SUBTITLES="subtitles_group",CLOSED-CAPTIONS="NONE",PATHWAY-ID="id3",';
        data += 'CODECS="mp4a.40.2,avc1.4d401e",';
        data += 'ALLOWED-CPC="com.example.drm1:SMART-TV/PC,com.example.drm2:HW"\n\n\n';

        interpreter(data, schema);

        expect(schema.variantStreams.length).toBe(0);
    });
});
