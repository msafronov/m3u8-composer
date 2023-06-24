import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_PART } from '@tags/rfc8216/v13/EXT-X-PART';
import { EXT_X_PART_ID, INDEPENDENT_ID } from '@tags/const';

import { INDEPENDENT } from './index';

describe('v13 INDEPENDENT', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_PART({
                ...INDEPENDENT(),
            }),
        });

        expect(schema[EXT_X_PART_ID][INDEPENDENT_ID]).toBeDefined();
    });
});
