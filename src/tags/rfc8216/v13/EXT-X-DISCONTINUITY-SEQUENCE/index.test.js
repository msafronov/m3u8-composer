import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_DISCONTINUITY_SEQUENCE_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { EXT_X_DISCONTINUITY_SEQUENCE } from './index';

describe('v13 #EXT-X-DISCONTINUITY-SEQUENCE', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_DISCONTINUITY_SEQUENCE(),
        });

        const data = '#EXTM3U\n#EXT-X-DISCONTINUITY-SEQUENCE:26';

        interpreter(data, schema);

        expect(schema[EXT_X_DISCONTINUITY_SEQUENCE_ID].data).toStrictEqual([{
            value: '26',
            row: 1,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_DISCONTINUITY_SEQUENCE(),
        });

        const data = '#EXTM3U\n#EXT-X-DISCONTINUITY-SEQUENCE:26';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_DISCONTINUITY_SEQUENCE_ID]).toBe('26');
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_DISCONTINUITY_SEQUENCE(),
        });

        const data = '#EXTM3U\n#EXT-X-DISCONTINUITY-SEQUENCE:10\n#EXT-X-DISCONTINUITY-SEQUENCE:20\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_DISCONTINUITY_SEQUENCE_ID]).toBe('20');
    });
});
