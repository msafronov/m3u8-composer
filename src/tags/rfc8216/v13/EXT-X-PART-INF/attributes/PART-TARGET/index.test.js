import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_PART_INF } from '@tags/rfc8216/v13/EXT-X-PART-INF';
import { EXT_X_PART_INF_ID, PART_TARGET_ID } from '@tags/const';

import { PART_TARGET } from './index';

describe('v13 PART-TARGET', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_PART_INF({
                ...PART_TARGET(),
            }),
        });

        expect(schema[EXT_X_PART_INF_ID][PART_TARGET_ID]).toBeDefined();
    });
});
