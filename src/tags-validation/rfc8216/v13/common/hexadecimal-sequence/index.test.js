import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { hexadecimalSequenceV13 } from './index';

describe('v13 hexadecimal-sequence', () => {
    test('there should be no error when passing a valid hex value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '0xFF',
            row: 1,
            col: 0,
        };

        hexadecimalSequenceV13(schema, data);

        expect(schema.logs['0x0001']).not.toBeDefined();
    });

    test('there should be no error when passing a valid hex value with big X', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '0X0A',
            row: 1,
            col: 0,
        };

        hexadecimalSequenceV13(schema, data);

        expect(schema.logs['0x0001']).not.toBeDefined();
    });

    test('invalid value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '22',
            row: 1,
            col: 0,
        };

        hexadecimalSequenceV13(schema, data);

        expect(schema.logs['0x0001']).toStrictEqual(data);
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '',
            row: 1,
            col: 0,
        };

        hexadecimalSequenceV13(schema, data);

        expect(schema.logs['0x0001']).toStrictEqual(data);
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

        hexadecimalSequenceV13(schema, data);
        hexadecimalSequenceV13(schema, data2);

        expect(schema.logs['0x0001']).toStrictEqual(data);
    });
});
