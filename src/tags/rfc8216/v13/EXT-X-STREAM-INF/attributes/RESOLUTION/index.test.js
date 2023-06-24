import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, RESOLUTION_ID } from '@tags/const';

import { RESOLUTION } from './index';

describe('v13 RESOLUTION', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...RESOLUTION(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][RESOLUTION_ID]).toBeDefined();
    });
});
