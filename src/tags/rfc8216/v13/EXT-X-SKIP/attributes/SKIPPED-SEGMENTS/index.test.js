import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SKIP } from '@tags/rfc8216/v13/EXT-X-SKIP';
import { EXT_X_SKIP_ID, SKIPPED_SEGMENTS_ID } from '@tags/const';

import { SKIPPED_SEGMENTS } from './index';

describe('v13 SKIPPED-SEGMENTS', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SKIP({
                ...SKIPPED_SEGMENTS(),
            }),
        });

        expect(schema[EXT_X_SKIP_ID][SKIPPED_SEGMENTS_ID]).toBeDefined();
    });
});
