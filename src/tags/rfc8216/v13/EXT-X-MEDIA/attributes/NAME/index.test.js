import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, NAME_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { NAME } from './index';

describe('v13 NAME', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...NAME(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][NAME_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...NAME(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA:NAME="Dubbing"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_ID][0][NAME_ID]).toBe('Dubbing');
    });
});
