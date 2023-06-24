import { describe, expect, test } from 'vitest';
import { EXT_X_ENDLIST_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';

import { EXT_X_ENDLIST } from './index';

describe('v13 #EXT-X-ENDLIST', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_ENDLIST(),
        });

        const data = '#EXT-X-ENDLIST';

        interpreter(data, schema);

        expect(schema[EXT_X_ENDLIST_ID].data).toStrictEqual([{
            value: true,
            row: 0,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_ENDLIST(),
        });

        const data = '#EXT-X-ENDLIST';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_ENDLIST_ID]).toBe(true);
    });
});
