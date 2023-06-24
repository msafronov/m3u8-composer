import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@parser/schema';
import { attribute } from '@parser/node/attribute';
import { tagAttributeList } from '@parser/node/tag-attribute-list';

import { parser } from './index';

describe('parser m3u8-to-schema', () => {
    test('schema must be unchanged when passed an empty data', () => {
        const schema = ParserSchema({});
        const oldSchema = { ...schema };
        const data = '';
        
        parser(data, schema);

        expect(schema).toStrictEqual(oldSchema);
    });

    test('data with empty lines should generate an empty schema', () => {
        const schema = ParserSchema({});
        const data = '\n\n\r\n';
        
        parser(data, schema);

        expect(schema).toStrictEqual({
            playlist: {},
            mediaSegments: [],
            variantStreams: [],
            metadata: {},
        });
    });

    test('non-existent attributes from the start should be ignored', () => {
        const EXT_X_START = (attributes) => {
            return tagAttributeList('#EXT-X-START', attributes);
        };

        const PRECISE = () => {
            return attribute('PRECISE');
        };

        const schema = ParserSchema({
            ...EXT_X_START({
                ...PRECISE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-START:NON-EXISTENT-TAG="VALUE",PRECISE=22\n\n\n';
        
        parser(data, schema);

        expect(schema.playlist).toStrictEqual({
            '#EXT-X-START': {
                'PRECISE': '22',
            },
        });
    });

    test('non-existent attributes from the end should be ignored', () => {
        const EXT_X_START = (attributes) => {
            return tagAttributeList('#EXT-X-START', attributes);
        };

        const PRECISE = () => {
            return attribute('PRECISE');
        };

        const schema = ParserSchema({
            ...EXT_X_START({
                ...PRECISE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-START:PRECISE=22,NON-EXISTENT-TAG="VALUE"';
        
        parser(data, schema);

        expect(schema.playlist).toStrictEqual({
            '#EXT-X-START': {
                'PRECISE': '22',
            },
        });
    });
});
