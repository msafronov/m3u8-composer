import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_PRELOAD_HINT } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT';
import { EXT_X_PRELOAD_HINT_ID, TYPE_ID } from '@tags/const';

import { TYPE } from './index';

describe('v13 TYPE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_PRELOAD_HINT({
                ...TYPE(),
            }),
        });

        expect(schema[EXT_X_PRELOAD_HINT_ID][TYPE_ID]).toBeDefined();
    });
});
