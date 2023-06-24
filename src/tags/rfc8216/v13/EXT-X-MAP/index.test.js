import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_MAP_ID, URI_ID, BYTERANGE_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { URI } from '@tags/rfc8216/v13/EXT-X-MAP/attributes/URI';
import { BYTERANGE } from '@tags/rfc8216/v13/EXT-X-MAP/attributes/BYTERANGE';

import { EXT_X_MAP } from './index';

describe('v13 #EXT-X-MAP', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_MAP({
                ...URI(),
                ...BYTERANGE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MAP:URI="main.mp4",BYTERANGE="560@0"';

        interpreter(data, schema);

        expect(schema[EXT_X_MAP_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [URI_ID]: {
                value: '"main.mp4"',
                row: 1,
                col: 11,
            },
            [BYTERANGE_ID]: {
                value: '"560@0"',
                row: 1,
                col: 26,
            },
        }]);
    });

    test('should save the value into the Media Segments result', () => {
        const schema = ParserSchema({
            ...EXT_X_MAP({
                ...URI(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MAP:URI="main.mp4"\nfileSequence271.mp4';

        interpreter(data, schema);

        expect(schema.mediaSegments[0][EXT_X_MAP_ID][URI_ID]).toBe('main.mp4');
    });

    test('should override to the last value into the Media Segments result', () => {
        const schema = ParserSchema({
            ...EXT_X_MAP({
                ...URI(),
                ...BYTERANGE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-MAP:URI="main.mp4",BYTERANGE="560@0"\n#EXT-X-MAP:URI="fileSequence269.mp4"\nfileSequence271.mp4';

        interpreter(data, schema);

        expect(schema.mediaSegments[0][EXT_X_MAP_ID][URI_ID]).toBe('fileSequence269.mp4');
    });
});
