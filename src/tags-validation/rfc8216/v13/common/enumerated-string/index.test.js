import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { enumeratedStringV13 } from './index';

describe('v13 enumerated-string', () => {
    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: 'test',
            row: 1,
            col: 0,
        };

        enumeratedStringV13(schema, data);

        expect(schema.logs['0x0005']).not.toBeDefined();
    });

    test('comma character error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: 'test value',
            row: 1,
            col: 0,
        };

        enumeratedStringV13(schema, data);

        expect(schema.logs['0x0005']).toStrictEqual(data);
    });

    test('comma character error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: 'te,st',
            row: 1,
            col: 0,
        };

        enumeratedStringV13(schema, data);

        expect(schema.logs['0x0005']).toStrictEqual(data);
    });

    test('double quote character error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: 'test"',
            row: 1,
            col: 0,
        };

        enumeratedStringV13(schema, data);

        expect(schema.logs['0x0005']).toStrictEqual(data);
    });

    test('empty value error', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '',
            row: 1,
            col: 0,
        };

        enumeratedStringV13(schema, data);

        expect(schema.logs['0x0005']).toStrictEqual(data);
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

        enumeratedStringV13(schema, data);
        enumeratedStringV13(schema, data2);

        expect(schema.logs['0x0005']).toStrictEqual(data);
    });
});
