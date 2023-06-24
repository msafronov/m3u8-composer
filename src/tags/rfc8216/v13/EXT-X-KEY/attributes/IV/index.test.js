import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_KEY } from '@tags/rfc8216/v13/EXT-X-KEY';
import { EXT_X_KEY_ID, IV_ID } from '@tags/const';

import { IV } from './index';

describe('v13 IV', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_KEY({
                ...IV(),
            }),
        });

        expect(schema[EXT_X_KEY_ID][IV_ID]).toBeDefined();
    });
});
