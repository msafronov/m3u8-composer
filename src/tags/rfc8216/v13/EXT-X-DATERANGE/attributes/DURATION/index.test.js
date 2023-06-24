import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, DURATION_ID } from '@tags/const';

import { DURATION } from './index';

describe('v13 CUE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...DURATION(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][DURATION_ID]).toBeDefined();
    });
});
