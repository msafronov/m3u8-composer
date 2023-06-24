import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, FRAME_RATE_ID } from '@tags/const';

import { FRAME_RATE } from './index';

describe('v13 FRAME-RATE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...FRAME_RATE(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][FRAME_RATE_ID]).toBeDefined();
    });
});
