import { describe, expect, test } from 'vitest';
import { EXT_X_I_FRAMES_ONLY_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';

import { EXT_X_I_FRAMES_ONLY } from './index';

describe('v13 #EXT-X-I-FRAMES-ONLY', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAMES_ONLY(),
        });

        const data = '#EXTM3U\n#EXT-X-I-FRAMES-ONLY';

        interpreter(data, schema);

        expect(schema[EXT_X_I_FRAMES_ONLY_ID].data).toStrictEqual([{
            value: true,
            row: 1,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAMES_ONLY(),
        });

        const data = '#EXTM3U\n#EXT-X-I-FRAMES-ONLY';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_I_FRAMES_ONLY_ID]).toBe(true);
    });
});
