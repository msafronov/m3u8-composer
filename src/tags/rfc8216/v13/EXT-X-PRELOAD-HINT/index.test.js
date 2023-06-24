import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { TYPE } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/TYPE';
import { URI } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/URI';
import { BYTERANGE_START } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/BYTERANGE-START';
import { BYTERANGE_LENGTH } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/BYTERANGE-LENGTH';
import {
    EXT_X_PRELOAD_HINT_ID,
    TYPE_ID,
    URI_ID,
    BYTERANGE_START_ID,
    BYTERANGE_LENGTH_ID,
} from '@tags/const';

import { EXT_X_PRELOAD_HINT } from './index';

describe('v13 #EXT-X-PRELOAD-HINT', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_PRELOAD_HINT({
                ...TYPE(),
                ...URI(),
                ...BYTERANGE_START(),
                ...BYTERANGE_LENGTH(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="filePart273.4.mp4",BYTERANGE-START=360,BYTERANGE-LENGTH=180';

        interpreter(data, schema);

        expect(schema[EXT_X_PRELOAD_HINT_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [TYPE_ID]: {
                value: 'PART',
                row: 1,
                col: 20,
            },
            [URI_ID]: {
                value: '"filePart273.4.mp4"',
                row: 1,
                col: 30,
            },
            [BYTERANGE_START_ID]: {
                value: '180',
                row: 1,
                col: 74,
            },
            [BYTERANGE_LENGTH_ID]: {
                value: '360',
                row: 1,
                col: 54,
            },
        }]);
    });

    test('should append the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_PRELOAD_HINT({
                ...TYPE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="filePart273.4.mp4"\n#EXT-X-PRELOAD-HINT:TYPE=MAP,URI="filePart273.5.mp4"';

        interpreter(data, schema);

        expect(schema[EXT_X_PRELOAD_HINT_ID].data.length).toBe(2);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_PRELOAD_HINT({
              ...TYPE(),
              ...URI(),
              ...BYTERANGE_START(),
              ...BYTERANGE_LENGTH(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="filePart273.4.mp4"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_PRELOAD_HINT_ID]).toStrictEqual([{
            [TYPE_ID]: 'PART',
            [URI_ID]: 'filePart273.4.mp4',
        }]);
    });

    test('should append the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_PRELOAD_HINT({
              ...TYPE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="filePart273.4.mp4"\n#EXT-X-PRELOAD-HINT:TYPE=MAP,URI="filePart273.5.mp4"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_PRELOAD_HINT_ID].length).toBe(2);
    });
});
