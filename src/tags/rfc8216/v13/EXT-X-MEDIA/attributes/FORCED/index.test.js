import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_MEDIA_ID, FORCED_ID } from '@tags/const';

import { FORCED } from './index';

describe('v13 FORCED', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_MEDIA({
                ...FORCED(),
            }),
        });

        expect(schema[EXT_X_MEDIA_ID][FORCED_ID]).toBeDefined();
    });
});
