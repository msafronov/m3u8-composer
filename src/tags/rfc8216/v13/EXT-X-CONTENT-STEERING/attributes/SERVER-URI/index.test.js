import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_CONTENT_STEERING } from '@tags/rfc8216/v13/EXT-X-CONTENT-STEERING';
import { EXT_X_CONTENT_STEERING_ID, SERVER_URI_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { SERVER_URI } from './index';

describe('v13 SERVER-URI', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_CONTENT_STEERING({
                ...SERVER_URI(),
            }),
        });

        expect(schema[EXT_X_CONTENT_STEERING_ID][SERVER_URI_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_CONTENT_STEERING({
                ...SERVER_URI(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-CONTENT-STEERING:SERVER-URI="https://example.com/content-steering?switching=true"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_CONTENT_STEERING_ID][SERVER_URI_ID]).toBe('https://example.com/content-steering?switching=true');
    });
});
