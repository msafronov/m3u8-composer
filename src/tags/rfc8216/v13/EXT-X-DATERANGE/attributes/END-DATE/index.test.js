import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, END_DATE_ID } from '@tags/const';

import { END_DATE } from './index';
import { parser } from '@parser/m3u8-to-schema';

describe('v13 END-DATE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...END_DATE(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][END_DATE_ID]).toBeDefined();
    });

    test('should parse quoted-string value correctly', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...END_DATE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DATERANGE:END-DATE="2018-08-22T21:54:00.079Z"';

        parser(data, schema);

        expect(schema.playlist[EXT_X_DATERANGE_ID][0][END_DATE_ID]).toBe('2018-08-22T21:54:00.079Z');
    });
});
