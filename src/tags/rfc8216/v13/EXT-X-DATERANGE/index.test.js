import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ID } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/ID';
import { CLASS } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/CLASS';
import { START_DATE } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/START-DATE';
import { CUE } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/CUE';
import { END_DATE } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/END-DATE';
import { DURATION } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/DURATION';
import { PLANNED_DURATION } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/PLANNED-DURATION';
import { SCTE35_CMD } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-CMD';
import { SCTE35_OUT } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-OUT';
import { SCTE35_IN } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/SCTE35-IN';
import { END_ON_NEXT } from '@tags/rfc8216/v13/EXT-X-DATERANGE/attributes/END-ON-NEXT';
import {
    CLASS_ID,
    DURATION_ID,
    EXT_X_DATERANGE_ID,
    ID_ID,
    PLANNED_DURATION_ID,
    SCTE35_IN_ID,
    SCTE35_OUT_ID,
    START_DATE_ID,
} from '@tags/const';

import { EXT_X_DATERANGE } from './index';

describe('v13 #EXT-X-DATERANGE', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...ID(),
                ...CLASS(),
                ...START_DATE(),
                ...CUE(),
                ...END_DATE(),
                ...DURATION(),
                ...PLANNED_DURATION(),
                ...SCTE35_CMD(),
                ...SCTE35_OUT(),
                ...SCTE35_IN(),
                ...END_ON_NEXT(),
            }),
        });

        let data = '#EXTM3U\n';

        data += '#EXT-X-DATERANGE:ID="999",';
        data += 'ID="ad1",';
        data += 'CLASS="com.apple.hls.interstitial",';
        data += 'START-DATE="2018-08-22T21:54:00.079Z",';
        data += 'DURATION=15.0,';
        data += 'PLANNED-DURATION=30.000,';
        data += 'SCTE35-IN=0xFC0000425100FFF0140500000300000000E77FEFFE0011FB9EFE0029004D1932E0000100101002A22,';
        data += 'SCTE35-OUT=0xFC302500000000000000FFF01405000003E77FEFFE0011FB9EFE002932E00001010100004D192A59';

        interpreter(data, schema);

        expect(schema[EXT_X_DATERANGE_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [ID_ID]: {
                value: '"ad1"',
                row: 1,
                col: 26,
            },
            [CLASS_ID]: {
                value: '"com.apple.hls.interstitial"',
                row: 1,
                col: 35,
            },
            [START_DATE_ID]: {
                value: '"2018-08-22T21:54:00.079Z"',
                row: 1,
                col: 70,
            },
            [DURATION_ID]: {
                value: '15.0',
                row: 1,
                col: 108,
            },
            [PLANNED_DURATION_ID]: {
                value: '30.000',
                row: 1,
                col: 122,
            },
            [SCTE35_IN_ID]: {
                value: '0xFC0000425100FFF0140500000300000000E77FEFFE0011FB9EFE0029004D1932E0000100101002A22',
                row: 1,
                col: 146,
            },
            [SCTE35_OUT_ID]: {
                value: '0xFC302500000000000000FFF01405000003E77FEFFE0011FB9EFE002932E00001010100004D192A59',
                row: 1,
                col: 240,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DATERANGE:ID="100"\n#EXT-X-DATERANGE:ID="200"';

        interpreter(data, schema);

        expect(schema[EXT_X_DATERANGE_ID].data.length).toBe(2);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...ID(),
                ...CLASS(),
                ...START_DATE(),
                ...CUE(),
                ...END_DATE(),
                ...DURATION(),
                ...PLANNED_DURATION(),
                ...SCTE35_CMD(),
                ...SCTE35_OUT(),
                ...SCTE35_IN(),
                ...END_ON_NEXT(),
            }),
        });

        let data = '#EXTM3U\n';

        data += '#EXT-X-DATERANGE:ID="999",';
        data += 'ID="adv1",';
        data += 'CLASS="com.apple.hls.interstitial",';
        data += 'START-DATE="2018-08-22T21:54:00.079Z",';
        data += 'DURATION=15.0,';
        data += 'PLANNED-DURATION=30.000,';
        data += 'SCTE35-IN=0xFC0000425100FFF0140500000300000000E77FEFFE0011FB9EFE0029004D1932E0000100101002A22,';
        data += 'SCTE35-OUT=0xFC302500000000000000FFF01405000003E77FEFFE0011FB9EFE002932E00001010100004D192A59';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_DATERANGE_ID]).toStrictEqual([{
            [ID_ID]: 'adv1',
            [CLASS_ID]: 'com.apple.hls.interstitial',
            [START_DATE_ID]: '2018-08-22T21:54:00.079Z',
            [DURATION_ID]: '15.0',
            [PLANNED_DURATION_ID]: '30.000',
            [SCTE35_IN_ID]: '0xFC0000425100FFF0140500000300000000E77FEFFE0011FB9EFE0029004D1932E0000100101002A22',
            [SCTE35_OUT_ID]: '0xFC302500000000000000FFF01405000003E77FEFFE0011FB9EFE002932E00001010100004D192A59',
        }]);
    });

    test('should append the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_DATERANGE({
                ...ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-DATERANGE:ID="100"\n#EXT-X-DATERANGE:ID="200"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_DATERANGE_ID].length).toBe(2);
    });
});
