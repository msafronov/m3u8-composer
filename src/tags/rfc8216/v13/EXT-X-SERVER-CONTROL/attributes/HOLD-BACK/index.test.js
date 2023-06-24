import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { HOLD_BACK_ID, EXT_X_SERVER_CONTROL_ID } from '@tags/const';

import { HOLD_BACK } from './index';

describe('v13 HOLD-BACK', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...HOLD_BACK(),
            }),
        });

        expect(schema[EXT_X_SERVER_CONTROL_ID][HOLD_BACK_ID]).toBeDefined();
    });
});
