import { describe, expect, test } from 'vitest';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_VERSION } from '@tags/rfc8216/v13/EXT-X-VERSION';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { INSTREAM_ID } from '@tags/rfc8216/v13/EXT-X-MEDIA/attributes/INSTREAM-ID';
import { MULTIVARIANT_PLAYLIST_ID } from '@tags/const';
import { EXT_X_KEY } from '@tags/rfc8216/v13/EXT-X-KEY';
import { IV } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/IV';
import { EXT_X_BYTERANGE } from '@tags/rfc8216/v13/EXT-X-BYTERANGE';
import { EXT_X_I_FRAMES_ONLY } from '@tags/rfc8216/v13/EXT-X-I-FRAMES-ONLY';

import { EXT_X_VERSION_V13 } from './index';
import { METHOD } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/METHOD';
import { KEYFORMAT } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMAT';
import { KEYFORMATVERSIONS } from '@tags/rfc8216/v13/EXT-X-KEY/attributes/KEYFORMATVERSIONS';
import { EXT_X_MAP } from '@tags/rfc8216/v13/EXT-X-MAP';
import { EXT_X_DEFINE } from '@tags/rfc8216/v13/EXT-X-DEFINE';
import { EXT_X_SKIP } from '@tags/rfc8216/v13/EXT-X-SKIP';
import { QUERYPARAM } from '@tags/rfc8216/v13/EXT-X-DEFINE/attributes/QUERYPARAM';

describe('v13 #EXT-X-VERSION', () => {
    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:8\n#EXT-X-VERSION:9';

        interpreter(data, schema);

        expect(schema.logs['0x1021']).toStrictEqual({
            isValidated: true,
            value: '9',
            row: 2,
            col: 0,
        });
    });

    test('version 7 compatibility error (multivariant playlist)', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_MEDIA({
                ...INSTREAM_ID(),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:6\n#EXT-X-MEDIA:INSTREAM-ID="SERVICE"';

        schema.metadata[MULTIVARIANT_PLAYLIST_ID] = true;

        interpreter(data, schema);

        expect(schema.logs['0x102A']).toStrictEqual({
            isValidated: true,
            value: '6',
            row: 1,
            col: 0,
        });
    });

    test('version 2 compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_KEY({
                ...IV(),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:1\n#EXT-X-KEY:IV=0x00000000000000000000000000000000\nsegment1.060.ts';

        interpreter(data, schema);

        expect(schema.logs['0x1022']).toStrictEqual({
            isValidated: true,
            value: '1',
            row: 1,
            col: 0,
        });
    });

    test('version 4 and byterange compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_BYTERANGE(),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-BYTERANGE:8648@376\ntest/segment_0.ts';

        interpreter(data, schema);

        expect(schema.logs['0x1024']).toStrictEqual({
            isValidated: true,
            value: '3',
            row: 1,
            col: 0,
        });
    });

    test('version 4 and i-frames compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_I_FRAMES_ONLY(),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-I-FRAMES-ONLY';

        interpreter(data, schema);

        expect(schema.logs['0x1025']).toStrictEqual({
            isValidated: true,
            value: '3',
            row: 1,
            col: 0,
        });
    });

    test('version 5 and key method compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_KEY({
                ...METHOD(),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:4\n#EXT-X-KEY:METHOD=SAMPLE-AES';

        interpreter(data, schema);

        expect(schema.logs['0x1026']).toStrictEqual({
            isValidated: true,
            value: '4',
            row: 1,
            col: 0,
        });
    });

    test('version 5 and key format compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_KEY({
                ...KEYFORMAT(),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:4\n#EXT-X-KEY:KEYFORMAT="com.apple.streamingkeydelivery"';

        interpreter(data, schema);

        expect(schema.logs['0x1027']).toStrictEqual({
            isValidated: true,
            value: '4',
            row: 1,
            col: 0,
        });
    });

    test('version 5 and key format versions compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_KEY({
                ...KEYFORMATVERSIONS(),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:4\n#EXT-X-KEY:KEYFORMATVERSIONS="1"';

        interpreter(data, schema);

        expect(schema.logs['0x1027']).toStrictEqual({
            isValidated: true,
            value: '4',
            row: 1,
            col: 0,
        });
    });

    test('version 5 and map compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_MAP({}),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:4\n#EXT-X-MAP:URI="1_init.mp4"\n20181217T135737-01-76vod.mp4';

        interpreter(data, schema);

        expect(schema.logs['0x1028']).toStrictEqual({
            isValidated: true,
            value: '4',
            row: 1,
            col: 0,
        });
    });

    test('version 6 compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_I_FRAMES_ONLY(),
            ...EXT_X_MAP({}),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:5\n#EXT-X-MAP:URI="1_init.mp4"\n20181217T135737-01-76vod.mp4';

        interpreter(data, schema);

        expect(schema.logs['0x1029']).toStrictEqual({
            isValidated: true,
            value: '5',
            row: 1,
            col: 0,
        });
    });

    test('version 8 compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_DEFINE({}),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:7\n#EXT-X-DEFINE:IMPORT="auth"';

        interpreter(data, schema);

        expect(schema.logs['0x102B']).toStrictEqual({
            isValidated: true,
            value: '7',
            row: 1,
            col: 0,
        });
    });

    test('version 9 compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_SKIP({}),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:8\n#EXT-X-SKIP:SKIPPED-SEGMENTS=3';

        interpreter(data, schema);

        expect(schema.logs['0x102C']).toStrictEqual({
            isValidated: true,
            value: '8',
            row: 1,
            col: 0,
        });
    });

    test('version 11 compatibility error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_VERSION_V13(EXT_X_VERSION()),
            ...EXT_X_DEFINE({
                ...QUERYPARAM(),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-VERSION:10\n#EXT-X-DEFINE:QUERYPARAM="token"';

        interpreter(data, schema);

        expect(schema.logs['0x102E']).toStrictEqual({
            isValidated: true,
            value: '10',
            row: 1,
            col: 0,
        });
    });
});
