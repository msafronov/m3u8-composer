import { describe, expect, test } from 'vitest';
import { interpreter } from '@interpreter/m3u8-to-schema';
import { EXT_X_CONTENT_STEERING_ID, SERVER_URI_ID, PATHWAY_ID_ID } from '@tags/const';
import { ParserSchema } from '@tags/rfc8216/v13/schema';
import { SERVER_URI } from '@tags/rfc8216/v13/EXT-X-CONTENT-STEERING/attributes/SERVER-URI';
import { PATHWAY_ID } from '@tags/rfc8216/v13/EXT-X-CONTENT-STEERING/attributes/PATHWAY-ID';

import { EXT_X_CONTENT_STEERING } from './index';

describe('v13 #EXT-X-CONTENT-STEERING', () => {
    test('should save the value into the schema data', () => {
        const schema = ParserSchema({
            ...EXT_X_CONTENT_STEERING({
                ...SERVER_URI(),
                ...PATHWAY_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-CONTENT-STEERING:SERVER-URI="https://example.com/content-steering?switching=true",PATHWAY-ID="azure"';

        interpreter(data, schema);

        expect(schema[EXT_X_CONTENT_STEERING_ID].data).toStrictEqual([{
            value: null,
            row: 1,
            col: 0,
            [SERVER_URI_ID]: {
                value: '"https://example.com/content-steering?switching=true"',
                row: 1,
                col: 24,
            },
            [PATHWAY_ID_ID]: {
                value: '"azure"',
                row: 1,
                col: 89,
            },
        }]);
    });

    test('should save the value into the playlist result', () => {
        const schema = ParserSchema({
            ...EXT_X_CONTENT_STEERING({
                ...SERVER_URI(),
                ...PATHWAY_ID(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-CONTENT-STEERING:SERVER-URI="https://example.com/content-steering?switching=true",PATHWAY-ID="azure"';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_CONTENT_STEERING_ID][PATHWAY_ID_ID]).toBe('azure');
    });

    test('should override to the last value into the playlist result', () => {
        const schema = ParserSchema({
            ...EXT_X_CONTENT_STEERING({
                ...SERVER_URI(),
                ...PATHWAY_ID(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-CONTENT-STEERING:SERVER-URI="https://example.com/content-steering?switching=true",PATHWAY-ID="azure"\n';
        data += '#EXT-X-CONTENT-STEERING:SERVER-URI="https://example2.com/content-steering?switching=true",PATHWAY-ID="example"\n';

        interpreter(data, schema);

        expect(schema.playlist[EXT_X_CONTENT_STEERING_ID][PATHWAY_ID_ID]).toBe('example');
    });
});
