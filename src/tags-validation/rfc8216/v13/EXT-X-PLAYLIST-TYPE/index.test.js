import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { ValidationSchema } from '@tags-validation/rfc8216/v13/schema';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { EXT_X_PLAYLIST_TYPE } from '@tags/rfc8216/v13/EXT-X-PLAYLIST-TYPE';

import { EXT_X_PLAYLIST_TYPE_V13 } from './index';

describe('v13 #EXT-X-PLAYLIST-TYPE', () => {
    test('normal tag without an error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PLAYLIST_TYPE_V13(EXT_X_PLAYLIST_TYPE()),
        }));

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:VOD';

        interpreter(data, schema);

        expect(schema.logs['0x1180']).not.toBeDefined();
    });

    test('attempting to parse more than one tag error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PLAYLIST_TYPE_V13(EXT_X_PLAYLIST_TYPE()),
        }));

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:EVENT\n#EXT-X-PLAYLIST-TYPE:VOD';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1180']).toStrictEqual({
            isValidated: true,
            value: 'VOD',
            row: 2,
            col: 0,
        });
    });

    test('enumerated-string unknown value error', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PLAYLIST_TYPE_V13(EXT_X_PLAYLIST_TYPE()),
        }));

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:INVALID_VALUE';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1181']).toStrictEqual({
            isValidated: true,
            value: 'INVALID_VALUE',
            row: 1,
            col: 0,
        });
    });

    test('there should be no error when passing VOD value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PLAYLIST_TYPE_V13(EXT_X_PLAYLIST_TYPE()),
        }));

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:VOD';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1181']).not.toBeDefined();
    });

    test('there should be no error when passing EVENT value', () => {
        const schema = ValidationSchema(ParserSchema({
            ...EXT_X_PLAYLIST_TYPE_V13(EXT_X_PLAYLIST_TYPE()),
        }));

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:EVENT';
    
        interpreter(data, schema);
    
        expect(schema.logs['0x1181']).not.toBeDefined();
    });
});
