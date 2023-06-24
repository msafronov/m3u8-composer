import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_SESSION_KEY_ID, METHOD_ID, URI_ID, IV_ID, KEYFORMATVERSIONS_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { METHOD } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY/attributes/METHOD';
import { URI } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY/attributes/URI';
import { IV } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY/attributes/IV';
import { KEYFORMAT } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY/attributes/KEYFORMAT';
import { KEYFORMATVERSIONS } from '@tags/rfc8216/v13/EXT-X-SESSION-KEY/attributes/KEYFORMATVERSIONS';

import { EXT_X_SESSION_KEY } from './index';

describe('v13 #EXT-X-SESSION-KEY', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_KEY({
                ...METHOD(),
                ...URI(),
                ...IV(),
                ...KEYFORMAT(),
                ...KEYFORMATVERSIONS(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SESSION-KEY:METHOD=AES-128,URI="https://example.com/key.php?r=52",IV=0xFEDCBA9876543210FEDCBA9876543210,KEYFORMATVERSIONS="1/2/5"';

        interpreter(data, schema);

        expect(schema[EXT_X_SESSION_KEY_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [METHOD_ID]: {
                value: 'AES-128',
                row: 1,
                col: 19,
            },
            [URI_ID]: {
                value: '"https://example.com/key.php?r=52"',
                row: 1,
                col: 34,
            },
            [IV_ID]: {
                value: '0xFEDCBA9876543210FEDCBA9876543210',
                row: 1,
                col: 73,
            },
            [KEYFORMATVERSIONS_ID]: {
                value: '"1/2/5"',
                row: 1,
                col: 111,
            },
        }]);
    });

    test('should save the value into the playlist result', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_KEY({
                ...METHOD(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SESSION-KEY:METHOD=AES-128\nfile.000.ts';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_SESSION_KEY_ID][METHOD_ID]).toBe('AES-128');
    });

    test('should override to the last value into the playlist result', () => {
        const schema = ParserSchema({
            ...EXT_X_SESSION_KEY({
                ...METHOD(),
                ...URI(),
                ...IV(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-SESSION-KEY:METHOD=SAMPLE-AES,IV=0x00000000000000000000000000000001\n#EXT-X-SESSION-KEY:METHOD=AES-128\nfile.000.ts\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_SESSION_KEY_ID][METHOD_ID]).toBe('AES-128');
    });
});
