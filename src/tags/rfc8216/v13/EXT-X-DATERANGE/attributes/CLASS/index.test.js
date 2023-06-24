import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, CLASS_ID } from '@tags/const';

import { CLASS } from './index';
import { parser } from '@parser/m3u8-to-schema';

describe('v13 CLASS', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...CLASS(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][CLASS_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...CLASS(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DATERANGE:CLASS="com.apple.hls.interstitial"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_DATERANGE_ID][0][CLASS_ID]).toBe('com.apple.hls.interstitial');
    });
});
