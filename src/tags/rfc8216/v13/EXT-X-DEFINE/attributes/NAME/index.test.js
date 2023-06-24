import { describe, expect, test } from 'vitest';
import { parser } from '@parser/m3u8-to-schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';
import { EXT_X_DEFINE_ID, NAME_ID } from '@tags/const';

import { NAME } from './index';

describe('v13 NAME', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME(),
            }),
        });

        expect(schema[EXT_X_DEFINE_ID][NAME_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="test"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_DEFINE_ID][0][NAME_ID]).toBe('test');
    });
});
