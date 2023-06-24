import { describe, expect, test } from 'vitest';
import { EXTM3U_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';

import { EXTM3U } from './index';

describe('v13 #EXTM3U', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXTM3U(),
        });

        const data = '#EXTM3U';

        interpreter(data, schema);

        expect(schema[EXTM3U_ID].data).toStrictEqual([{
            value: true,
            row: 0,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXTM3U(),
        });

        const data = '#EXTM3U';

        interpreter(data, schema);

        expect(schema.playlist[EXTM3U_ID]).toBe(true);
    });
});
