import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { quotedStringV13 } from './index';

describe('v13 quoted-string', () => {
    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"test#%^&*()"',
            row: 1,
            col: 0,
        };

        quotedStringV13(schema, data);

        expect(schema.logs['0x0004']).not.toBeDefined();
    });

    test('there should be no error when passing an empty value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '""',
            row: 1,
            col: 0,
        };
        const mayBeEmpty = true;

        quotedStringV13(schema, data, mayBeEmpty);

        expect(schema.logs['0x0004']).not.toBeDefined();
    });

    test('string with carriage return character error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"tes\rt"',
            row: 1,
            col: 0,
        };

        quotedStringV13(schema, data);

        expect(schema.logs['0x0004']).toStrictEqual(data);
    });

    test('string with line feed character error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"tes\nt"',
            row: 1,
            col: 0,
        };

        quotedStringV13(schema, data);

        expect(schema.logs['0x0004']).toStrictEqual(data);
    });

    test('string with double quote character error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"tes"t"',
            row: 1,
            col: 0,
        };

        quotedStringV13(schema, data);

        expect(schema.logs['0x0004']).toStrictEqual(data);
    });

    test('empty string value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '""',
            row: 1,
            col: 0,
        };

        quotedStringV13(schema, data);

        expect(schema.logs['0x0004']).toStrictEqual(data);
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '',
            row: 1,
            col: 0,
        };

        quotedStringV13(schema, data);

        expect(schema.logs['0x0004']).toStrictEqual(data);
    });

    test('should save only the first error', () => {
        const schema = ValidationSchema(ParserSchema({}));

        const data = {
            value: '""',
            row: 1,
            col: 0,
        };

        const data2 = {
            value: '""',
            row: 2,
            col: 0,
        };

        quotedStringV13(schema, data);
        quotedStringV13(schema, data2);

        expect(schema.logs['0x0004']).toStrictEqual(data);
    });
});
