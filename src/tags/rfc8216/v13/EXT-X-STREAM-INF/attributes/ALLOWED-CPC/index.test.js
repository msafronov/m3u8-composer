import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, ALLOWED_CPC_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { ALLOWED_CPC } from './index';

describe('v13 ALLOWED-CPC', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...ALLOWED_CPC(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][ALLOWED_CPC_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...ALLOWED_CPC(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-STREAM-INF:ALLOWED-CPC="com.example.drm1:SMART-TV/PC,com.example.drm2:HW"\ntest.mp4';

        parser(data, schema);

        expect(schema.variantStreams[0][EXT_X_STREAM_INF_ID][ALLOWED_CPC_ID]).toStrictEqual({
            'com.example.drm1': [
                'SMART-TV',
                'PC',
            ],
            'com.example.drm2': [
                'HW',
            ],
        });
    });
});
