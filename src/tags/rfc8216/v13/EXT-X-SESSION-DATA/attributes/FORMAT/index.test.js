import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SESSION_DATA } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA';
import { EXT_X_SESSION_DATA_ID, FORMAT_ID } from '@tags/const';

import { FORMAT } from './index';

describe('v13 FORMAT', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...FORMAT(),
            }),
        });

        expect(schema[EXT_X_SESSION_DATA_ID][FORMAT_ID]).toBeDefined();
    });
});
