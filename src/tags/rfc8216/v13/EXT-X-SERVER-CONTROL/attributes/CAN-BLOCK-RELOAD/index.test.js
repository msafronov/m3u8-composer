import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_BLOCK_RELOAD_ID, EXT_X_SERVER_CONTROL_ID } from '@tags/const';

import { CAN_BLOCK_RELOAD } from './index';

describe('v13 CAN-BLOCK-RELOAD', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_BLOCK_RELOAD(),
            }),
        });

        expect(schema[EXT_X_SERVER_CONTROL_ID][CAN_BLOCK_RELOAD_ID]).toBeDefined();
    });
});
