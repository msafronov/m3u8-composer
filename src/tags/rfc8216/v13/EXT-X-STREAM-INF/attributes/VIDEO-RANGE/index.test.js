import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, VIDEO_RANGE_ID } from '@tags/const';

import { VIDEO_RANGE } from './index';

describe('v13 VIDEO-RANGE', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...VIDEO_RANGE(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][VIDEO_RANGE_ID]).toBeDefined();
    });
});
