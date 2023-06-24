import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, PLANNED_DURATION_ID } from '@tags/const';

import { PLANNED_DURATION } from './index';

describe('v13 PLANNED-DURATION', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...PLANNED_DURATION(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][PLANNED_DURATION_ID]).toBeDefined();
    });
});
