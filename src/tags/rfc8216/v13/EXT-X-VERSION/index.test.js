import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_VERSION_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { EXT_X_VERSION } from './index';

describe('v13 #EXT-X-VERSION', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_VERSION(),
        });

        const data = '#EXTM3U\n#EXT-X-VERSION:13';

        interpreter(data, schema);

        expect(schema[EXT_X_VERSION_ID].data).toStrictEqual([{
            value: '13',
            row: 1,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_VERSION(),
        });

        const data = '#EXTM3U\n#EXT-X-VERSION:13';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_VERSION_ID]).toBe('13');
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_VERSION(),
        });

        const data = '#EXTM3U\n#EXT-X-VERSION:7\n#EXT-X-VERSION:13\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_VERSION_ID]).toBe('13');
    });
});
