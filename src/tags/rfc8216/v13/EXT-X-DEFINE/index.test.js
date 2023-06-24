import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { NAME } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/NAME';
import { IMPORT } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/IMPORT';
import { QUERYPARAM } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/QUERYPARAM';
import { VALUE } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/VALUE';
import { EXT_X_DEFINE_ID, NAME_ID, IMPORT_ID, QUERYPARAM_ID, VALUE_ID } from '@tags/const';

import { EXT_X_DEFINE } from './index';

describe('v13 #EXT-X-DEFINE', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME(),
                ...IMPORT(),
                ...QUERYPARAM(),
                ...VALUE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="path",VALUE="/video/chunk",IMPORT="path",QUERYPARAM="path"';

        interpreter(data, schema);

        expect(schema[EXT_X_DEFINE_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [NAME_ID]: {
                value: '"path"',
                row: 1,
                col: 14,
            },
            [VALUE_ID]: {
                value: '"/video/chunk"',
                row: 1,
                col: 26,
            },
            [IMPORT_ID]: {
                value: '"path"',
                row: 1,
                col: 47,
            },
            [QUERYPARAM_ID]: {
                value: '"path"',
                row: 1,
                col: 61,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME(),
                ...IMPORT(),
                ...QUERYPARAM(),
                ...VALUE(),
            }),
        });
        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="path",VALUE="/video/chunk",IMPORT="path",QUERYPARAM="path"\n#EXT-X-DEFINE:NAME="path2",VALUE="/video/chunk2",IMPORT="path2",QUERYPARAM="path2"\n';

        interpreter(data, schema);

        expect(schema[EXT_X_DEFINE_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [NAME_ID]: {
                value: '"path"',
                row: 1,
                col: 14,
            },
            [VALUE_ID]: {
                value: '"/video/chunk"',
                row: 1,
                col: 26,
            },
            [IMPORT_ID]: {
                value: '"path"',
                row: 1,
                col: 47,
            },
            [QUERYPARAM_ID]: {
                value: '"path"',
                row: 1,
                col: 61,
            },
        }, {
            value: null,
            row: 2,
            col: 0,
            [NAME_ID]: {
                value: '"path2"',
                row: 2,
                col: 14,
            },
            [VALUE_ID]: {
                value: '"/video/chunk2"',
                row: 2,
                col: 27,
            },
            [IMPORT_ID]: {
                value: '"path2"',
                row: 2,
                col: 49,
            },
            [QUERYPARAM_ID]: {
                value: '"path2"',
                row: 2,
                col: 64,
            },
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME(),
                ...IMPORT(),
                ...QUERYPARAM(),
                ...VALUE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="path",VALUE="/video/chunk",IMPORT="path",QUERYPARAM="path"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_DEFINE_ID]).toStrictEqual([{
            [NAME_ID]: 'path',
            [VALUE_ID]: '/video/chunk',
            [IMPORT_ID]: 'path',
            [QUERYPARAM_ID]: 'path',
        }]);
    });

    test('should append the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_DEFINE({
                ...NAME(),
                ...IMPORT(),
                ...QUERYPARAM(),
                ...VALUE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DEFINE:NAME="path",VALUE="/video/chunk",IMPORT="path",QUERYPARAM="path"\n\n\n#EXT-X-DEFINE:NAME="path2",VALUE="/video/chunk2",IMPORT="path2",QUERYPARAM="path2"\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_DEFINE_ID]).toStrictEqual([{
            [NAME_ID]: 'path',
            [VALUE_ID]: '/video/chunk',
            [IMPORT_ID]: 'path',
            [QUERYPARAM_ID]: 'path',
        }, {
            [NAME_ID]: 'path2',
            [VALUE_ID]: '/video/chunk2',
            [IMPORT_ID]: 'path2',
            [QUERYPARAM_ID]: 'path2',
        }]);
    });
});
