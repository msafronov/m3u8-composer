import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SESSION_DATA } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA';
import { EXT_X_SESSION_DATA_ID, DATA_ID_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { DATA_ID } from './index';

describe('v13 DATA_ID', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...DATA_ID(),
            }),
        });

        expect(schema[EXT_X_SESSION_DATA_ID][DATA_ID_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...DATA_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SESSION-DATA:DATA-ID="com.example.lyrics"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_SESSION_DATA_ID][0][DATA_ID_ID]).toBe('com.example.lyrics');
    });
});
