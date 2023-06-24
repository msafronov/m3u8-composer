import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { PART_HOLD_BACK_ID, EXT_X_SERVER_CONTROL_ID } from '@tags/const';

import { PART_HOLD_BACK } from './index';

describe('v13 PART-HOLD-BACK', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...PART_HOLD_BACK(),
            }),
        });

        expect(schema[EXT_X_SERVER_CONTROL_ID][PART_HOLD_BACK_ID]).toBeDefined();
    });
});
