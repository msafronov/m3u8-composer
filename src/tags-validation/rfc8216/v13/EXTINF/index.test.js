import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXTINF } from '@tags/rfc8216/v13/EXTINF';
import { EXT_X_VERSION } from '@tags/rfc8216/v13/EXT-X-VERSION';
import { EXT_X_TARGETDURATION } from '@tags/rfc8216/v13/EXT-X-TARGETDURATION';

import { EXTINF_V13 } from './index';

describe('v13 #EXTINF', () => {
    test('a value should be parsed as decimal-integer for #EXT-X-VERSION < 3', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTINF_V13(EXTINF()),
            ...EXT_X_VERSION(),
        }));

        let data = '#EXTM3U\n';

        data += '#EXT-X-TARGETDURATION:10\n';
        data += '#EXT-X-VERSION:2\n';

        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/first.ts\n';
        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/second.ts\n';
        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/third.ts\n';

        interpreter(data, schema);

        expect(schema.logs['0x0000']).toStrictEqual({
            row: 3,
            col: 0, 
            value: '9.009',
        });
    });

    test('a value should be parsed as decimal-floating-point for #EXT-X-VERSION >= 3', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTINF_V13(EXTINF()),
            ...EXT_X_VERSION(),
        }));

        let data = '#EXTM3U\n';

        data += '#EXT-X-TARGETDURATION:10\n';
        data += '#EXT-X-VERSION:13\n';

        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/first.ts\n';
        data += '#EXTINF:-10,\n';
        data += 'http://media.example.com/second.ts\n';
        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/third.ts\n';

        interpreter(data, schema);

        expect(schema.logs['0x0002']).toStrictEqual({
            row: 5,
            col: 0, 
            value: '-10',
        });
    });

    test('a value should be parsed as decimal-floating-point when #EXT-X-VERSION is missing', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTINF_V13(EXTINF()),
            ...EXT_X_VERSION(),
        }));

        let data = '#EXTM3U\n';

        data += '#EXT-X-TARGETDURATION:10\n';

        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/first.ts\n';
        data += '#EXTINF:-10,\n';
        data += 'http://media.example.com/second.ts\n';
        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/third.ts\n';

        interpreter(data, schema);

        expect(schema.logs['0x0002']).toStrictEqual({
            row: 4,
            col: 0, 
            value: '-10',
        });
    });

    test('big duration error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTINF_V13(EXTINF()),
            ...EXT_X_TARGETDURATION(),
        }));

        let data = '#EXTM3U\n';

        data += '#EXT-X-TARGETDURATION:10\n';

        data += '#EXTINF:19.009,big\n';
        data += 'http://media.example.com/first.ts\n';

        interpreter(data, schema);

        expect(schema.logs['0x1261']).toStrictEqual({
            row: 2,
            col: 0, 
            value: '19.009',
        });
    });

    test('big rounded duration error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTINF_V13(EXTINF()),
            ...EXT_X_TARGETDURATION(),
        }));

        let data = '#EXTM3U\n';

        data += '#EXT-X-TARGETDURATION:10\n';

        data += '#EXTINF:10.500,\n';
        data += 'http://media.example.com/first.ts\n';

        interpreter(data, schema);

        expect(schema.logs['0x1261']).toStrictEqual({
            row: 2,
            col: 0, 
            value: '10.500',
        });
    });

    test('there should be no big duration error when #EXT-X-TARGETDURATION is missing', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTINF_V13(EXTINF()),
            ...EXT_X_TARGETDURATION(),
        }));

        let data = '#EXTM3U\n';

        data += '#EXTINF:10.500,\n';
        data += 'http://media.example.com/first.ts\n';

        interpreter(data, schema);

        expect(schema.logs['0x1261']).not.toBeDefined();
    });
});
