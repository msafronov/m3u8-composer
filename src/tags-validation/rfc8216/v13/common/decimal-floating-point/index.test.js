import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { decimalFloatingPointV13 } from './index';

describe('v13 decimal-floating-point', () => {
    test('there should be no error when passing a valid integer value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '22',
            row: 1,
            col: 0,
        };

        decimalFloatingPointV13(schema, data);

        expect(schema.logs['0x0002']).not.toBeDefined();
    });

    test('there should be no error when passing a valid float value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '0.2',
            row: 1,
            col: 0,
        };

        decimalFloatingPointV13(schema, data);

        expect(schema.logs['0x0002']).not.toBeDefined();
    });

    test('signed value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '-0.2',
            row: 1,
            col: 0,
        };

        decimalFloatingPointV13(schema, data);

        expect(schema.logs['0x0002']).toStrictEqual(data);
    });

    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '0xFF',
            row: 1,
            col: 0,
        };

        decimalFloatingPointV13(schema, data);

        expect(schema.logs['0x0002']).toStrictEqual(data);
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '',
            row: 1,
            col: 0,
        };

        decimalFloatingPointV13(schema, data);

        expect(schema.logs['0x0002']).toStrictEqual(data);
    });

    test('should save only the first error', () => {
        const schema = ValidationSchema(ParserSchema({}));

        const data = {
            value: '',
            row: 1,
            col: 0,
        };

        const data2 = {
            value: '',
            row: 2,
            col: 0,
        };

        decimalFloatingPointV13(schema, data);
        decimalFloatingPointV13(schema, data2);

        expect(schema.logs['0x0002']).toStrictEqual(data);
    });
});
