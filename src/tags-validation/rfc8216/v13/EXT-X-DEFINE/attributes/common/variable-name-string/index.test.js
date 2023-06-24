import { describe, expect, test } from 'vitest';

import { variableNameStringV13 } from './index';

describe('v13 variable-name-string', () => {
    test('there should be no error when passing a valid value', () => {
        const str = '"test-VALUE_"';
        const result = variableNameStringV13(str);

        expect(result).toBe(true);
    });

    test('empty value error', () => {
        const str = '';
        const result = variableNameStringV13(str);

        expect(result).toBe(false);
    });

    test('empty value error inside quoted string', () => {
        const str = '""';
        const result = variableNameStringV13(str);

        expect(result).toBe(false);
    });

    test('invalid symbols error', () => {
        const str = '"tes"t"';
        const result = variableNameStringV13(str);

        expect(result).toBe(false);
    });
});
