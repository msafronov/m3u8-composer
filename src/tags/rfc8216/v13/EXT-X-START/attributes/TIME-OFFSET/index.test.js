import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_START } from '@tags/rfc8216/v13/EXT-X-START';
import { EXT_X_START_ID, TIME_OFFSET_ID } from '@tags/const';

import { TIME_OFFSET } from './index';

describe('v13 TIME-OFFSET', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
            }),
        });

        expect(schema[EXT_X_START_ID][TIME_OFFSET_ID]).toBeDefined();
    });
});
