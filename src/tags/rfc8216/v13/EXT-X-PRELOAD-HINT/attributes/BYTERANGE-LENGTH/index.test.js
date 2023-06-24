import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_PRELOAD_HINT } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT';
import { EXT_X_PRELOAD_HINT_ID, BYTERANGE_LENGTH_ID } from '@tags/const';

import { BYTERANGE_LENGTH } from './index';

describe('v13 BYTERANGE-LENGTH', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_PRELOAD_HINT({
                ...BYTERANGE_LENGTH(),
            }),
        });

        expect(schema[EXT_X_PRELOAD_HINT_ID][BYTERANGE_LENGTH_ID]).toBeDefined();
    });
});
