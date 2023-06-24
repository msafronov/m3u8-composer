import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_START } from '@tags/rfc8216/v13/EXT-X-START';
import { EXT_X_START_ID, PRECISE_ID } from '@tags/const';

import { PRECISE } from './index';

describe('v13 PRECISE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_START({
                ...PRECISE(),
            }),
        });

        expect(schema[EXT_X_START_ID][PRECISE_ID]).toBeDefined();
    });
});
