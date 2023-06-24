import { vi, describe, expect, test } from 'vitest';
import { ValidationSchema } from '@validator/schema';

import { validator } from './index';

describe('validator m3u8-to-schema', () => {
    test('main validate function must be called', () => {
        const schema = ValidationSchema({});

        schema.validate = vi.fn();

        validator(schema);

        expect(schema.validate).toHaveBeenCalledWith(
            schema,
            schema,
            schema,
            true,
        );
    });

    test('validation must not be called when tag data array is empty', () => {
        const schema = ValidationSchema({
            '#EXT-X-CUSTOM-TAG': {
                validate: vi.fn(),
                data: [],
            },
        });

        validator(schema);

        expect(schema['#EXT-X-CUSTOM-TAG'].validate).not.toHaveBeenCalledOnce();
    });

    test('validation must not be called when tag data has already been validated', () => {
        const schema = ValidationSchema({
            '#EXT-X-CUSTOM-TAG': {
                validate: vi.fn(),
                data: [{
                    isValidated: true,
                }],
            },
        });

        validator(schema);

        expect(schema['#EXT-X-CUSTOM-TAG'].validate).not.toHaveBeenCalledWith();
    });

    test('validation must be called with correct arguments', () => {
        const schema = ValidationSchema({
            '#EXT-X-CUSTOM-TAG': {
                validate: vi.fn(),
                data: [{
                    row: 0,
                    coll: 0,
                    isValidated: false,
                }, {
                    row: 1,
                    coll: 0,
                    isValidated: false,
                }],
            },
        });

        validator(schema);

        expect(schema['#EXT-X-CUSTOM-TAG'].validate).toHaveBeenCalledWith(
            schema,
            schema['#EXT-X-CUSTOM-TAG'].data[0],
            schema['#EXT-X-CUSTOM-TAG'].data,
            false,
        );

        expect(schema['#EXT-X-CUSTOM-TAG'].validate).toHaveBeenLastCalledWith(
            schema,
            schema['#EXT-X-CUSTOM-TAG'].data[1],
            schema['#EXT-X-CUSTOM-TAG'].data,
            true,
        );
    });

    test('attribute validation must not be called when it is not present in the data array', () => {
        const schema = ValidationSchema({
            '#EXT-X-CUSTOM-TAG': {
                validate: () => {},
                'CUSTOM-ATTRIBUTE': {
                    validate: vi.fn(),
                },
                data: [{
                    row: 0,
                    coll: 0,
                    isValidated: false,
                }, {
                    row: 1,
                    coll: 0,
                    isValidated: false,
                }],
            },
        });

        validator(schema);

        expect(schema['#EXT-X-CUSTOM-TAG']['CUSTOM-ATTRIBUTE'].validate).not.toHaveBeenCalledOnce();
    });

    test('attribute validation must be called with correct arguments', () => {
        const schema = ValidationSchema({
            '#EXT-X-CUSTOM-TAG': {
                validate: () => {},
                'CUSTOM-ATTRIBUTE': {
                    validate: vi.fn(),
                },
                data: [{
                    row: 0,
                    coll: 0,
                    isValidated: false,
                    'CUSTOM-ATTRIBUTE': {
                        row: 0,
                        coll: 18,
                        isValidated: false,
                    },
                }, {
                    row: 1,
                    coll: 0,
                    isValidated: false,
                }, {
                    row: 2,
                    coll: 0,
                    isValidated: false,
                    'CUSTOM-ATTRIBUTE': {
                        row: 2,
                        coll: 18,
                        isValidated: false,
                    },
                }],
            },
        });

        validator(schema);

        expect(schema['#EXT-X-CUSTOM-TAG']['CUSTOM-ATTRIBUTE'].validate).toHaveBeenCalledWith(
            schema,
            schema['#EXT-X-CUSTOM-TAG'].data[0]['CUSTOM-ATTRIBUTE'],
            undefined,
            false,
        );

        expect(schema['#EXT-X-CUSTOM-TAG']['CUSTOM-ATTRIBUTE'].validate).toHaveBeenLastCalledWith(
            schema,
            schema['#EXT-X-CUSTOM-TAG'].data[2]['CUSTOM-ATTRIBUTE'],
            undefined,
            true,
        );
    });
});
