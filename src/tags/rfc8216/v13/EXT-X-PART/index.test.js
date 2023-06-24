import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_PART_ID, URI_ID, DURATION_ID, INDEPENDENT_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { URI } from '@tags/rfc8216/v13/EXT-X-PART/attributes/URI';
import { DURATION } from '@tags/rfc8216/v13/EXT-X-PART/attributes/DURATION';
import { INDEPENDENT } from '@tags/rfc8216/v13/EXT-X-PART/attributes/INDEPENDENT';
import { BYTERANGE } from '@tags/rfc8216/v13/EXT-X-PART/attributes/BYTERANGE';
import { GAP } from '@tags/rfc8216/v13/EXT-X-PART/attributes/GAP';

import { EXT_X_PART } from './index';

describe('v13 #EXT-X-PART', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_PART({
                ...URI(),
                ...DURATION(),
                ...INDEPENDENT(),
                ...BYTERANGE(),
                ...GAP(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-PART:DURATION=0.33334,URI="filePart271.0.mp4"\n';
        data += '#EXT-X-PART:DURATION=0.33334,URI="filePart271.1.mp4",INDEPENDENT=YES\n';

        interpreter(data, schema);

        expect(schema[EXT_X_PART_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [DURATION_ID]: {
                value: '0.33334',
                row: 1,
                col: 12,
            },
            [URI_ID]: {
                value: '"filePart271.0.mp4"',
                row: 1,
                col: 29,
            },
        }, {
            value: null,
            row: 2,
            col: 0,
            [DURATION_ID]: {
                value: '0.33334',
                row: 2,
                col: 12,
            },
            [URI_ID]: {
                value: '"filePart271.1.mp4"',
                row: 2,
                col: 29,
            },
            [INDEPENDENT_ID]: {
                value: 'YES',
                row: 2,
                col: 53,
            },
        }]);
    });

    test('should save the value into the Media Segments result', () => {
        const schema = ParserSchema({
            ...EXT_X_PART({
                ...URI(),
                ...DURATION(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-PART:DURATION=0.33334,URI="filePart271.0.mp4"\nfile.000.ts';

        interpreter(data, schema);

        expect(schema.mediaSegments[0][EXT_X_PART_ID][0][URI_ID]).toBe('filePart271.0.mp4');
    });
});
