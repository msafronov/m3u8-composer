import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { TIME_OFFSET } from '@tags/rfc8216/v13/EXT-X-START/attributes/TIME-OFFSET';
import { PRECISE } from '@tags/rfc8216/v13/EXT-X-START/attributes/PRECISE';
import { EXT_X_START_ID, TIME_OFFSET_ID, PRECISE_ID } from '@tags/const';

import { EXT_X_START } from './index';

describe('v13 #EXT-X-START', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=25,PRECISE=YES';

        interpreter(data, schema);

        expect(schema[EXT_X_START_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [TIME_OFFSET_ID]: {
                value: '25',
                row: 1,
                col: 13,
            },
            [PRECISE_ID]: {
                value: 'YES',
                row: 1,
                col: 28,
            },
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=-0.25,PRECISE=YES';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_START_ID]).toStrictEqual({
            [TIME_OFFSET_ID]: '-0.25',
            [PRECISE_ID]: 'YES',
        });
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_START({
                ...TIME_OFFSET(),
                ...PRECISE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-START:TIME-OFFSET=0.0,PRECISE=YES\n#EXT-X-START:TIME-OFFSET=0.1,PRECISE=NO\n\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_START_ID]).toStrictEqual({
            [TIME_OFFSET_ID]: '0.1',
            [PRECISE_ID]: 'NO',
        });
    });
});
