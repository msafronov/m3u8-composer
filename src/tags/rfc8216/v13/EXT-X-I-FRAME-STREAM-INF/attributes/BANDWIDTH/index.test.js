import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_I_FRAME_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-I-FRAME-STREAM-INF';
import { EXT_X_I_FRAME_STREAM_INF_ID, BANDWIDTH_ID } from '@tags/const';

import { BANDWIDTH } from './index';

describe('v13 BANDWIDTH', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_I_FRAME_STREAM_INF({
                ...BANDWIDTH(),
            }),
        });

        expect(schema[EXT_X_I_FRAME_STREAM_INF_ID][BANDWIDTH_ID]).toBeDefined();
    });
});
