import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, START_DATE_ID } from '@tags/const';
import { parser } from '@parser/m3u8-to-schema';

import { START_DATE } from './index';

describe('v13 START-DATE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...START_DATE(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][START_DATE_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...START_DATE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DATERANGE:START-DATE="2018-08-22T21:54:00.079Z"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_DATERANGE_ID][0][START_DATE_ID]).toBe('2018-08-22T21:54:00.079Z');
    });
});
