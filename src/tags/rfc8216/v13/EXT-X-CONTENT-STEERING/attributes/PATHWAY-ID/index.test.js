import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_CONTENT_STEERING } from '@tags/rfc8216/v13/EXT-X-CONTENT-STEERING';
import { EXT_X_CONTENT_STEERING_ID, PATHWAY_ID_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { PATHWAY_ID } from './index';

describe('v13 PATHWAY-ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_CONTENT_STEERING({
                ...PATHWAY_ID(),
            }),
        });

        expect(schema[EXT_X_CONTENT_STEERING_ID][PATHWAY_ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_CONTENT_STEERING({
                ...PATHWAY_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-CONTENT-STEERING:PATHWAY-ID="azure"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_CONTENT_STEERING_ID][PATHWAY_ID_ID]).toBe('azure');
    });
});
