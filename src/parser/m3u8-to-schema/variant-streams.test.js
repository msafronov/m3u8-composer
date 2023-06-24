import { describe, expect, test } from 'vitest';
import { ParserSchema } from '@parser/schema';
import { attribute } from '@parser/node/attribute';
import { tag } from '@parser/node/tag';
import { tagAttributeList } from '@parser/node/tag-attribute-list';
import { VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID } from '@parser/const';

import { parser } from './index';
import { tagAttributeListMultiple } from '@parser/node/tag-attribute-list-multiple';

describe('parser m3u8-to-schema', () => {
    test('tag should apply to the next variant stream', () => {
        const EXT_X_CUSTOM_TAG = (attributes) => {
            return tag(
                '#EXT-X-CUSTOM-TAG',
                attributes,
                VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID,
            );
        };

        const schema = ParserSchema({
            ...EXT_X_CUSTOM_TAG(),
        });

        const data = '#EXTM3U\n#EXT-X-CUSTOM-TAG\ntest.mp4';
        
        parser(data, schema);

        expect(schema.variantStreams).toStrictEqual([{
            '#EXT-X-CUSTOM-TAG': true,
            'URI': 'test.mp4'
        }]);
    });

    test('tag attribute list should apply to the next variant stream', () => {
        const EXT_X_CUSTOM_TAG = (attributes) => {
            return tagAttributeList(
                '#EXT-X-CUSTOM-TAG',
                attributes,
                VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID,
            );
        };

        const CUSTOM_ATTRIBUTE = () => {
            return attribute('CUSTOM-ATTRIBUTE');
        };

        const schema = ParserSchema({
            ...EXT_X_CUSTOM_TAG({
                ...CUSTOM_ATTRIBUTE(),
            }),
        });

        const data = '#EXTM3U\n#EXT-X-CUSTOM-TAG:CUSTOM-ATTRIBUTE=TEST\ntest.mp4';
        
        parser(data, schema);

        expect(schema.variantStreams).toStrictEqual([{
            '#EXT-X-CUSTOM-TAG': {
                'CUSTOM-ATTRIBUTE': 'TEST',
            },
            'URI': 'test.mp4'
        }]);
    });

    test('tag attribute list multiple should apply to the next variant stream', () => {
        const EXT_X_CUSTOM_TAG = (attributes) => {
            return tagAttributeListMultiple(
                '#EXT-X-CUSTOM-TAG',
                attributes,
                VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID,
            );
        };

        const CUSTOM_ATTRIBUTE = () => {
            return attribute('CUSTOM-ATTRIBUTE');
        };

        const schema = ParserSchema({
            ...EXT_X_CUSTOM_TAG({
                ...CUSTOM_ATTRIBUTE(),
            }),
        });

        let data = '#EXTM3U\n';
        
        data += '#EXT-X-CUSTOM-TAG:CUSTOM-ATTRIBUTE=TEST\n';
        data += '#EXT-X-CUSTOM-TAG:CUSTOM-ATTRIBUTE=TEST2\n\n';
        data += 'test.mp4';
        
        parser(data, schema);

        expect(schema.variantStreams).toStrictEqual([{
            '#EXT-X-CUSTOM-TAG': [{
                'CUSTOM-ATTRIBUTE': 'TEST',
            }, {
                'CUSTOM-ATTRIBUTE': 'TEST2',
            }],
            'URI': 'test.mp4'
        }]);
    });

    test('URI with line breaks at the end of the playlist should save correctly', () => {
        const EXT_X_CUSTOM_TAG = (attributes) => {
            return tag(
                '#EXT-X-CUSTOM-TAG',
                attributes,
                VARIANT_STREAM_APPLY_NEXT_MEDIA_TYPE_ID,
            );
        };

        const schema = ParserSchema({
            ...EXT_X_CUSTOM_TAG(),
        });

        const data = '#EXTM3U\n#EXT-X-CUSTOM-TAG\ntest.mp4\n\n\ntest2.mp4\n\n';
        
        parser(data, schema);

        expect(schema.variantStreams).toStrictEqual([{
            '#EXT-X-CUSTOM-TAG': true,
            'URI': 'test.mp4'
        }, {
            'URI': 'test2.mp4'
        }]);
    });
});
