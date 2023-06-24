import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, END_ON_NEXT_ID } from '@tags/const';

import { END_ON_NEXT } from './index';

describe('v13 END-ON-NEXT', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...END_ON_NEXT(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][END_ON_NEXT_ID]).toBeDefined();
    });
});
