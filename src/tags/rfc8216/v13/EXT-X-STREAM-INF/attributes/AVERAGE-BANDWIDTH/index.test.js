import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_STREAM_INF } from '@tags/rfc8216/v13/EXT-X-STREAM-INF';
import { EXT_X_STREAM_INF_ID, AVERAGE_BANDWIDTH_ID } from '@tags/const';

import { AVERAGE_BANDWIDTH } from './index';

describe('v13 AVERAGE-BANDWIDTH', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_STREAM_INF({
                ...AVERAGE_BANDWIDTH(),
            }),
        });

        expect(schema[EXT_X_STREAM_INF_ID][AVERAGE_BANDWIDTH_ID]).toBeDefined();
    });
});
