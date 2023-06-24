import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_DATERANGE } from '@tags/rfc8216/v13/EXT-X-DATERANGE';
import { EXT_X_DATERANGE_ID, SCTE35_CMD_ID } from '@tags/const';

import { SCTE35_CMD } from './index';

describe('v13 SCTE35-CMD', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...SCTE35_CMD(),
            }),
        });

        expect(schema[EXT_X_DATERANGE_ID][SCTE35_CMD_ID]).toBeDefined();
    });
});
