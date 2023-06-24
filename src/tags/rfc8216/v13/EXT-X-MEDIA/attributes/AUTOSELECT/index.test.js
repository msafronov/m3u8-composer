import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, AUTOSELECT_ID } from '@tags/const';

import { AUTOSELECT } from './index';

describe('v13 AUTOSELECT', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...AUTOSELECT(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][AUTOSELECT_ID]).toBeDefined();
    });
});
