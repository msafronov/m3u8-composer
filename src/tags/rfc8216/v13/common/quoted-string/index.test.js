import { describe, expect, test } from 'vitest';

import { quotedString } from './index';

describe('v13 quoted-string', () => {
    test('should cut left and right chars by 1', () => {
        const value = '"/video/segment1.060.ts"';
        const result = quotedString(value);

        expect(result).toBe('/video/segment1.060.ts');
    });
});
