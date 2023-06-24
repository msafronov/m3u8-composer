import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_SESSION_KEY } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY';
import { EXT_X_SESSION_KEY_ID, METHOD_ID } from '@tags/const';

import { METHOD } from './index';

describe('v13 METHOD', () => {
    test('should be defined', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_KEY({
                ...METHOD(),
            }),
        });

        expect(schema[EXT_X_SESSION_KEY_ID][METHOD_ID]).toBeDefined();
    });
});
