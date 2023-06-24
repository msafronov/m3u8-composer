import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SERVER_CONTROL } from '@tags/rfc8216/v13/EXT-X-SERVER-CONTROL';
import { CAN_SKIP_UNTIL_ID, EXT_X_SERVER_CONTROL_ID } from '@tags/const';

import { CAN_SKIP_UNTIL } from './index';

describe('v13 CAN-SKIP-UNTIL', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SERVER_CONTROL({
                ...CAN_SKIP_UNTIL(),
            }),
        });

        expect(schema[EXT_X_SERVER_CONTROL_ID][CAN_SKIP_UNTIL_ID]).toBeDefined();
    });
});
