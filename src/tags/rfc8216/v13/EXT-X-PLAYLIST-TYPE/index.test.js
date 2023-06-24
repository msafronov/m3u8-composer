import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_PLAYLIST_TYPE_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';

import { EXT_X_PLAYLIST_TYPE } from './index';

describe('v13 #EXT-X-PLAYLIST-TYPE', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_PLAYLIST_TYPE(),
        });

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:VOD';

        interpreter(data, schema);

        expect(schema[EXT_X_PLAYLIST_TYPE_ID].data).toStrictEqual([{
            value: 'VOD',
            row: 1,
            col: 0,
        }]);
    });

    test('should save the value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_PLAYLIST_TYPE(),
        });

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:VOD';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_PLAYLIST_TYPE_ID]).toBe('VOD');
    });

    test('should save the last value into the schema result', () => {
        const schema = ParserSchema({
            ...EXT_X_PLAYLIST_TYPE(),
        });

        const data = '#EXTM3U\n#EXT-X-PLAYLIST-TYPE:EVENT\n#EXT-X-PLAYLIST-TYPE:VOD\n\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_PLAYLIST_TYPE_ID]).toBe('VOD');
    });
});
