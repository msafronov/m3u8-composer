import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MAP } from '@tags/rfc8216/v13/EXT-X-MAP';
import { EXT_X_MAP_ID, URI_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { URI } from './index';

describe('v13 URI', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MAP({
                ...URI(),
            }),
        });

        expect(schema[EXT_X_MAP_ID][URI_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MAP({
                ...URI(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MAP:URI="/media/encoded/asset127-a/1MB/"\nsegment1.060.ts';

        parser(data, schema);

        expect(schema.mediaSegments[0][EXT_X_MAP_ID][URI_ID]).toBe('/media/encoded/asset127-a/1MB/');
    });
});
