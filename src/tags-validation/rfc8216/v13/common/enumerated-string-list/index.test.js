import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { enumeratedStringListV13 } from './index';

describe('v13 enumerated-string-list', () => {
    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"test"',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).not.toBeDefined();
    });

    test('there should be no error when passing a valid value with commas', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"test,test2,test3"',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).not.toBeDefined();
    });

    test('non-quoted-string error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: 'test',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).toStrictEqual(data);
    });

    test('nested invalid enumerated-string error with double quote character', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"te"st"',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).toStrictEqual(data);
    });

    test('nested invalid enumerated-string error with whitespace character', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"test value"',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).toStrictEqual(data);
    });

    test('nested invalid enumerated-string error with whitespace character as the second string', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"test2,test value"',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).toStrictEqual(data);
    });

    test('nested invalid enumerated-string error with empty string', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '"test,"',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).toStrictEqual(data);
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '',
            row: 1,
            col: 0,
        };

        enumeratedStringListV13(schema, data);

        expect(schema.logs['0x0006']).toStrictEqual(data);
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

        enumeratedStringListV13(schema, data);
        enumeratedStringListV13(schema, data2);

        expect(schema.logs['0x0006']).toStrictEqual(data);
    });
});
