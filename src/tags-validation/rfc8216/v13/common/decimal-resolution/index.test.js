import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { decimalResolutionV13 } from './index';

describe('v13 decimal-resolution', () => {
    test('there should be no error when passing a valid value', () => {
        const schema = ValidationSchema(ParserSchema({}));
        const data = {
            value: '640x480',
            row: 1,
            col: 0,
        };

        decimalResolutionV13(schema, data);

        expect(schema.logs['0x0007']).not.toBeDefined();
    });

    // test('invalid value error', () => {
    //     const schema = ValidationSchema(ParserSchema({}));
    //     const data = {
    //         value: '1280 x 1080',
    //         row: 1,
    //         col: 0,
    //     };

    //     decimalResolutionV13(schema, data);

    //     expect(schema.logs['0x0007']).toStrictEqual(data);
    // });

    // test('large value error', () => {
    //     const schema = ValidationSchema(ParserSchema({}));
    //     const data = {
    //         value: '123456x1234',
    //         row: 1,
    //         col: 0,
    //     };

    //     decimalResolutionV13(schema, data);

    //     expect(schema.logs['0x0007']).toStrictEqual(data);
    // });

    // test('empty value error', () => {
    //     const schema = ValidationSchema(ParserSchema({}));
    //     const data = {
    //         value: '',
    //         row: 1,
    //         col: 0,
    //     };

    //     decimalResolutionV13(schema, data);

    //     expect(schema.logs['0x0007']).toStrictEqual(data);
    // });

    // test('should save only the first error', () => {
    //     const schema = ValidationSchema(ParserSchema({}));

    //     const data = {
    //         value: '',
    //         row: 1,
    //         col: 0,
    //     };

    //     const data2 = {
    //         value: '',
    //         row: 2,
    //         col: 0,
    //     };

    //     decimalResolutionV13(schema, data);
    //     decimalResolutionV13(schema, data2);

    //     expect(schema.logs['0x0007']).toStrictEqual(data);
    // });
});
