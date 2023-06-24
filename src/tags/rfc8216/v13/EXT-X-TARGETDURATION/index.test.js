import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_TARGETDURATION_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { EXT_X_TARGETDURATION } from './index';

describe('v13 #EXT-X-TARGETDURATION', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_TARGETDURATION(),
        });

        const data = '#EXTM3U\n#EXT-X-TARGETDURATION:20';

        interpreter(data, schema);

        expect(schema[EXT_X_TARGETDURATION_ID].data).toStrictEqual([{
            value: '20',
            row: 1,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_TARGETDURATION(),
        });

        const data = '#EXTM3U\n#EXT-X-TARGETDURATION:20';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_TARGETDURATION_ID]).toBe('20');
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_TARGETDURATION(),
        });

        const data = '#EXTM3U\n#EXT-X-TARGETDURATION:10\n#EXT-X-TARGETDURATION:20\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_TARGETDURATION_ID]).toBe('20');
    });
});
