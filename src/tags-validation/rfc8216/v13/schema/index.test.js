import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_TARGETDURATION } from '@tags/rfc8216/v13/EXT-X-TARGETDURATION';
import { EXT_X_MEDIA } from '@tags/rfc8216/v13/EXT-X-MEDIA';
import { EXT_X_ENDLIST } from '@tags/rfc8216/v13/EXT-X-ENDLIST';
import { EXT_X_PRELOAD_HINT } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT';
import { TYPE } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/TYPE';
import { URI } from '@tags/rfc8216/v13/EXT-X-PRELOAD-HINT/attributes/URI';
import { EXTINF } from '@tags/rfc8216/v13/EXTINF';

import { ValidationSchema } from './index';

describe('v13 ValidationSchema', () => {
    test('missing #EXTM3U tag error', () => {
        const schema = ValidationSchema(ParserSchema({}));

        const data = '';

        interpreter(data, schema);

        expect(schema.logs['0x1001']).toStrictEqual({
            value: null,
            row: 0,
            col: 0,
            isValidated: true,
        });
    });

    test('missing #EXT-X-TARGETDURATION tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_TARGETDURATION(),
        }));

        const data = '#EXTM3U';

        interpreter(data, schema);

        expect(schema.logs['0x1100']).toStrictEqual({
            value: null,
            row: 0,
            col: 0,
            isValidated: true,
        });
    });

    test('missing #EXT-X-TARGETDURATION tag of multivariant playlist without an error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_TARGETDURATION(),
            ...EXT_X_MEDIA(),
        }));

        const data = '#EXTM3U\n#EXT-X-MEDIA:URI="/media/encoded/asset127-a/1MB/"';

        interpreter(data, schema);

        expect(schema.logs['0x1100']).not.toBeDefined();
    });

    test('excess #EXT-X-PRELOAD-HINT tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_ENDLIST(),
            ...EXT_X_PRELOAD_HINT({
                ...TYPE(),
                ...URI(),
            }),
        }));

        const data = '#EXTM3U\n#EXT-X-ENDLIST\n#EXT-X-PRELOAD-HINT:TYPE=PART,URI="midRoll274.1.mp4"';

        interpreter(data, schema);

        expect(schema.logs['0x1161']).toStrictEqual({
            value: null,
            row: 0,
            col: 0,
            isValidated: true,
        });
    });

    test('missing #EXTINF tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXTINF(),
        }));

        let data = '#EXTM3U\n';

        data += '#EXT-X-TARGETDURATION:10\n\n';
        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/first.ts\n';
        data += '#EXTINF:9.009,\n';
        data += 'http://media.example.com/second.ts\n';
        data += 'http://media.example.com/third.ts\n';

        interpreter(data, schema);

        expect(schema.logs['0x1260']).toStrictEqual({
            value: null,
            row: 0,
            col: 0,
            isValidated: true,
        });
    });
});
