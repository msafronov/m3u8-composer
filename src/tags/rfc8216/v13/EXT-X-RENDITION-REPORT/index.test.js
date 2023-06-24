import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { URI } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/URI';
import { LAST_MSN } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/LAST-MSN';
import { LAST_PART } from '@tags/rfc8216/v13/EXT-X-RENDITION-REPORT/attributes/LAST-PART';
import {
    EXT_X_RENDITION_REPORT_ID,
    URI_ID,
    LAST_MSN_ID,
    LAST_PART_ID,
} from '@tags/const';

import { EXT_X_RENDITION_REPORT } from './index';

describe('v13 #EXT-X-RENDITION-REPORT', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_RENDITION_REPORT({
                ...URI(),
                ...LAST_MSN(),
                ...LAST_PART(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-RENDITION-REPORT:URI="filePart273.4.mp4",LAST-MSN=0,LAST-PART=3';

        interpreter(data, schema);

        expect(schema[EXT_X_RENDITION_REPORT_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [URI_ID]: {
                value: '"filePart273.4.mp4"',
                row: 1,
                col: 24,
            },
            [LAST_MSN_ID]: {
                value: '0',
                row: 1,
                col: 48,
            },
            [LAST_PART_ID]: {
                value: '3',
                row: 1,
                col: 59,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_RENDITION_REPORT({
                ...URI(),
                ...LAST_MSN(),
                ...LAST_PART(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-RENDITION-REPORT:URI="filePart273.4.mp4",LAST-MSN=0,LAST-PART=3\n';
        data += '#EXT-X-RENDITION-REPORT:URI="filePart273.5.mp4",LAST-MSN=10,LAST-PART=30';

        interpreter(data, schema);

        expect(schema[EXT_X_RENDITION_REPORT_ID].data.length).toBe(2);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_RENDITION_REPORT({
                ...URI(),
                ...LAST_MSN(),
                ...LAST_PART(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-RENDITION-REPORT:URI="filePart273.4.mp4",LAST-MSN=0,LAST-PART=3';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_RENDITION_REPORT_ID]).toStrictEqual([{
            [URI_ID]: 'filePart273.4.mp4',
            [LAST_MSN_ID]: '0',
            [LAST_PART_ID]: '3',
        }]);
    });

    test('should append the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_RENDITION_REPORT({
                ...URI(),
                ...LAST_MSN(),
                ...LAST_PART(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-RENDITION-REPORT:URI="filePart273.4.mp4",LAST-MSN=0,LAST-PART=3\n';
        data += '#EXT-X-RENDITION-REPORT:URI="filePart273.5.mp4",LAST-MSN=10,LAST-PART=30';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_RENDITION_REPORT_ID].length).toBe(2);
    });
});
