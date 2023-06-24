import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, SCORE_ID } from '@tags/const';

import { SCORE } from './index';

describe('v13 SCORE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...SCORE(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][SCORE_ID]).toBeDefined();
    });
});
