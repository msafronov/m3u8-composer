import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { DATA_ID } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/DATA-ID';
import { VALUE } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/VALUE';
import { URI } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/URI';
import { FORMAT } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/FORMAT';
import { LANGUAGE } from '@tags/rfc8216/v13/EXT-X-SESSION-DATA/attributes/LANGUAGE';

import {
    EXT_X_SESSION_DATA_ID,
    DATA_ID_ID,
    VALUE_ID,
    URI_ID,
    FORMAT_ID,
    LANGUAGE_ID,
} from '@tags/const';

import { EXT_X_SESSION_DATA } from './index';

describe('v13 #EXT-X-SESSION-DATA', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...DATA_ID(),
                ...VALUE(),
                ...URI(),
                ...FORMAT(),
                ...LANGUAGE(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-SESSION-DATA:DATA-ID="com.example.title",LANGUAGE="en",VALUE="This is an example",';
        data += 'URI="segment1.060.ts",FORMAT=JSON';

        interpreter(data, schema);

        expect(schema[EXT_X_SESSION_DATA_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [DATA_ID_ID]: {
                value: '"com.example.title"',
                row: 1,
                col: 20,
            },
            [VALUE_ID]: {
                value: '"This is an example"',
                row: 1,
                col: 62,
            },
            [URI_ID]: {
                value: '"segment1.060.ts"',
                row: 1,
                col: 89,
            },
            [FORMAT_ID]: {
                value: 'JSON',
                row: 1,
                col: 111,
            },
            [LANGUAGE_ID]: {
                value: '"en"',
                row: 1,
                col: 48,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...DATA_ID(),
                ...VALUE(),
                ...URI(),
                ...FORMAT(),
                ...LANGUAGE(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-SESSION-DATA:DATA-ID="com.example.title",LANGUAGE="en",VALUE="This is an example",';
        data += 'URI="segment1.060.ts",FORMAT=JSON\n';
        
        data += '#EXT-X-SESSION-DATA:DATA-ID="com.example.title2",LANGUAGE="en",VALUE="This is an example",';
        data += 'URI="segment2.060.ts",FORMAT=RAW';

        interpreter(data, schema);

        expect(schema[EXT_X_SESSION_DATA_ID].data.length).toBe(2);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_DATA({
                ...DATA_ID(),
                ...VALUE(),
                ...URI(),
                ...FORMAT(),
                ...LANGUAGE(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-SESSION-DATA:DATA-ID="com.example.title",LANGUAGE="en",VALUE="This is an example",';
        data += 'URI="segment1.060.ts",FORMAT=JSON';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_SESSION_DATA_ID]).toStrictEqual([{
            [DATA_ID_ID]: 'com.example.title',
            [VALUE_ID]: 'This is an example',
            [URI_ID]: 'segment1.060.ts',
            [FORMAT_ID]: 'JSON',
            [LANGUAGE_ID]: 'en',
        }]);
    });
});
