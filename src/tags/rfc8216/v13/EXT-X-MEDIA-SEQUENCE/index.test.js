import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_MEDIA_SEQUENCE_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { EXT_X_MEDIA_SEQUENCE } from './index';

describe('v13 #EXT-X-MEDIA-SEQUENCE', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA_SEQUENCE(),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:26';

        interpreter(data, schema);

        expect(schema[EXT_X_MEDIA_SEQUENCE_ID].data).toStrictEqual([{
            value: '26',
            row: 1,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA_SEQUENCE(),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:26';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_SEQUENCE_ID]).toBe('26');
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA_SEQUENCE(),
        });

        const data = '#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:10\n#EXT-X-MEDIA-SEQUENCE:20\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_MEDIA_SEQUENCE_ID]).toBe('20');
    });
});
