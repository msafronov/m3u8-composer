import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_RENDITION_REPORT } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT';
import { EXT_X_RENDITION_REPORT_ID, LAST_MSN_ID } from '@tags/const';

import { LAST_MSN } from './index';

describe('v13 LAST-PART', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_RENDITION_REPORT({
                ...LAST_MSN(),
            }),
        });

        expect(schema[EXT_X_RENDITION_REPORT_ID][LAST_MSN_ID]).toBeDefined();
    });
});
