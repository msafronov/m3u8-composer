import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_PART } from '@tags/rfc8216/v13/EXT-X-PART';
import { EXT_X_PART_ID, DURATION_ID } from '@tags/const';

import { DURATION } from './index';

describe('v13 DURATION', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_PART({
                ...DURATION(),
            }),
        });

        expect(schema[EXT_X_PART_ID][DURATION_ID]).toBeDefined();
    });
});
